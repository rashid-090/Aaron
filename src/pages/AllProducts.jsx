import React from 'react'
import { Products } from '../components'

const AllProducts = () => {
  return (
    <section className="bg-secondarygray pb-10 pt-10 mt-20 md:mt-32  text-black container mx-auto">
      <div className="w-fullo text-center">
        <h2 className="text-3xl xl:text-5xl font-normal capitalize">
          our <span className="text-mainbtn">products</span>
        </h2>
        <p className="text-xs md:text-sm md:max-w-[70%] mx-auto mt-5 ">
          Discover our innovative and dependable elevator solutions, built for safety and efficiency. Our designs ensure seamless and smooth mobility for any space
        </p>
        <Products onView={true}/>
      
      </div>
    </section>
  )
}

export default AllProducts
