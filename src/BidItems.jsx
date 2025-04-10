import { useEffect, useState } from 'react';

import { IoIosHeartEmpty } from "react-icons/io";

import BidBtn from './BidBtn';
import {  toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

const notifyAddItem = () => toast ('Add Items to your Favorite  List')




const BidItems = () => {


  const removeItem = (id) => {
    const updateAddFav = addFav.filter((item) => item.id != id)
    setAddFav(updateAddFav);

  }
 


    const [bids, setBids] = useState([]);
    

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBids(data));
    }, []);

    const [addFav, setAddFav]= useState([])
    
    
    const handleClicked = (bid ) =>{

      notifyAddItem();
      
      const isAlreadyFavorite = addFav.some(
        (item) => item.id === bid.id
      );
      if(isAlreadyFavorite){
        return;
      }
      const newAddfav = [...addFav, bid]
      setAddFav(newAddfav)
    }
    
    // paoewffpfpfof
    const [counts, setCounts]  = useState()
  const addTotalAmount = counts + 1
  setCounts(addTotalAmount)

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
      <tbody className='border-t-2 border-indigo-400'>
      {
        bids.map(bid => (
          <tr className='border-t-2 border-indigo-400 py-4' key={bid.id}>
            <td className='p-2' ><img className='w-25 h-25 ' src={bid.image} alt=""  /></td>
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

        <div className="right-container w-[40%] bg-slate-200 rounded-lg shadow-lg p-5 m-5 flex-row">
         <div className='flex justify-center items-center gap-2  '>
         <IoIosHeartEmpty size={35}/>
         <h1 className='text-3xl text-gray-600 font-bold mb-8'>Favorite Items</h1>
         </div>
        
         
          {
            addFav.length===0 ? (<div><h3 className='text-2xl text-gray-600 font-semibold'>No favorites yet</h3> <p>Click the heart icon on any item to add it to your favorites</p></div>) : (<div>



              {
                addFav.map((bid) => <div className='flex border-t-2 py-2 border-indigo-500' key={bid.id} > 
                <img className='w-16 h-16' src={bid.image} alt="" />
                <div>                
                <h1 className='justify-end'>{bid.title}</h1>
                <div className='flex justify-between'>
                  <h3> $ {bid.currentBidPrice}</h3>
                  <h3>{bid.bidsCount}</h3>
                </div>
                </div>
                <div>
                  <button onClick={()=>removeItem(bid.id)}><IoClose size={25}/></button>
                </div>
                </div>)
              }

            </div>)
          }
           <h1 className='justify-between border-t-2 border-indigo-400 mt-8'>Total Bids Amount : $ 0000</h1>
        
        {/* me kaj korte hoo */}
        {
          counts.map((total) => <p key={counts}>{total.counts}</p>)
        }


        </div>
      </div>
     </div>
  );
};

export default BidItems;
