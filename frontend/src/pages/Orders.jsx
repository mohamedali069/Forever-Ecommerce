import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
  const {products,currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index) => (
            <div key={index} className="flex flex-col py-4 border-b text-gray-700 md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start text-sm gap-6">
                <img className='w-16 sm:w-20' src={item.image[0]} alt="/product-image" />
                <div>
                  
                 <p className='font-medium sm:text-base'>{item.name}</p>
                 <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                <p className='text-lg'>{currency}{item.price}</p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
                 </div>
                 <p className='mt-2'>Date: <span className='text-gray-400'>25, july 2024</span></p>
              </div>
              </div>
              <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className='min-w-3.5 h-3.5 border rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
               <button className='border px-4 py-2 text-sm font-medium rounded-sm'> Track Order</button>
              </div>
            </div>

          ))
        }
      </div>
      
      
    </div>
  )
}

export default Orders
