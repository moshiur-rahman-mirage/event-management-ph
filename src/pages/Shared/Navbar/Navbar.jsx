import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut, brand } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="mx-10"><NavLink to="/">Home</NavLink></li>
        <li className="mx-10"><NavLink to="/about">About</NavLink></li>
        <li className="mx-10"><NavLink to="/contact">Contact Us</NavLink></li>

    </>


    return (
        <div className=" min-h-[8vh] navbar max-w-7xl mx-auto items-center font-semibold  sticky top-0 z-10">
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
                   {user?.displayName}
               
                </ul>

               


                 <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {
                        user ?
                            <li><NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink></li>
                            :
                            <li><NavLink to="/login">Login</NavLink></li>
                    }
                    </ul>
                </div>







                {/* <ul className="menu menu-horizontal px-5">
                    {
                        user ?
                            <li><button onClick={handleSignOut}>Sign Out</button></li>
                            :
                            <li><NavLink to="/login">Login</NavLink></li>
                    }
                </ul> */}
            </div>
        </div>
    );
};

export default Navbar;