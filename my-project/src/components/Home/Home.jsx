import "./index.scss"
import {Link} from 'react-router-dom'
import Side from "./Homeside/Side";
function Home() {
  const father=['N','e','g','a','s','h'];
  const job=['F','r','o','n','t','e','n','d','-','R','e','a','c','t', '-', 'D','e','v','e','l','o','p','e','r']
  const general=['W','E','B',`  `,'D','E','V','E','L','O','P','E','R'];
  const name=['h','i']
  const intro=['I',"'M"]
  return (
    <div className="container  home-page">
     <div className="text-zone">
        <h1>{name.map((i,index)=>{
         return <span key={index} className="father">{i}</span>
        })} <br />{intro.map((i,index)=>{
          return <span  key={index} className="father intro">{i}</span>
         })}
         <span className="First">M</span>
        {father.map((i,index)=>{
         return <span key={index}  className="father">{i}</span>
        })}
        <br />
       {general.map((i,index)=>{
        return <span key={index}  className="father">{i}</span>
       })}
        </h1>
        <h2>
           {job.map((i,index)=>{
           return <span  key={index} className="job"> {i} </span>
           } 
          )}
          <Link className='flat-button' to="/contact">
            Contact
          </Link>
        </h2>
     </div>
   <Side />
    </div>
  )
}

export default Home