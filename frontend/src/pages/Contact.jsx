import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="flex my-10 flex-col sm:flex-row mb-28 gap-16">
              <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="about-image" />
              <div className="flex flex-col justify-center items-start gap-6">
                <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                <p className='text-gray-500'>54789 willms station <br /> suite350,washington ,USA</p>
                <p className='text-gray-500'>Tel: (552)555-6555 <br />Email: admin@forever.com</p>
                <p className='font-semibold text-xl text-gray-600'>Careers at forever</p>
                <p className='text-gray-500' > learn more about our teams and job openings. </p>
                <button className='cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
              </div>
      </div> 
      <NewletterBox/>       
    </div>
  )
}

export default Contact
