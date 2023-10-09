import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
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
      <div className=" min-h-[8vh] navbar max-w-7xl mx-auto md:items-center font-semibold  sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-tea-green rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">{brand}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
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
                        {/* <img src={user?.photoURL} /> */}

                        {
                        user ?
                        <img src={user?.photoURL} />
                       
                            :
                            <FaUserCircle className="text-4xl "/>
                    }

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

</div>
</div>

);
};
export default Navbar;