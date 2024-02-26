import {useNavigate} from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const data = {
        st: "You are Logout from the System!"
    }
    return(
        <>
            <h1>Dashboard Page</h1>
            <button onClick={() => {navigate("/logout", {state:data})}}>Logout</button>
        </>
    );
}
export default Dashboard;