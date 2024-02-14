import {FaBars,FaPhone,FaRegEnvelope} from 'react-icons/fa'
import {AiOutlineClose} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {TbHomeCheck} from "react-icons/tb"
//import {IoPersonCircleOutline} from "react-icons/io"
function NavBar() {
  return (
    <nav className='sticky top-0 z-50'>
       <div className='lg:block hidden bg-[#0ca39a] text-white py-2'>
        <div className='container mx-auto lg:flex hidden items-center justify-between px-2 '>
            <span className='flex items-center gap-x-1 '>
          <GoLocation />
          <p className="text-sm">Addis,Ababa churchil strret 24 ,5t</p>
            </span>
            <div>
                <span className='flex items-center gap-x-1' >
             <FaPhone />
             +251 564 789 132
                </span>
                <span className='flex items-center gap-x-1'>
           <FaRegEnvelope />
           mikyasnegash2@gmail.com
                </span>
            </div>
        </div>
       </div>

     <div className="bg-white p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
            <div className="">
         <ul className='lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:transform-none
        lg:translate-y-[-50%] lg:gap-y-o '>
            <button className='bg-[#0ca39a] text-black px-2 rounded-full'>Home</button>
            <li className="py-2 flex font-medium items-center leading-sung">About</li>
            <li className="py-2 flex font-medium items-cente  leading-sungr">Services</li>
            <li className="py-2 flex font-medium items-center leading-sung">Listing</li>
            <li className="py-2 flex font-medium items-center leading-sung">Blogs</li>
           
            </ul>

  
              <ul className='lg:hidden  w-[200px] h-[150px] border- bg-white items-center gap-x '>
             <div className='flex justify-between mb-4'>
              <span className="icon flex">
               <TbHomeCheck size={35} className='bg-[#0ca39a] text-black px-2 rounded-full'/>
               <span className='text-xl m-1 font-bold '>MIKE</span> 
              </span>
              <span className="button">
                <button className='text-xl'>x</button>
              </span>
             </div> 
             <div className='translate-x-[50%]'>
             <button className='bg-[#0ca39a] text-black px-2 rounded-full'>Home</button>
            <li className="py-2  mb-1 flex font-medium items-center leading-sung">About</li>
            <li className="py-2 mb-1 flex font-medium items-cente  leading-sungr">Services</li>
            <li className="py-2 mb-1 flex font-medium items-center leading-sung">Listing</li>
            <li className="py-2 mb-1 flex font-medium items-center leading-sung">Blogs</li>
            <div className="flex">
        <span className="button">
                <button className='text-md '>
                  <span className='bg-[#0ca39a] text-black px-2 rounded-full'>
                    LOGIN</span></button>
              </span>
        </div>

            </div>
              </ul>
        </div>
        

        <div className=' translate-x-[-50%]  hidden lg:flex'>
              <span className="icon flex">
               <TbHomeCheck size={35} className='bg-[#0ca39a] text-black px-2 rounded-full'/>
               <span className='text-xl m-1 font-bold '>MIKE</span> 
              </span>
             </div> 
        <div className="hidden lg:flex">
        <span className="button">
                <button className='text-md '>
                  <span className='bg-[#0ca39a] text-black px-2 rounded-full'>
                    LOGIN</span>/RIGESTER</button>
              </span>
        </div>

        </div>
     </div>
    
    </nav>
  )
}
 
export default NavBar
