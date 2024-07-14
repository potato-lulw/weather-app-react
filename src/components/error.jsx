import React from 'react'

const Error = () => {
  return (
    <div className='bg-red-500 mt-10 text-center px-10 py-5 rounded-md'> 
        <h1 className='text-white text-4xl font-bold '>No such city found!</h1>
        <p className='text-white'>Please search for a valid city</p>
    </div>
  )
}

export default Error