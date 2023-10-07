import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut,brand } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="mx-10"><NavLink to="/">Home</NavLink></li>
        <li className="mx-10"><NavLink to="/about">About</NavLink></li>
        <li className="mx-10"><NavLink to="/services">Services</NavLink></li>
        {/* <li className="mx-10"><NavLink to="/addict">Addict</NavLink></li> */}

    </>

    return (
        <div className=" min-h-[8vh] navbar max-w-7xl mx-auto items-center font-semibold bg-littledark sticky top-0 z-10">
            <div className="navbar-start">
                <NavLink to="/">  {brand}</NavLink>
              

            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-5">
                    {
                        user ?
                            <li><button onClick={handleSignOut}>Sign Out</button></li>
                            :
                            <li><NavLink to="/login">Login</NavLink></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;