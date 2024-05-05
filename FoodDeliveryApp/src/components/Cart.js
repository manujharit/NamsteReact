import { useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    const dispatch = useDispatch();
  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="bg-red-500 text-white my-4 px-4 py-2 rounded-md" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        {cartItems.length === 0 ? <h1>No items in cart</h1> :
        cartItems.map((item) => (
            <div key={item.id} className="flex justify-between my-4 py-6 border shadow-md p-4">
                <h2>{item.name}</h2>
                <p>Rs. {item.price/100 || item.defaultPrice/100}</p>
            </div>
        ))}
    </div>
  )
}

export default Cart