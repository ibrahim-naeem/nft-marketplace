import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <div>
          <h1 className='text-3xl text-center font-semibold hover:font-bold p-5 border-b'>NFT Marketplace</h1>
      <nav className='text-center p-5 text-xl '>
        <Link to="/" className='p-2 m-3 border-b hover:border-b-4 cursor  '>Home</Link>
        <Link to="/create" className='p-2 m-3 border-b hover:border-b-4 cursor  '>Create</Link>
        <Link to="/sell" className='p-2 m-3 border-b hover:border-b-4 cursor  '>Sell</Link>
        <Link to="/owner" className='p-2 m-3 border-b hover:border-b-4 cursor  '>Owned</Link>
      </nav>
    </div>
  );
}

export default Navbar