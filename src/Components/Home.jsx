import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/54639-boy-studying-science.json";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex items-center my-container'>
            <div className='w-6/12'>
                <p className='font-bold text-2xl text-gray-500'>On Sale!</p>
                <h3 className='font-bold text-4xl my-2'> A render lives a <br /> thousand lives <span className='text-blue-500'>before he dies</span> </h3>
                <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta sunt molestias maxime nam iure labore, vero consequuntur quis assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus nulla quis laboriosam esse iusto aperiam illum, optio quia est! </p>
                <div className='flex'>
                    <Link to="/books"> <button className='mr-5 btn'>Visit Store</button></Link>
                    <button className='text-gray-500'>Learn More</button>
                </div>
            </div>
            <div className='w-6/12'>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Home;