import { useEffect, useState } from 'react';

import { IoIosHeartEmpty } from "react-icons/io";

import BidBtn from './BidBtn';






const BidItems = () => {
 


    const [bids, setBids] = useState([]);
    

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBids(data));
    }, []);

    const [addFav, setAddFav]= useState([])
    
    
    const handleClicked = (bid ) =>{
      
      const isAlreadyFavorite = addFav.some(
        (item) => item.id === bid.id
      );
      if(isAlreadyFavorite){
        return;
      }
      const newAddfav = [...addFav, bid]
      setAddFav(newAddfav)
    }
    

  

  return (
    <div >
      <div className="  text-start mt-10">
        <h1 className="text-3xl font-bold">Active Auctions </h1>
        <p className="text-xl font-semibold ">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="flex">
        <div className=" w-full bg-slate-200 rounded-lg shadow-lg p-4 m-4">
       
        <table className='w-full border-2 border-indigo-500 '>
      <thead  className='border-2 border-indigo-500 '>
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
            <td ><img className='w-20' src={bid.image} alt=""  /></td>
            <td>{bid.title}</td>
            <td> $ {bid.currentBidPrice}</td>
            <td>{bid.timeLeft}</td>
            <td>
            <BidBtn handleClicked={handleClicked} isFavorite={ addFav.some((item)=> item.id === bid.id) } bid={bid}></BidBtn>

            </td>
           
          </tr>
        ))}
      </tbody>
    </table>



        </div>

        <div className="right-container w-[30%] bg-slate-200 rounded-lg shadow-lg p-5 m-5 flex-row">
         <div className='flex justify-center place-items-center gap-2  '>
         <IoIosHeartEmpty />
         <h1 className='text-blue-500 font-bold'>Favorite Items</h1>
         </div>
         <h1>Total Bids Amount : </h1>
         
          {
            addFav.length===0 ? (<h3>No....</h3>) : (<div>



              {
                addFav.map((bid) => <div key={bid.id}> {bid.title}</div>)
              }

            </div>)
          }
          
        


        </div>
      </div>
     </div>
  );
};

export default BidItems;
