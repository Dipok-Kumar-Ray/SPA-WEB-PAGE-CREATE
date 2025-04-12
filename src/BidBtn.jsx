import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

const BidBtn = ({isFavorite, handleClicked , bid}) => {
    return (
        <div>
           <p
            onClick={() =>
              handleClicked(bid)
            }

            className={`${
              
              isFavorite ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isFavorite ? <IoIosHeart color="red" size={30} /> : <IoIosHeartEmpty />}
          </p> 
        </div>
    );
};

export default BidBtn;