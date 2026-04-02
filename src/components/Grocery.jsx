import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const Grocery = () => 
{
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
        <h1>Grocery Online Store & have lots of child inside the component with <b>{loggedInUser}</b> </h1>
    </div>
  )
}

export default Grocery;