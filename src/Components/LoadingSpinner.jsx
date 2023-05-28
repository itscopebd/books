import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='my-container'>
            <div className='flex justify-center items-center h-[calc(100vh-72px)] gap-2'>
                <p className='font-bold text-4xl text-blue-500'>L</p>
                <div className='h-10 w-10 border-4 border-dashed border-blue-500 rounded-full font-bold text-4xl animate-spin duration-1000'></div>
                <p className='font-bold text-4xl text-blue-500'>ding........</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;