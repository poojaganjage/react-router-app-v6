import {Link, NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <>
            {/*<ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>*/}
            <ul>
                <li><NavLink to="/home" style={({isActive}) => { // isActive => predefined property or key.
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
        </>
    );
}
export default Navbar;