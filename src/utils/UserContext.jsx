import { createContext } from "react";

// Data which is accessable in all components which wrapped under UserContext provider.
const UserContext = createContext(
{
    loggedInUser: "Dafault"
});

export default UserContext;