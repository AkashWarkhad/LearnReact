import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryItems from './Restro/CategoryItems';
import { CDN_URL, EX_URL } from '../utils/StaticData/constant';
import { clearCart } from '../utils/Redux/cartSlice';

const Cart = () => 
{
  // Just Select the data which is required only. here in case its items
  const cartItems = useSelector((store)=> store.cart.items);

  // Returns the dispatch function from the Redux store . so that we call action
  const dispatch = useDispatch();

  console.log("CartItems :", cartItems);
  
  const ClearCart = () => 
  {
    // Dispatch the action function to make changes in the redux store.
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className='text-center m-5 p-5 font-bold'>Cart</h1>

      <button 
        className='m-2 p-2 bg-amber-200 cursor-pointer rounded-lg border'
        onClick={ClearCart}>Clear Cart
      </button>
      
      {cartItems.length === 0 && <p className='text-center italic'>Cart is empty. Add items in the cart!!</p>}
      
      <div className="bg-white w-7/12 m-auto">
        {
          cartItems.map((item) => 
          (
              <div 
                key={item.card.info.id + Math.random()}
                data-testid="cartItem"
                className="p-2 m-3 border border-gray-200 border-b-4 text-left flex justify-between">
                      
                  <div className="w-9/12">
  
                      <div className="py-2">
                          <h2>{item.card.info.name}</h2>
                          <span> ₹. {item.card.info.price / 100}</span>
                      </div>
  
                      <p className="text-xs">{item.card.info.description}</p>
                  </div>
  
                  <div className="w-3/12">
                      <img className="w-full rounded-lg" src={item.card.info?.imageId != null ? CDN_URL + item.card.info?.imageId : EX_URL} />
                  </div>
  
              </div>
          ))
        }
      </div>

    </div>
  );
}

export default Cart;