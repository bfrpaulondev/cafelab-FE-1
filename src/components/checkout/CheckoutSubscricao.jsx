import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Stripe from 'stripe';
import {useShoppingCart} from "../context/ShoppingCartContext.jsx";
import {addOrder} from "../../services/orderService.jsx";
import {CheckoutFormSubscricao} from "./CheckoutFormSubscricao.jsx";
import {CardElement} from "@stripe/react-stripe-js";

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

export default function CheckoutSubscricao() {
    const [clientSecret, setClientSecret] = useState(null);
    const {cartItems, subscription, products, emptyCart} = useShoppingCart()
    const navigate = useNavigate();

    useEffect(() => {
        async function createPaymentIntent() {
            const total = subscription.preco

            const order = {
                user: {name: "Jose Carlos", morada: "av 1", NIF: "123456789", email: "teste@terste.com"},
                items: subscription,
                total: total,
                paymentStatus: "PENDING"
            }
            if (total === 0) return;
            const dbOrder = addOrder(order);

            const paymentMethod = await stripe.createPaymentMethod({
                type: "card",
                card: elements?.getElement(CardElement),
                billing_details: {
                    name,
                    email,
                },
            });
            // create a stripe customer
            const customer = await stripe.customers.create({
                name: order.user.name,
                email: order.user.email,
                payment_method: paymentMethod,
                invoice_settings: {
                    default_payment_method: {
                        "id": "pm_123456789",
                        "object": "payment_method",
                        "billing_details": {
                            "address": "",
                            "email": "jenny@example.com",
                            "name": "Jenny Rosen",
                            "phone": "+335555555555"
                        },
                        "sepa_debit": {
                            "bank_code": "37040044",
                            "branch_code": "94832",
                            "country": "FR",
                            "fingerprint": "ygEJfUjzWMGyWnZg",
                            "last4": "3000"
                        },
                        "type": "sepa_debit",
                    },
                },
            });


            const paymentIntent = await stripe.subscriptions.create({
                customer: customer.id,
                items: [{price: 1}],
                payment_settings: {
                    payment_method_options: {
                        card: {
                            request_three_d_secure: 'any',
                        },
                    },
                    payment_method_types: ['card'],
                    save_default_payment_method: 'on_subscription',
                },
                expand: ['latest_invoice.payment_intent'],
            });

            if (paymentIntent.client_secret == null) {
                throw Error('Stripe failed to create payment intent');
            }

            setClientSecret(paymentIntent.client_secret);
        }

        createPaymentIntent();
    }, [cartItems, products]);

    if (!clientSecret) {
        return null; // or some loading state
    }

    return <CheckoutFormSubscricao clientSecret={clientSecret}/>;
}