import { useRouteError } from "react-router-dom";

const Error = () => 
{
    const error = useRouteError();
    console.log("Error: ", error);
    return (
        <div>
            <h1>Opps.. Something went wrong......!!</h1>
            <b>{error.status}: {error.statusText}</b>
        </div>
    )
}

export default Error;