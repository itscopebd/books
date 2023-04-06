import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex justify-between w-4/5 mx-auto bg-gray-400 my-4 px-4 py-2 rounded-lg'>
         <Link to="/">
          <div className='flex gap-3'>
          
          <BoltIcon className="h-6 w-6 text-blue-700" />
            <span className='text-white'>Books</span>
          
          </div>
          </Link>
          <nav>
            <ul className='flex gap-4 text-white'>
                <li> <NavLink to="/" className={({isActive})=>(isActive? "text-blue-500":"")} >Home</NavLink> </li>
                <li> <NavLink to="/books" className={({isActive})=>(isActive? "text-blue-500":"")} >Books</NavLink> </li>
                <li> <NavLink to="/about" className={({isActive})=>(isActive? "text-blue-500":"")} >About</NavLink> </li>
            </ul>
          </nav>
        
        </div>
    );
};

export default Header;