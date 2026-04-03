import { createContext } from "react";

// Data which is accessable in all components
const UserContext = createContext(
{
    loggedInUser: "Dafault"
});

export default UserContext;