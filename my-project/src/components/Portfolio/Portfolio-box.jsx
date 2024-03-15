import './portfolio.scss'
function Portfolio() {
  return (
    <div className="containerP">
        <div className="main-text">
        <span>what will i do for you</span>
        <h2>lastest project</h2>
       </div> 
          <div className="box">
          {
              Data.map((iteam,index)=>(
                <div className="box-container" key={index}>
                   <div className="img-container">
         <img src={iteam.img}  />
            </div>
            <div className="portfolio-content">
                    <h2>Front end webs</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                        aliquid dolores et eveniet qui animi quos quae quod iste similique!
                    </p>
                    <a href="#" id=""><i>Link</i></a>
           </div>
        
    </div>
              ))
            }
          </div>
           
           
    </div>
  )
}

export default Portfolio

const Data=[
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:1
 },
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:2
 },
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:3
 },
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:4
 },
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:5
 },
 {
  img:"82833577_587038971846970_2179314450611749326_n.jpg",
  id:6
 },

]
