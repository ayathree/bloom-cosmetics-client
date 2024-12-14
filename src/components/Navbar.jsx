import { FaRegStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSunLine } from "react-icons/ri";


const Navbar = () => {
    return (
       <div className="flex flex-col justify-center items-center gap-5">
         <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </div>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
  >
    <li className="p-2 font-semibold uppercase">Home</li>

    {/* Shop Dropdown */}
    <li>
      <details className="group">
        <summary className="p-2 font-semibold uppercase cursor-pointer">Shop</summary>
        <ul className="mt-2 bg-white shadow-lg p-2 rounded-lg lowercase font-thin">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenu 1
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenu 2
            </a>
          </li>
        </ul>
      </details>
    </li>

    {/* Pages Dropdown */}
    <li>
      <details className="group">
        <summary className="p-2 font-semibold uppercase cursor-pointer">Pages</summary>
        <ul className="mt-2 bg-white shadow-lg p-2 rounded-lg lowercase font-thin">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenu 1
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Submenu 2
            </a>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</div>

          
        </div>
        <div className="flex flex-col justify-center items-center gap-6 navbar-center">
            <div>
                <p className="uppercase text-black font-bold lg:text-3xl text-xl">Bloom cosmetics</p>
            </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row justify-center items-center gap-6 px-1 font-bold uppercase ">
            <button className="p-2 font-semibold uppercase ">home</button>
            <li className="relative group">
  <details><summary className="p-2 font-semibold uppercase ">Shop</summary></details>
  <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 lowercase font-thin">
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">Submenu 1</a>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a>
    </li>
  </ul>
</li>

<li className="relative group">
<details><summary className="p-2 font-semibold uppercase ">pages</summary></details>
  <ul className="absolute hidden group-hover:block bg-white shadow-lg p-2 lowercase font-thin">
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">Submenu 1</a>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a>
    </li>
  </ul>
</li>
          </ul>
        </div>
        
        </div>
        
        <div className="flex flex-col justify-center items-center gap-6 navbar-end">
        
        <div className="hidden lg:block">
        <label className="input input-bordered flex items-center gap-2 ">
  <input type="text" className="grow " placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 cursor-pointer">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </div>
          <div className="flex flex-row justify-center items-center gap-6">
            {/* div 1 */}
            <div className="hidden lg:block" >
            <GoPerson className="text-2xl" />
            </div >
            {/* div 2 */}
            <div className="hidden lg:block">
            <FaRegStar className="text-2xl" />
            </div>
            {/* div 3 */}
            <div className="hidden lg:block">
            <FiShoppingBag className="text-2xl" />
            </div>
           
            
{/* div 4 */}
         <div>
         <div className="relative group">
          <button className="btn btn-circle "><RiSunLine className="lg:text-2xl text-xl" /></button>
          <ul className="absolute right-0 hidden group-hover:block bg-white shadow-lg p-2  font-thin z-10">
    <li >
      <a href="#" className="block px-4 py-2 hover:bg-gray-200 flex justify-center items-center gap-2 "><RiSunLine/> Light</a>
    </li>
    <li>
      <a href="#" className="block px-4 py-2 hover:bg-gray-200 flex justify-center items-center gap-2 "> <MdOutlineDarkMode />Dark</a>
    </li>
  </ul>
          </div>
         </div>
          </div>
        </div>
      </div>
      <div className="navbar-center block lg:hidden">
      <label className="input input-bordered flex items-center gap-2 ">
<input type="text" className="grow " placeholder="Search" />
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="h-4 w-4 opacity-70 cursor-pointer">
  <path
    fillRule="evenodd"
    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    clipRule="evenodd" />
</svg>
</label> 

      </div>
       </div>
    );
};

export default Navbar;