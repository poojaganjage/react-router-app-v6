import {useLocation} from "react-router-dom";
const Login = () => {
    const {state} = useLocation();
    console.log(state);
    return(
        <>
            <h1>Login Page - {state.st}</h1>
        </>
    );
}
export default Login;