import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="mx-10"><NavLink to="/">Home</NavLink></li>
        <li className="mx-10"><NavLink to="/about">About</NavLink></li>
        <li className="mx-10"><NavLink to="/career">Career</NavLink></li>
        <li className="mx-10"><NavLink to="/addict">Addict</NavLink></li>
        {
            user ?
                <li><button onClick={handleSignOut}>Sign Out</button></li>
                :
                <Link to="/login">
                    <li><NavLink to="/login">Login</NavLink></li>
                </Link>
        }
    </>

    return (
        <div className="navbar max-w-7xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                </div>

            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;