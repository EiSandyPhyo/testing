// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <h1 className="text-5xl font-bold text-center p-10">
      This is Home Page 
    </h1>
    <Navbar/>
    <img src="/testing.jpg" alt="testing" className=' w-[600px] mx-auto' />
    </>
  )
}

export default Home