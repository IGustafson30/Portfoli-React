import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/f47ab2ce-4709-45ae-b17c-5c8e99c4e198' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - placeholderEmail@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] rounded-sm' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-sm' type='email' placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#ccd6f6] rounded-sm' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flex items-center duration-500 hover:scale-110'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact