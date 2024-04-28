import {createContext, useContext, useState, useEffect} from "react"
import {useLocalStorage} from "../hooks/useLocalStorage"
import {ShoppingCart} from "../cart/ShoppingCart"
import {getProducts} from "../../services/productsService";

const SubscriptionContext = createContext({})

export function useSubscription() {
    return useContext(SubscriptionContext)
}

export function SubscriptionProvider({children}) {
    const [coffee, setCoffee] = useLocalStorage(
        "coffee",
        []
    )
    function getCoffeeQuantity(name) {
        console.log(coffee)
        return coffee.find(item => item.name === name)?.quantity || 0
    }
    const boxQuantity = coffee.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    function emptyBox() {
        setCoffee([]);
    }
    function addCoffee(name) {
        setCoffee(prevCoffees => {
            const existingCoffee = prevCoffees.find(coffee => coffee.name === name);

            if (existingCoffee) {
                return prevCoffees.map(coffee =>
                    coffee.name === name ? { ...coffee, quantity: coffee.quantity + 1 } : coffee
                );
            } else {
                return [...prevCoffees, { name, quantity: 1 }];
            }
        });
    }

    function removeCoffee(name) {
        setCoffee(prevCoffees => {
            const existingCoffee = prevCoffees.find(coffee => coffee.name === name);

            if (existingCoffee && existingCoffee.quantity > 1) {
                // If the coffee exists and its quantity is more than 1, decrement its quantity
                return prevCoffees.map(coffee =>
                    coffee.name === name ? { ...coffee, quantity: coffee.quantity - 1 } : coffee
                );
            } else {
                // If the coffee's quantity is 1, remove it from the array
                return prevCoffees.filter(coffee => coffee.name !== name);
            }
        });
    }



    return (
        <SubscriptionContext.Provider
            value={{
                getCoffeeQuantity,
                addCoffee,
                removeCoffee,
                boxQuantity,
                emptyBox
            }}
        >
            {children}
        </SubscriptionContext.Provider>
    )
}