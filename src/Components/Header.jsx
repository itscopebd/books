import React, { useState } from 'react';
import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='flex justify-between w-4/5 mx-auto bg-gray-400 my-4 px-4 py-2 rounded-lg relative'>
      <Link to="/">
        <div className='flex gap-3'>

          <BoltIcon className="h-6 w-6 text-blue-700" />
          <span className='text-white'>Books</span>

        </div>
      </Link>
      <nav>
        <ul className='lg:flex gap-4 text-white hidden '>
          <li> <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")} >Home</NavLink> </li>
          <li> <NavLink to="/books" className={({ isActive }) => (isActive ? "text-blue-500" : "")} >Books</NavLink> </li>
          <li> <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "")} >About</NavLink> </li>
        </ul>
        {/* mobile menu  */}
        <div className='lg:hidden'>
          <button onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>

          {
            isMenuOpen && (
              <nav className='mobile__nav absolute left-3 top-3  w-96 bg-white p-4 rounded-lg duration-1000'>
                <button onClick={()=>setIsMenuOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-blue-700 absolute top-3 right-3" />
                </button>
                <ul>
                  <li>
                    <NavLink to="/" className="flex gap-2 items-center">
                      <BoltIcon className="h-6 w-6 text-blue-700" />
                      <span className='text-black'>Books</span>

                    </NavLink> </li>

                  <li className='py-4'> <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-700" : ""}>Home</NavLink> </li>
                  <li className='py-4'> <NavLink to="/books" className={({ isActive }) => isActive ? "text-blue-700" : ""}>Books</NavLink> </li>
                  <li className='py-4'> <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-700" : ""}>About</NavLink> </li>
                </ul>
              </nav>
            )
          }
        </div>
      </nav>

    </div>
  );
};

export default Header;