import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <>
     <div>
      {/* uppernav */}
      <div className='flex bg-[#131921] text-[#F8F8F8] h-16 items-center   justify-between md:px-12 px-5 shadow-lg'>

        <div>
          <h1 className='font-bold text-2xl '>Shopping</h1>
        </div>

        <div className='flex'>
        <input type="text" placeholder='Search' className='px-2 border-1 rounded-tl-md rounded-bl-md border-r-0 hidden md:block'/>
        <button className='rounded-tr-md rounded-br-md h-6.5 w-6 md:flex items-center justify-center bg-[#F3A847] hidden '>
        <IoMdSearch />
        </button>
        <div className='flex items-center justify-center text-2xl'>
          <button className='ml-5' ><MdOutlineLightMode /></button>
          <button className='ml-5' ><FaCartPlus /></button>
          <button className='ml-5' ><GiHamburgerMenu /></button>
        </div>
        </div>
      

      </div>
      <div className='flex  bg-[#131921] text-[#F8F8F8] h-12 items-center   justify-center md:hidden px-10 shadow-lg'>
      <input type="text" placeholder='Search' className='px-2 border-1 rounded-tl-md rounded-bl-md border-r-0 md:hidden'/>
        <button className='rounded-tr-md rounded-br-md h-6.5 w-6 flex  items-center justify-center bg-[#F3A847] md:hidden '>
        <IoMdSearch />
        </button>
      </div>
      {/* lowenav */}
      <div></div>
     </div>
    </>
  )
}

export default Navbar
