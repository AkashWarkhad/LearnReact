import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const User = ({component, location})=> 
{
    // Declaration of fields in Functional based component
    const [count, setCount] = useState(1);
    const [mobNo, setMobNo] = useState("9743483**8");

    // Use useContext to fecth the data anywhere
    const { loggedInUser } = useContext(UserContext);

    useEffect(()=>
    {
        console.log("UseEffect");
        // Every 1 sec calls callbackFunction & its cleared once we move to other page then useEffect returns clears the interval
        const timer = setInterval(()=> 
        {
            console.log("Functional based useEffect!!");
        }, 1000);

        return() => 
        {
            // Cleared the interval
            console.log("UseEffect is Cleared!!");
            clearInterval(timer);
        };
    }, []);

    return(
        <div className="userCard">
            <h2>Akash Warkhad From {component}</h2>
            <h3>{count} Location : {location}</h3>
            <p>Email Address : helpdesk24by7@gamail.com</p>
            <p>Mobile No: {mobNo}</p>
            <h1>User Context in Class Component : <b>"{loggedInUser}"</b></h1>
            <button onClick=
            {()=>
                {
                    setCount(count + 1);
                }
            }>Inc Count {count}</button>
        </div>
    );
}

export default User;