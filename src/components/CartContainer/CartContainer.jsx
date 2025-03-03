import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({ handleIsActive, isActive }) => {
    return (
        <div>
          <h2 className="text-2xl font-bold">This is CartContainer</h2>  
          <div>
                <button onClick={() => handleIsActive('cart')} className={isActive ? "text-xl font-bold rounded-md px-4 py-2 bg-green-700 mr-5" : "text-xl p-4 font-bold"}>Cart</button>
                <button onClick={() => handleIsActive('about')} className={isActive ? "text-xl p-4 font-bold" : "text-xl font-bold rounded-md px-4 py-2 bg-green-700 mr-5"}>About</button>
          </div>
          {
            isActive? <Cart></Cart>: <About></About>
          }
        </div>
    );
};

export default CartContainer;