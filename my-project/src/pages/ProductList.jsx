import Announsment from '../component/Announsment'
import Product from '../component/Product'
import NewsLetter from '../component/NewsLetter'
import Fotter from '../component/Fotter'
function ProductList() {
  return (
    <div>
       <Announsment />
        <h1 className='m-5 font-bold text-[40px]'>Dresses</h1>
        <div className="fiter-container flex justify-between items-center">
        <div className="filter1 mx-10 font-semibold text-[15px] ">
             <h1 className='block text-5 sm:flex'> Filter product</h1>  
          <select className='mx-2 my-3 p-1 text[20px] border border-black border-3'>
            <option value="selected">
             White
            </option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select className='mx-2 p-1 text[15px] border border-black border-3'>
            <option value="selected">
             size
            </option>
            <option value="">xs</option>
            <option value="">sm</option>
            <option value="">md</option>
            <option value="">lg</option>
            <option value="">xl</option>
          </select>
        </div>
        <div className="filter2 mx-10  font-semibold text-[14px]">
        <h1 className='block text-5 sm:flex'>  Sort product
</h1>  
         <select className='  p-1 text[15px] border border-black border-3 '>
            <option value="selected">
              Newest
            </option>
            <option value="">Price(asc)</option>
            <option value="">Black(desc)</option>
          </select>
        
        </div>
      </div>
      <Product />
      <NewsLetter/>
      <Fotter />
    </div>
  )
}

export default ProductList
