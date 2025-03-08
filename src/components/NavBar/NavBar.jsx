import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import StateContext from "../../StateContext/StateContext";
const NavBar = () => {
    const location = useLocation();
    const navColor = location.pathname === '/' ? 'text-white' : 'text-black'

    const {cartListCount}=useContext(StateContext)
    const {wishListCount}=useContext(StateContext)


    return (
        <div className="navbar px-10 lg:px-30 pt-14 lg:py-12 relative z-10">
            <div className="navbar-start flex gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="p-0 btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <a className={`btn p-0 btn-ghost text-xl font-bold max-md:text-lg max-md:font-medium ${navColor}`} >Gear Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={navColor} to='/'>Home</NavLink></li>
                    <li><NavLink className={navColor} to='/statistics'>Statistics</NavLink></li>
                    <li><NavLink className={navColor} to='/dashboard'>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4 max-md:gap-2">
                <div className="flex">
                    <button className="max-md:text-lg text-2xl p-2 bg-white border-blue-200  border rounded-full"><MdOutlineShoppingCart /></button>
                    <div>
                        <span className="-ml-2 bg-white text-center text-red-500 rounded-full max-md:text-[14px] text-base px-2 py-0.5">{cartListCount.length}</span>
                    </div>
                </div>
                <div className="flex">
                    <button className="max-md:text-lg text-2xl p-2 bg-white border-blue-200  border rounded-full"><MdFavoriteBorder /></button>
                    <div>
                        <span className="-ml-2 bg-white text-center text-red-500 rounded-full max-md:text-[14px] text-base px-2 py-0.5">{wishListCount.length}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;