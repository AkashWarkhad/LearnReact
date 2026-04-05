import HelloWorld from "./HelloWorld";
import { useState } from "react";

const About = ()=>
{
    const [show, setShow] = useState(false);

    const callHelloWorld = () => 
    {
        console.log("Clicked");
        setShow(true); // trigger re-render
    };

    
    return(
        <div>
            <h1 className="text-center font-bold">This is about React Fundamentals.</h1> <hr/> <br/>
            
            <button 
                className="p-2 m-2 border border-amber-600 rounded-lg bg-black text-white cursor-pointer"
                onClick={ callHelloWorld }>ClickMeForMoreInfo
            </button>

            {show && <HelloWorld />}   {/* ✅ Render conditionally */}
            
        </div>
    );
}

export default About;