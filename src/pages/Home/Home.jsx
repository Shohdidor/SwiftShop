import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../api/Product/product';


// Animation 
import 'animate.css';


// MUI ICON'S
import InventoryIcon from '@mui/icons-material/Inventory';

// IMG 
import GirlModel from "/src/assets/images/portrait-young-stylish-laughing-model-black-casual-summer-clothes-cap-with-natural-makeup-white (1).jpg"
import Sneakers from "/src/assets/images/canvas-sneakers-green-model-tying-shoelaces-apparel-ad.jpg"
import Glasses from "/src/assets/images/close-up-reading-glasses-office-desk.jpg"
import Cap from "/src/assets/images/woman-wearing-white-cap-mockup.jpg"
import Model from "/src/assets/images/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-daytime-against-wall-light-city-building.jpg"


// Component
import Card from '../../components/Card';
import { Card2 } from '../../components/Card';
import { Link, useParams } from 'react-router-dom';



function Home() {
  
  // dispatch
  const dispatch = useDispatch ()


  // useParams 
  const {id} = useParams()

  
  // getProduct 
  const data = useSelector ( ( store ) => store.Product.ObjGetProduct )


  useEffect (()=>{
    dispatch (getProduct(data)) 
  },[dispatch])

  return (
    <>

    
<div className="flex items-center animate__animated animate__fadeIn">
      <img src={GirlModel} alt="Model" className="w-[800px]"/>
      <h1 className="text-[80px] Welcome">
        Welcome to <span className="block text-green-800">
          SwiftShop
        </span>
      </h1>
    </div>

    <div className='grid Glav grid-cols-2 pl-[250px] pt-[25px]'>
    <Card2 productIMG={Sneakers} Information={"Free shipping over order $111"}/>
    <div className='ml-[-100px]'>
    <Card2 productIMG={Model} Information={"Spring collection"}/>
    </div>
    <div className='ml-[80px]'>
    <Card2 productIMG={Glasses} Information={"Campus Style"}/>
    </div>
    <div className='mt-[-90px] mb-[90px] ml-[-50px]'>
    <Card2 productIMG={Cap} Information={"Spring collection"}/>
    </div>
    </div>

    <div className='flex bg-gray-300 items-center justify-around py-[50px]'>
    <Card />
    <Card />
    <Card />
    </div> 


    <div className='grid grid-cols-3 items-center pl-[50px]'>
      
    {data.products?.map (( elem ) => {
      return ( 
        <div key={elem.id} id='part1'>
          <div className='flex cursor-pointer gap-[50px] hover:bg-slate-300 px-[50px] duration-200 ease-in-out py-[50px]'>
            <Link to={`product/${elem.id}`}> 
            <div>
          <img className="w-[500px]" src={`${import.meta.env.VITE_APP_FILES_URL}${elem.image}`} alt="product"/>           
            </div>
            </Link>

            <div>
            <h1 className='Logo text-[18px]'>
              {elem.productName}
            </h1>
            <p className='Welcome mb-[5px] bg-green-300 text-center rounded-[5px] hover:bg-green-600 ease-in-out duration-300 cursor-default'>
              {elem.price}
            </p>
            <p className='Welcome bg-red-300 text-center rounded-[5px] hover:bg-red-600 ease-in-out duration-300 cursor-default'>
              {elem.discountPrice}
            </p>
            </div>

          </div>
        </div>
      )
    })}
    
    </div>
    </>
  )
}

export default Home