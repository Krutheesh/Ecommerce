import React from 'react'
import hero from './assets/hero.jpg'
function Headerone({heading}) {
  return (
    <div className='flex flex-col-reverse items-center justify-around h-[100vh] pt-[5rem] md:pt-[3rem] md:flex md:flex-row md:justify-center    md:space-y-0'>
      <div className=' md:w-[30rem] text-left py-2'>
        <p className='text-gray-600'>Welcome to</p>
        <span className='text-[2.5rem] font-semibold'>{heading}</span>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, error. Dolores impedit quos consequatur dolore.</p>
        <button className='bg-[#9933ff] text-white font-semibold p-2 my-2'>
          SHOP NOW
        </button>
      </div>
      <div className='md:w-[30rem]'>
        
        <img className=' md:w-[100%] h-[50vh] md:h-full ' src={hero} alt="dfghjk" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Headerone
