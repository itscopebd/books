import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBook from './SingleBook';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const nevigator=useNavigation();
    if (nevigator.state==="loading") {
        return <LoadingSpinner></LoadingSpinner>
    }
    const {books}= useLoaderData();
    console.log(books)
    return (
        <div className='my-container'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition duration-200 transform hover:translate-y-2'>
              
              {
                  books.map(data=><SingleBook book={data}></SingleBook>)
                  
                }
              

            </div>
        </div>
    );
};

export default Books;