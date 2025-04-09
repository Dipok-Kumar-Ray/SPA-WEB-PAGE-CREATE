import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import BidItems from './BidItems';
import Footer from "./Footer";

// import { useEffect, useState } from 'react';

function App() {
    // const [bids, setBids] = useState([]);

    // useEffect(() => {
    //     fetch('public/data.json')
    //         .then(res => res.json())
    //         .then(data => setBids(data));
    // }, []);

    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>

            <BidItems></BidItems>
            {/* <div className="grid grid-cols-1  justify-around"> */}
                {/* {bids.map((bid) => (
                    <BidItems key={bid.id} bid={bid}></BidItems>
                ))} */}
              {/* <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Current Bid</th>
        </tr>
      </thead>
      <tbody>
      {
        bids.map(bid => (
          <tr key={bid.id}>
            <td>{bid.title}</td>
            <td>{bid.currentBidPrice}

            </td>
          </tr>
        ))}
      </tbody>
    </table> */}



            {/* </div> */}
        </>
    );
}

export default App;
