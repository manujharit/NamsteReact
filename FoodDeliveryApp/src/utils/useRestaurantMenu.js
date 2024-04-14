import { useEffect, useState } from "react";
import fetchWithProxy from "./fetchProxy";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData(resId)
    }, [])
    const fetchData = async (resId) => {
        const dataJson = await fetchWithProxy(`https://www.swiggy.com/dapi/menu/pl?complete-menu=true&lat=26.9195875&lng=75.78796080000001&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER&page-type=REGULAR_MENU`)
        setResInfo(dataJson.data)
    }
    return resInfo
}



export default useRestaurantMenu;