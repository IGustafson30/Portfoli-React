import React from 'react'
import Steve1 from '../assets/Steve01.jpg'
import Steve2 from '../assets/Steve02.jpg'
import Tiny1 from '../assets/Tiny01.jpg'
import Tiny2 from '../assets/Tiny02.jpg'
import Bone1 from '../assets/Ramone01.jpg'
import Bone2 from '../assets/Ramone02.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

             {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 
                
                {/* Card Item */}
                <div 
                style={{backgroundImage: `url(${Steve1})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Cat Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Steve2})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Cat Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Tiny1})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Cat Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Tiny2})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Cat Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Bone1})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Dog Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Bone2})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Cute Dog Placeholder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'> {/* Change this to link to project */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'> {/* Change this to link to GitHub */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work