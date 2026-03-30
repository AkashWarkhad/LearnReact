import { useState } from "react";

const User = ({component, location})=> 
{
    // Declaration of fields in Functional based component
    const [count, setCount] = useState(1);
    const [mobNo, setMobNo] = useState("9743483**8");

    return(
        <div className="userCard">
            <h2>Akash Warkhad from {component}</h2>
            <h3>{count} Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
            <p>Mobile No: {mobNo}</p>
            <button onClick={()=> 
                {
                    setCount(count + 1);
                }}>Inc Count {count}</button>
        </div>
    );
}

export default User;