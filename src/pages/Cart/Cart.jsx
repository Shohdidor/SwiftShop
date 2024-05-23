import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from "/src/assets/images/Empty State Animation (1).gif"
import { Link } from 'react-router-dom'
import { getCart } from '../../api/Cart/Cart'
import { deleteCart } from '../../api/Cart/Cart'


import "../../App.css"



function Cart() {
  const data = useSelector((store) => store.Cart?.dataCart || [])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  let sum = 0

  return (
    <>
      <Link to={"/"}>
        <div style={{display : data.length == 0 ? "block" : "none" }}> 
            <img src={Empty} className='m-auto' alt="empty" />
          <h1 className='Welcome text-[100px] text-center pb-[150px] mt-[-150px]'>
            Your Cart Empty
          </h1>
        </div>
        </Link>
        <div className="grid grid-cols-2 items-center">
          
          {
            data.length === 0 ? (
              <h1>No items in your cart.</h1>
            ) : (
              data.map((elem) => {
                sum += elem.product.price
                return (
                  <div key={elem.product.id} className="flex py-[50px] justify-center gap-[25px]">

                    <img className="w-[500px] hover:w-[550px] duration-500" src={`${import.meta.env.VITE_APP_FILES_URL}${elem.product.image}`} alt="product"/>           
                    <div>
                    <h1 className="Logo hover:text-[35px] duration-500 ease-in-out cursor-default hover:text-orange-500 text-[30px]">
                    {elem.product.productName}
                    </h1>
                    <div>
                      <p className="text-[20px] mb-[10px] Welcome hover:text-red-600 hover:bg-white hover:border-[2px] hover:border-red-600 ease-in-out duration-500 cursor-default bg-red-600 text-white py-[3px] text-center">
                        {elem.product.price}$
                      </p>
                      <p className="text-[20px] mb-[10px] Welcome hover:text-green-600 hover:bg-white hover:border-[2px] hover:border-green-600 ease-in-out duration-500 cursor-default bg-green-600 text-white py-[3px] text-center">
                      {elem.product.discountPrice}$
                      </p>
                    </div>
                      <button onClick={()=> dispatch(deleteCart(elem.id))} className="Welcome hover:text-[22px] text-[20px] px-[10px] hover:bg-white border-[2px] hover:text-[red] hover:border-black border-[red] ease-in-out duration-500">
                        Cancel
                      </button>
                    </div>

                  </div>
                )
              })
            )
          }
        </div>
          <div>
          <h1 className="text-[20px] Welcome hover:text-[white] hover:bg-[#202c0f] ease-in-out duration-500 cursor-default bg-[#273B09] text-white hover:text-[25px] py-[10px] text-center">
              Общая сумма <br />
            {sum}
          </h1>
          </div>
    </>
  )
}

export default Cart
