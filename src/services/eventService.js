import SupabaseClientUtil from "../components/utilities/SupabaseClientUtil.jsx";

const supabase = SupabaseClientUtil.supabaseClient

export const getEvents = async () => {
    try {
        console.log("Fetching events...")
        // Try to get data from cache
        const cachedData = localStorage.getItem('events');
        const cachedTime = localStorage.getItem('eventsTime');
        console.log("cachedData: ", cachedData)
        console.log("cachedTime: ", cachedTime)

        if (cachedData && cachedTime && new Date().getTime() - cachedTime < 360 * 60 * 1000) {
            // If data is in cache and it's not expired, return it
            return JSON.parse(cachedData);
        } else {

            console.log("Fetching events from supabase...")
            // Otherwise, fetch data from Supabase
            const {data} = await supabase
                .from('events')
                .select();

            // Store the fetched data in cache
            localStorage.setItem('events', JSON.stringify(data));
            localStorage.setItem('eventsTime', new Date().getTime());

            return data;
        }
    } catch (e) {
        throw e;
    }
}