import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="flex my-10 flex-col sm:flex-row gap-16">
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="about-image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero veritatis numquam, fugiat odio consequatur harum adipisci minus officiis quisquam officia explicabo illum temporibus vitae architecto in error natus quod hic.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, obcaecati ex? Expedita, voluptas nam alias inventore laboriosam deserunt illum est? Ea cum explicabo inventore fuga deleniti fugit voluptatibus, natus cumque?</p>
        
        <b className='text-gray-800'>Our Mission </b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam omnis mollitia consequuntur dicta. Sit quo perferendis quasi temporibus illo adipisci vel, rerum veritatis asperiores non ea fugit debitis voluptate blanditiis!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Qaulity Assurance</b>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, eaque nam? Explicabo voluptates officiis esse aliquid repellendus sint ipsam accusantium quas vero accusamus exercitationem nostrum hic, officia perferendis ab rerum.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Qaulity Assurance</b>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, eaque nam? Explicabo voluptates officiis esse aliquid repellendus sint ipsam accusantium quas vero accusamus exercitationem nostrum hic, officia perferendis ab rerum.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Qaulity Assurance</b>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, eaque nam? Explicabo voluptates officiis esse aliquid repellendus sint ipsam accusantium quas vero accusamus exercitationem nostrum hic, officia perferendis ab rerum.</p>
        </div>
      </div>
      <NewletterBox />
    </div>
  )
}

export default About
