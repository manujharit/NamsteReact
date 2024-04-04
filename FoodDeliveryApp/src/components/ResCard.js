import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const ResCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, id } = resData
    return (
      <div className="res-card">
        <img className="res-img" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <span><h5>{avgRating}&nbsp;&nbsp;&nbsp;{costForTwo}&nbsp;&nbsp;&nbsp;{sla.slaString}</h5></span>
        <h5>{cuisines.join(", ")}</h5>
        <button><Link to={`/restaurants/${id}`}>View</Link></button>
      </div>
    )
  }

  export default ResCard;