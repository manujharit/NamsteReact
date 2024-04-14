import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const ResMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)
    if (!resInfo) return <Shimmer />
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