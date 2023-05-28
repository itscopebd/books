import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {
    const nevagation=useNavigation();
    if(nevagation.state==="loading"){
     return <LoadingSpinner></LoadingSpinner>
    }
    const [fold, setFold] = useState(true);
    const book = useLoaderData();
    const { title, authors, publisher, year, rating, price, image, desc } = book;
    return (
        <div className='my-container'>
            <div className='flex border-2 gap-4 items-center'>
                <div className='w-6/12'>
                    <img className='w-full' src={image} alt="" />
                </div>
                <div className='w-6/12'>
                    <h3 className='text-4xl font-bold my-3'>{title}</h3>
                    <p>Authors: {authors}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                    {
                        fold ? (<>
                            <p>{desc.substring(0, 90)}.... <span className='text-blue-900 font-bold' onClick={() => setFold(!fold)}>Read More</span> </p>
                        </>)
                            :
                            (
                                <>
                                    <p>{desc}.... <span className='text-green-900 font-bold' onClick={() => setFold(!fold)}>Read Less</span> </p>
                                </>
                            )
                    }
                    <div className='flex gap-3 items-center my-5'>
                        <button className='btn'>Buy Now</button>
                        <p className='font-bold'>Price: {price}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;