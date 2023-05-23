import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ian Gustafson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an Aspiring Developer.</h2>
            <p className='text-[#8892b0] padding-4 mx-w-[700px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum 
                fringilla libero non sodales. Sed non vulputate urna. Integer sodales 
                aliquam enim, eu aliquam dui iaculis eu. Vestibulum id dui dolor. Vivamus 
                enim lorem, pharetra a leo sed, porttitor condimentum nulla. Cras finibus 
                id nisi id facilisis.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500 duration-300'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
                </div>
        </div>

    </div>
  )
}

export default Home