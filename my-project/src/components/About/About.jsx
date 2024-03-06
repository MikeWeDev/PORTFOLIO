import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faTypo3, faWebflow } from '@fortawesome/free-brands-svg-icons'
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons'
function About() {
    const letter=['A','B','O','U','T',`  `,'M','E']

  return (
    <>
      <div className="container about-page">
      <div className="text-zone">
        <h1>
    {letter.map((i)=>{
        return <span className='father'>{i}</span>
    })}
        </h1>
       
        <p>
        MY Name Is Mikyas Negash A  Passionate Front-End Developer.
       </p>
        
          <p>
           Working In Building Modern  Web Applications with Cutting-Edge Solutions.
        </p> 
      
       <p>
       Expiance In The Teck Stacks Of The Following |
| ReactJS | WordPress | TypeScript | Tailwind css |
</p>
    
        </div> 


        <div className="stage-cube-cont">
            <div className="cube-spiner">
                <div className="face1">
                    <FontAwesomeIcon icon={faTypo3}
                    color="#007ACC"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
               
            </div>
        </div>








    </div>
  
    </>
  

   
  )
}

export default About
