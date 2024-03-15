import './index.scss'
import {useRef} from 'react'
import emailjs from "@emailjs/browser"
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



function Contact() {
  const phoneNumber='0902464535'
  const handleDial =()=>{
    window.location.href=`tel:${phoneNumber}`
  }



    const letters=['C','O','N','T','A','C','T',` `,'M','E'  ]
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
     

  
      emailjs
        .sendForm('service_uk7hzdl', 'template_0fnzi45', form.current, {
          publicKey: 're8UOJpBf_mKVPA23',
        })
        .then(
          () => {
            alert(`SUCCESSFULLY SENT!`);
            form.current.reset();
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };
    return (
    <div className='containerC flex justify-between contact-page'>
         
        <div className="text-zone">
            <h1 className='h1'>
                {letters.map((i,index)=>{
             return  <span  key={index} className="father">{i}</span>
               })}
            </h1>
            <p>
         IF YOU WANT TO TALK TO ME . 
         I WOUILD BE HAPPY TO HEAR FROM YOU!
            </p>
           
            <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
               <li className="half">
                <input type="text"  className="text" name="from_name" id="sendername" placeholder="Name" />
               </li>
               <li className="half">
              <input type="text" className="text" name="from_email" id="replyto"  placeholder="Email"
              required />
               </li>
               <li>
               <textarea name="message" placeholder='Message'/>
      <input type="submit" value="Send"  className='flat '/>
               </li>
                
        <li className='call'>
          <a href={`tel:${phoneNumber}`} className='phone' onClick={handleDial}>
      <FontAwesomeIcon className='anchor' icon={faPhone} color='#4d4d4e' />
          </a>
        </li>
       
              
            </ul>
          </form>
          </div>
        </div>
      
    </div>
  )
}

export default Contact
