import React from 'react';

const Footer = () => {
    return (
        <div> 
           <h1 className='mt-20'> <span className='text-3xl font-semibold text-cyan-500'>Auction</span><span className='text-4xl font-extrabold text-yellow-400'>Gallery</span> </h1>
           <h3 className='text-xl font-semibold text-gray-700 gap-10 mt-4'>Bid. Win. Own.</h3>
           <div className='flex text-md font-small text-gray-600 gap-8 justify-center items-center mt-4'>
            <h4>Home</h4>
            <h4> Auctions</h4>
            <h4> Categories</h4>
            <h4>How to Works</h4>
           </div>
           <h5 className='text-md text-gray-700 mt-6'>@ 2025 AuctionHub. All rights reserved.</h5>
        </div>
    );
};

export default Footer;