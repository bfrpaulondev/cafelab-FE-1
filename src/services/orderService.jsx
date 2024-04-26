import SupabaseClientUtil from "../components/utilities/SupabaseClientUtil.jsx";

const supabase = SupabaseClientUtil.supabaseClient

export const getOrders = async () => {

    console.log("Fetching orders...")
    // Todo: implement put cache on orders table
    const {data} = await supabase
        .from('products')
        .select();

    return data;
}

export const addOrder = async (order) => {
    console.log("Adding order...")
    const {data} = await supabase
        .from("order")
        .insert({
            user: order.user, // This will be converted to JSON
            products: order.items, // This will be converted to JSON
            total: order.total,
            payment_status: order.paymentStatus
        })
    return data;
}
