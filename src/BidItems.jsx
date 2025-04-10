import { useEffect, useState } from 'react';
import { SlHeart } from "react-icons/sl";
// const [bids, setBids] = useState([]);

const BidItems = ({bid}) => {
  console.log(bid);


    const [bids, setBids] = useState([]);
    

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBids(data));
    }, []);

  return (
    <div>
      <div className="  text-start mt-10">
        <h1 className="text-3xl font-bold">Active Auctions </h1>
        <p className="text-xl font-semibold ">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="flex">
        <div className=" w-full bg-slate-200 rounded-lg shadow-lg p-4 m-4">
       
        <table>
      <thead >
        <tr>
          
          <th >Item</th>
          <th >Title</th>
          <th >Current Bid</th>
          <th >Time Left </th>
          <th >Bid Now</th>
          
        </tr>
      </thead >
      <tbody >
      {
        bids.map(bid => (
          <tr className='border-2 border-indigo-500 ' key={bid.id}>
            <td ><img className='w-20' src={bid.image} alt="" srcset="" /></td>
            <td>{bid.title}</td>
            <td> $ {bid.currentBidPrice}
            <td>{bid.timeLeft}</td>
            <button onClick={(bid) => handleMarked()}> <SlHeart /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>



        </div>

        <div className="right-container w-[30%] bg-slate-200 rounded-lg shadow-lg p-5 m-5 flex-row">
         <div className='flex justify-center place-items-center gap-2  '>
         < SlHeart />
         <h1 className='text-blue-500 font-bold'>Favorite Items</h1>
         </div>
         <h1>Total Bids Amount : </h1>
         {
          bids.map((bid) => <p key={bid}>{bid.title}</p>)
         }
        </div>
      </div>
     </div>
  );
};

export default BidItems;
