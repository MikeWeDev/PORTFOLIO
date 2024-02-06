import Announsment from '../component/Announsment'
import Fotter from '../component/Fotter'
function Cart() {
  return (
    <div className=" ">
      <Announsment />
      <div className="wrapper pb-40">
       <h1 className='text-1xl p-8 font-bold text-center sm:text-4xl'>Your Bag</h1>
        <div  className="top flex justify-between p-4 place-items-center">
          <div className='cursor-pointer border-[2px] p-1 font-bold text-sm border-black sm:p-3'>
            Continue Shoping</div>
            <div className="top-text">
              <span className="top underline mr-3 text-sm font-semibold cursor-pointer hidden sm:flex">Shoping Bag (2)</span>
              <span className="top underline text-sm font-semibold cursor-pointer hidden sm:flex">your wishlist</span> 
            </div>
          <div className='bg-black  text-white cursor-pointer p-1 font-bold text-sm sm:p-3'>
            Checkout Now</div>
        </div>
       
       
        <div className="bottom flex justify-between flex-wrap ">
         
         
          <div className="info w-[100%] md:w-[70%] mb-10">
       <div className="product">
        <div className="product-detail  block  w-[100%] sm:flex">
          <img className="w-[50%] h-full "src="/public/products/photo_2024-01-30_08-23-33.jpg" alt="" />
          <div className="detail m-8">
          <h1 className='name font-semibold mb-1 text-lg'><strong>NAME:</strong>NIKE STRIPE</h1>
          <p className='id font-semibold mb-1 text-md'><strong>ID:</strong>22334567</p>
          <div className="h-[20px] w-4 bg-red-500 rounded-full"></div>
          <p className='size font-semibold mb-1 text-md'><strong>SIZE:</strong>37.8</p>
          <p></p>
          </div>
         
          <div className="product-price flex-col flex items-center justify-center ">
       <div className="product-contaner flex-col flex items-center ">      
       <div className="add flex mr-10 justify-between gap-3 ">
     <span className=' p-2 text-3xl  bg-blue-200 '>+</span>
     <span className='p-2 text-3xl rounded-md'>2</span>
      <span className='p-2 text-3xl border bg-blue-200 '>-</span>
     </div>
        <div className="product-amount">
        </div>
        </div>
        </div>


       
       </div>
      
          </div>
          
        </div>

        <div className="summery p-3 font-semibold rounded-md border-[0.3px] border-gray-600 mb-20  w-[50%] md:w-[25%]">
        
        <h1 className='font-bold text-xl '>ORDER SUMMARY</h1>
       <div className="summery-items my-6 flex justify-between">
         <span>ORDER SUMMER </span>
         <span>SUBTOTAL</span>
       </div>
      
       <div className="summery-items my-6 flex justify-between">
         <span>ESTIMATE SHIPTING</span>
         <span>$4.70</span>
       </div>
       <div className="summery-items my-6 flex justify-between">
         <span>SHIPING DISCOUNT </span>
         <span>$ -2.30</span>
       </div>

       <div className="summery-items text-xl my-6 flex justify-between">
         <span> TOTALL </span>
         <span>$8</span>
       </div>

       <button className='w-full p-3 text-white bg-black'>CHECKOUT NOW</button>

         </div>

      </div>
      <Fotter />
    </div>
    </div>
  )
}

export default Cart
