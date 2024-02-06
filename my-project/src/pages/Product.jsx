import Announsment from '../component/Announsment'
import NewsLetter from '../component/NewsLetter'
import Fotter from '../component/Fotter'

function Product(){
    return(
        <div className="">
    <Announsment />
      <div className="wrapper flex jsutify-between flex-col sm:flex-row">
        <div className="img-con flex-1">
            <img className='h-full w-full'  src="products/photo_2024-01-30_08-23-35 (2).jpg" alt="" />
        </div>
         <div className="info-con flex-1 mt-10">
            <h1 className='text-[40px] mb-5 font-semibold '>Denim jumsuit</h1>
            <p className="text-xl mb-5">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Velit rem accusamus dolore eaque fuga sunt illum non tenetur aperiam reprehenderit.
            </p>
            <p  className='text-3xl mb-5'>
            80$
            </p>
            <div className="filter-con flex justify-between">
       <select className='mx-5  p-2 text[20px] border border-black border-3'>
           <option value="">
             White
            </option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
    <select className='mr-40 p-2 text[20px] border border-black border-3'>
            <option value="">size</option>
            <option value="">xs</option>
            <option value="">sm</option>
            <option value="">md</option>
            <option value="">lg</option>
            <option value="">xl</option>
          </select>
            </div>
        <div className="add-con flex mt-14">
     <div className="add flex mr-10 justify-between gap-3 ">
     <span className=' p-2 text-3xl  bg-blue-200 '>+</span>
     <span className='p-2 text-3xl border-[3px] border-green-900 rounded-md'>|</span>
      <span className='p-2 text-3xl border bg-blue-200 '>-</span>
     </div>
     <button className='cursor-pointer font-bold text-lg border-[4px] border-green-600'>
            ADD TO CART
        </button>
        </div>
       
         </div>

      </div>

    <NewsLetter />
    <Fotter />
        </div>
    )
}

export default Product
