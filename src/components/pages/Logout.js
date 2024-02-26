import {useLocation} from "react-router-dom";
const Logout = () => {
    const {state} = useLocation();
    return(
        <>
            <h1>Logout Page - {state.st}</h1>
        </>
    );
}
export default Logout;