//This hook(useRouteError) is used to get the error object-> gives specific error code and details.
import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
        <h1>Oppss.....!!</h1>
        <h2>Someting went wrong....!</h2>
        <h3>{error.status + " : " + error.statusText}</h3>
        </div>
    )
};

export default Error;