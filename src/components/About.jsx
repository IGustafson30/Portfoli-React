import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-yellow-500'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Ian, nice to meet you! Please take a look around.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum 
                fringilla libero non sodales. Sed non vulputate urna. Integer sodales 
                aliquam enim, eu aliquam dui iaculis eu. Vestibulum id dui dolor. Vivamus 
                enim lorem, pharetra a leo sed, porttitor condimentum nulla. Cras finibus 
                id nisi id facilisis.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About