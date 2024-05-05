import { CDN_URL } from "../utils/constants"


const ItemList = ({ info }) => {

    return (
        <div className=" p-4 shadow drop-shadow-lg flex flex-row h-44">
            <div className="flex flex-col px-2 w-[1000px]">
                <span className="font-bold text-lg">{info.name}</span>
                <span className="text-md font-semibold">₹ {info.price / 100 || info.defaultPrice / 100}/-</span>
                <p className="text-sm text-gray-400">{info.description}</p>
            </div>
            <div className="flex justify-center">
                <div className="absolute mt-[117px]">
                    <button className=" rounded-xl px-10 py-2 bg-white text-sm font-extrabold text-green-800">ADD</button>

                </div>
                <img src={CDN_URL + info.imageId} className="w-[150px] rounded-xl shadow-md" />
            </div>
        </div>
    )
}

export default ItemList