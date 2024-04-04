import { useState, useEffect } from "react"
import fetchWithProxy from "../utils/fetchProxy"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const ResMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const dataJson = await fetchWithProxy(`https://www.swiggy.com/dapi/menu/pl?complete-menu=true&lat=26.9195875&lng=75.78796080000001&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER&page-type=REGULAR_MENU`)
        setResInfo(dataJson.data)
    }
    if (!resInfo) return <Shimmer />
    console.log(resInfo?.cards?.filter(card => card.groupedCard)[0].groupedCard)
    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.filter((card) => card.card?.relevance?.sectionId === "POP_UP_CROUTON_MENU")[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards?.filter(card => card.groupedCard)[0].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card.card.card.title === "Recommended")[0].card?.card
    return (
        <div className="menu">
            <h1> {name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((itemCard) => {
                    const { name, id, price, defaultPrice } = itemCard?.card?.info
                    return (
                        <li key={id}><b>{name}</b><br /> Rs.{price / 100 || defaultPrice / 100}</li>
                    )
                })}
            </ul>
        </div>
    )
}


export default ResMenu