import '../../custom.css';
const Comtact = () => {
    return (
      <div>       <div className="contact_info">
      <div className="container-fluid ml-60">
          <div className="flex flex-wrap ">
              <div className="lg:w-4/5 pr-4 pl-4 lg:mx-1/6">
                  <div className="contact_info_container flex lg:flex-row flex-col justify-between align-items-between">
                      <div className="contact_info_item flex flex-row items-center justify-start">
                          <div className="contact_info_image">
                          <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" /></div>
                          <div className="contact_info_content">
                              <div className="contact_info_title">Phone</div>
                              <div className="contact_info_text">+91 9044208507</div>
                          </div>
                      </div> 
                      <div className="contact_info_item flex flex-row items-center justify-start">
                          <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" /></div>
                          <div className="contact_info_content">
                              <div className="contact_info_title">Email</div>
                              <div className="contact_info_text">tarunmali1729@gmail.com</div>
                          </div>
                      </div> 
                      <div className="contact_info_item flex flex-row items-center justify-start">
                          <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" /></div>
                          <div className="contact_info_content">
                              <div className="contact_info_title">Address</div>
                              <div className="contact_info_text">Prayagraj, UP, India</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  
               <div className="contact_form ml-80">
                  <div className="container">
                      <div className="row">
                          <div className="lg:w-4/5 pr-4 pl-4 lg:mx-1/6
  ">
                              <div className="contact_form_container py-5 shadow-5xl">
                                  <div className="contact_form_title shad">
                                      Get in Touch </div>
                                  <form method="POST" id="contact_form ">
                                       <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between"> 
                                          <input type="text" id="contact_form_name "
                                              className="contact_form_name input_field shadow-sm"
                                                  name="name"
  
                                              placeholder="Your name" required />
                                          
                                           <input type="email" id="contact_form_email"
                                              className="contact_form_email input_field shadow-sm"
                                                  name="email"
  
                                              placeholder="Your Email" required />
                                          
                                           <input type="number" id="contact_form_phone"
                                              className="contact_form_phone input_field shadow-sm"
                                              name="phone"
  
                                          placeholder="Your Phone Number" required  />
                                      </div>
  
                                      <div className="contact_form_text mt-5">
                                          <textarea className="text_field contact_form_message border"
                                              name="message"
  
                                              placeholder="Message" cols="70" rows="10"></textarea>
                                      </div>
  
                                      <div className="contact_form_button ">
                                          <button type="submit" className="button contact_submit_button bg-green-200 p-2 m-100"
                                       >Send Message</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                       </div>
                   </div>   
          </div   >
  
  
  
  
  
  </div>
    
  
      </div>
    );
  }
  export default Comtact;