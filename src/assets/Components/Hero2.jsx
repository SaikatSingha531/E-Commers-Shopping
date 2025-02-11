import React from 'react'
import img1 from "../Photos/sale.png"
import img2 from "../Photos/shopping.png"
import bg from "../Photos/bg3.avif"
import bg2 from "../Photos/bg4.avif"

function Hero2() {
  return (
    <>
    <div className=" flex h-auto p-10  justify-center items-center text-white" 
    style={{
        backgroundImage: `url(${bg})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',  
    }}
    >
        <div className='gap-5 w-1/2 '>
            <h1 className='text-6xl font-bold mb-4'>70% off on all Products Sale</h1>
            <p className="text-lg mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="mt-6 px-6 py-3 bg-[#F3A847] text-white font-semibold rounded-lg">Order Now</button>
        </div>

        <div>
        <img src={img1} className='w-96' />
        </div>
    </div>

    <div className=" flex h-auto p-10 gap-10 justify-center items-center text-white" 
    style={{
        backgroundImage: `url(${bg2})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',  
    }}
    >
      <div>
        <img src={img2} className='w-96' />
        </div>

        <div className='gap-10 w-1/2 '>
            <h1 className='text-6xl font-bold mb-4'>70% off on all Products Sale</h1>
            <p className="text-lg mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="mt-6 px-6 py-3 bg-[#F3A847] text-white font-semibold rounded-lg">Order Now</button>
        </div>

        
    </div>
      
    </>
  )
}

export default Hero2
