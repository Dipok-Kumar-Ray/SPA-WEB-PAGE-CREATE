import React from "react";

const Navbar = () => {
  return (
    <div className=" mb-10">
      <div className="flex justify-between  bg-base-100 shadow-sm">

      <h1 className="btn btn-ghost text-xl">
            <span className="text-3xl font-semibold text-cyan-500">
              Auction
            </span>
            <span className="text-3xl font-extrabold text-yellow-400">
              Gallery
            </span>
          </h1>
       
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="flex items-center justify-between ml-19" >
    
                  <button className="btn btn-ghost normal-case text-xl">Home</button>
            <button className="btn btn-ghost normal-case text-xl">
              Auctions
            </button>
            <button className="btn btn-ghost normal-case text-xl">
              Categories
            </button>
            <button className="btn btn-ghost normal-case text-xl">
              How to Works
            </button>
    </div>
  </div> 
</div>
        <div className="flex">
        <img className="w-12 h-12 rounded-[100%]"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/Z6nbTc6V/Whats-App-Image-2025-03-20-at-22-34-57-69b99829.jpg"
                />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">6</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">6 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
