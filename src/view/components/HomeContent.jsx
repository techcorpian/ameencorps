import React from 'react'
import ContentImg from '../../assets/contentimg.png'

const HomeContent = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center'>
      <div className='md:pt-4 pt-7'>
        <div className='md:leading-[5.25rem] md:text-left text-center font-extrabold text-5xl md:text-8xl text-white'>THE<br /><span className='radial-text-gradient'>STRUCTURAL</span><br />DOCTORS.</div>
        <div className='flex md:flex-row flex-col mt-14 gap-4 text-lg'>
          <div className='border border-yellow-400 rounded-full p-2 px-9 bg-yellow-400 font-medium cursor-pointer text-center'>Get Qoute Now</div>
          <div className='border rounded-full p-2 px-9 font-medium text-white hover:bg-white hover:text-gray-600 cursor-pointer text-center'>Contact Us</div>
        </div>
        <div className='flex md:flex-row flex-col mt-14 justify-center md:text-left text-center gap-8 md:gap-0'>
          <div className='md:border-r border-gray-700 w-[100%] text-7xl md:pr-9 radial-text-gradient'>50+<h1 className='text-lg text-white font-thin'>Completed Projects</h1></div>
          <div className='md:border-r border-gray-700 w-[100%] text-7xl md:px-9 radial-text-gradient'>5+<h1 className='text-lg text-white font-thin'>Years of Experience</h1></div>
          <div className='w-[100%] text-7xl md:px-9 radial-text-gradient'>100%<h1 className='text-lg text-white font-thin'>Safe Codes With IS Standards</h1></div>
        </div>
      </div>
      <div>
        <img src={ContentImg} alt="" width='100%' className='lg:block hidden'/>
        {/* <div className='h-[600px] w-[500px] bg-gray-600 rounded-tr-3xl rounded-bl-3xl m-6 my-16'></div> */}
      </div>
    </div>
  )
}

export default HomeContent