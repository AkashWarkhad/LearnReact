import { useEffect, useState } from "react";

// Custom Hook: tracks whether the browser is online or offline
const useOnlineStatus = () => 
{
    // State to store the current online status (true = online, false = offline)
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => 
    {
        // Add an event listener for when the browser goes offline
        window.addEventListener("offline", () => 
        {
            setOnlineStatus(false);
        });

        // Add an event listener for when the browser comes back online
        window.addEventListener("online", () => 
        {
            setOnlineStatus(true);
        });

    // Cleanup function to remove event listeners when the component unmounts
    // This prevents memory leaks and unexpected behavior
    return () => 
    {
        window.removeEventListener("offline", () => 
        {
            setOnlineStatus(false);
        });

        window.removeEventListener("online", () => 
        {
            setOnlineStatus(true);
        });
    };
    }, []); // Empty dependency array means this runs once on mount

    // Return the current online status so components can use it
    return onlineStatus;
};

export default useOnlineStatus;