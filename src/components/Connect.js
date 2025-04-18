import React, { useState } from 'react';

const Connect = () => {
    const [showEmail, setShowEmail] = useState(true);
  
    return (
      <section className=" py-10 pb-40" id='connect'>
      <h2 className="text-4xl font-bold mb-12">Connect With Me</h2>
      <div className='flex justify-center pb-40'>
          <div className='w-4/5 text-center'>
              {/* <h5 className='text-lg'>Looking to get in touch? </h5> */}
              <h4 className='text-lg'>Do you have any question or just looking to get in touch? </h4>
              <h4 className='text-lg'>My inbox is always open at 
              <a style={{color:"#E79C19"}} href = "mailto: austinandogola@gmail.com"> austinandogola@gmail.com</a> </h4>
              {/* <h5 className='text-lg' >Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h5> */}
          </div>
        </div>
      
      </section>
    );
  };


  export default Connect