import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductId } from '../../api/Product/product'
import { getCart, postCart } from '../../api/Cart/Cart'

// Component 
import { Card2 } from '../../components/Card'

// IMG 

import tree from "../../assets/images/Tree.jpg"
import GirlModel from "/src/assets/images/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white (1).jpg"
import Sneakers from "/src/assets/images/canvas-sneakers-green-model-tying-shoelaces-apparel-ad.jpg"
import Glasses from "/src/assets/images/close-up-reading-glasses-office-desk.jpg"
import Cap from "/src/assets/images/woman-wearing-white-cap-mockup.jpg"
import Model from "/src/assets/images/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-daytime-against-wall-light-city-building.jpg"
import { Link } from 'react-router-dom'


function ProductId() {
const {id} = useParams()

    const data = useSelector ((store)=> store.Product.ProductInfo )
    console.log(data);
    const dispatch = useDispatch()
  

    useEffect (() => {
      dispatch ( getProductId(id) )
      dispatch ( getCart () )
    },[dispatch,id])
  return (
    <>
    <div>
      <div>
      <img className="w-[500px] hover:w-[550px] ease-in-out duration-500 m-auto" src={data?.images?.[0]?.images ? `${import.meta.env.VITE_APP_FILES_URL}${data.images[0].images}` : tree} alt="product"/>           
      <div className='flex w-[100%] justify-center gap-[100px] py-[10px]'>
      <button onClick={()=> dispatch(postCart(id))} className='hover:bg-yellow-400 border-[2px] hover:border-black border-yellow-600 bg-black text-white p-[10px] px-[20px] rounded-[5px] Logo hover:text-black  ease-in-out duration-200 '>
      <span>Buy</span>
      </button>

      <Link to={"/"}>
      <button className='hover:bg-black hover:border-yellow-400 border-[2px] border-black bg-yellow-400 text-black p-[10px] px-[20px] rounded-[5px] Logo hover:text-white  ease-in-out duration-200 '>
      <span>Back</span>
      </button>
      </Link>
      </div>
  
      </div>
      <div>
        <h1 className='Logo cursor-default hover:bg-[black] ease-in-out hover:text-[40px] duration-500 text-[35px] text-center bg-[#0000009e] text-white'>
        {data.productName}
        </h1>
        <p className='Welcome text-[25px] hover:text-[30px] py-[10px] hover:text-white bg-green-300 text-center rounded-[5px] hover:bg-green-600 ease-in-out duration-500 cursor-default'>
          +{data.price}$
        </p>
        <p className='Welcome text-[25px] py-[10px] hover:text-[30px  ] hover:text-white bg-red-300 text-center rounded-[5px] hover:bg-red-600 ease-in-out duration-500 cursor-default'>
          -{data.discountPrice}$
        </p>
      </div>
      <div className='grid grid-cols-2 pl-[150px] py-[150px]'>
        <Card2 productIMG={Glasses} />
        <Card2 productIMG={Cap} />
        <Card2 productIMG={Model} />
        <Card2 productIMG={Sneakers} />
      </div>
    </div>

    </>
  )
}

export default ProductId