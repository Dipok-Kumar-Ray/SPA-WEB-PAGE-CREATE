import React from 'react';
import '../src/assets/Banner-min.jpg';

const Banner = () => {

    return (
           <div
      style={{
        backgroundImage: `url('../src/assets/Banner-min.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
      }}
    >
      {/* Overlay Text Container */}
      <div
        style={{
          marginLeft: '5%',
          maxWidth: '600px',
          background: 'rgba(0, 0, 0, 0.4)', // একটু dark overlay effect
          padding: '30px',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2' }}>
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p style={{ marginTop: '15px', fontSize: '1.1rem', opacity: 0.9 }}>
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
        </p>
        <button
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '19px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Explore Auctions
        </button>
      </div>
    </div>
    );

};

export default Banner;