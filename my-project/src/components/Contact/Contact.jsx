import './index.scss'
import {useRef} from 'react'
import emailjs from "@emailjs/browser"

function Contact() {
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
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
    <div className='container contact-page'>
        <div className="text-zone">
            <h1>
                {letters.map((i,index)=>{
             return  <span  key={index} className="father">{i}</span>
               })}
            </h1>
            <p>
         IF YOU WANT TO TALK TO ME . <br></br>
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
               <textarea name="message" />
      <input type="submit" value="Send" />
               </li>
               <li  className='flat'>
                <button type='submit'>Send</button>
               </li>
            </ul>
          </form>
          </div>
        </div>
       
   
    </div>
  )
}

export default Contact
