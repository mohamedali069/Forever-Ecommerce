import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products ,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] =useState(false);
  const [image,setImage] = useState('');
  const [size,setsize] = useState('');

  const fetchProductData = async () => {
    products.map(item => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  
  useEffect(()=> {
    fetchProductData();

  },[productId,products])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------product data --------- */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/*---------product images --------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:w-[18.5%] sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal">
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="product-images" />
              ))
            }

          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className='w-full h-auto' alt="product-image" />
          </div>
        </div>
        {/*---------product info --------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className='w-3.5' alt="icon" />
            <img src={assets.star_icon} className='w-3.5' alt="icon" />
            <img src={assets.star_icon} className='w-3.5' alt="icon" />
            <img src={assets.star_icon} className='w-3.5' alt="icon" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="icon" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
           <div className="flex flex-col gap-4 m-y-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item,index) => (
                  <button onClick={()=> setsize(item)} className={`border cursor-pointer py-2 px-4 bg-gray-100 ${item === size ?'border-amber-600 ': ''}`} key={index}>{item}</button>
                ))
              }
            </div>
           </div>
           
           <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 mt-4 text-sm active:bg-gray-700 cursor-pointer'>Add To Cart</button>
           <hr className='mt-8 sm:w-4/5'/>
           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
           </div>
        </div>
      </div>
      {/*---------Description & review section --------- */}
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col px-6 py-6 gap-4 text-sm text-gray-500">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, quas?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sit laudantium et vero? Temporibus, tenetur?</p>
        </div>
      </div>
      {/*---------related products section --------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
