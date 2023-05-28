import React from 'react';
import { Link } from 'react-router-dom';
const SingleBook = ({book}) => {


    return (
       <Link to={`../book/${book.isbn13}`}>
         <div className='relative overflow-hidden mb-5'>
            <img className='w-full object-fill' src={book.image} alt="book cover" />
            <div className='text-center absolute bg-black text-white  inset-0 opacity-0 hover:opacity-75 rounded-lg transition duration-200 transform hover:translate-y-2 flex flex-col p-4'>

                <h4>{book.title}</h4>
                <h4>{book.subtitle.substring(0, 45)}....</h4>
                <p className='mt-auto'>{book.price}</p>
            </div>
        </div>
       </Link>
    );
};

export default SingleBook;