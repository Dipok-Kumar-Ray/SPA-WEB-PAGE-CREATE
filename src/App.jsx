import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BidItems from './BidItems';
import Footer from "./Footer";
// import { useState } from "react";


// import { useEffect, useState } from 'react';

function App() {

//  const [marked, setMarked] =  useState([])

//  const handleMarked = (bid) => {
//  console.log(bid);
//  }

    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>

            <BidItems ></BidItems>
            {/* > handleMarked={handleMarked} */}
         <Footer></Footer>
        </>
    );
}

export default App;
