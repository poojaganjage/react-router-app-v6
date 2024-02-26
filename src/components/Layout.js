import {NavLink, Outlet} from "react-router-dom";
const Layout = () => {
    return(
        <>
            <h1>React Router v6</h1>
            <ul>
                <li><NavLink to="/" style={({isActive}) => {
                    return{color: isActive ? "red" : ""}
                }}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => ({
                    color: isActive ? "red" : ""
                })}>About</NavLink></li>
                <li><NavLink to="/contact" style={function({isActive}) {
                    var color = isActive ? "red" : "";
                    return {color : color};
                }}>Contact</NavLink></li>
                <li><NavLink to="/post/mobile" style={function({isActive}) {
                    var color = isActive ? "red" : "";
                    return {color : color};
                }}>Post</NavLink></li>
                <li><NavLink to="/post/mobile/1" style={function({isActive}) {
                    var color = isActive ? "red" : "";
                    return {color : color};
                }}>Post with Id</NavLink></li>
            </ul>
            <Outlet />
        </>
    );
}
export default Layout;