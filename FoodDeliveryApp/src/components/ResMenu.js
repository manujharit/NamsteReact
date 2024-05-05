import MenuShimmer from "./shimmers/MenuShimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategory from "./ResCategory"
import { useState } from "react"

const ResMenu = () => {
    const { resId } = useParams()
    const [showIndex, setShowIndex] = useState(null)
    const resInfo = useRestaurantMenu(resId)
    if (!resInfo) return <MenuShimmer />
    const { name, cuisines } = resInfo?.cards?.filter((card) => card.card?.relevance?.sectionId === "POP_UP_CROUTON_MENU")[0]?.card?.card?.info

    const categories = resInfo?.cards?.filter(card => card.groupedCard)[0].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    return (
        <div className="flex flex-col justify-start mx-56  my-10 p-10 shadow ">
            <h1 className="text-3xl font-extrabold"> {name}</h1>
            <br />
            <h3 className="text-lg font-semibold text-gray-500">{cuisines.join(", ")}</h3>
            <br />
            {categories.map((card, index) => {
                return <ResCategory key={card.card.card.title} data={card.card.card} index={index} showItems={index === showIndex ? true : false} setShowIndex={setShowIndex}/>
            })}
        </div>
    )
}


export default ResMenu