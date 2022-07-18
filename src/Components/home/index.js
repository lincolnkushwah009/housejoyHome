import React, { Component, useRef, form, useEffect } from 'react';
import "./css/home.css"
import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import Logo from '../assets/Logo.png'
import emailjs from '@emailjs/browser';
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import Hook from '../assets/hook.png'
import Maintenance from '../assets/maintenance.png'
import HomeAppliance from '../assets/home-appliance.png'
import Basket from '../assets/basket.png'
import Relax from '../assets/relax.png'
import pestControl from '../assets/pest-control.png'
import renovation from '../assets/renovation.png'

import 'react-autocomplete-input/dist/bundle.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'






class Index extends Component {


    constructor(props) {

        super(props);
        this.state = {
            modal: false
        };
      
        this.state ={
            suggestions : [],
        }

        this.toggle = this.toggle.bind(this);
    }

  


    toggle() {
        this.setState({
            modal: !this.state.modal

        });
    }

    
    

    
    



    render() {



        function sendEmail(e) {
            console.log("sending email....");


            e.preventDefault();

            emailjs.sendForm('service_jhw7rui', 'template_c2mtg4h', e.target, 'GBbAPRHGmxHct933q')
                .then((result) => {
                    window.location.reload(false);
                    console.log(result.text);
                    console.log(result);
                    



                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }
        let ID =  Math. random(). toString(36). substr(2, 9);


        
 const items = [
    {
      
      name: 'Cobol'
    },
    {
      
      name: 'JavaScript'
    },
    {
     
      name: 'Basic'
    },
    {
      
      name: 'PHP'
    },
    {
      
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
      </>
    )
  }
       
               


        return (


            <div >
               
                <div class="cardBox">
                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={Hook} />

                            </div>
                            <div class="card-info">
                                <h2 class="card-title">Construction</h2>
                                <p class="card-intro">Project Management ConsultantWe provide end to end Construction services for Individual Residential Projects. From Ground Approvals, Documentation, Architectural Services, Material Vendors to Final Handover in a smooth and timely manner.</p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>

                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={pestControl} />

                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Pest Control</h2>
                                <p class="card-intro">Complete Pest Control Services to protect your Residential, Commercial or Organizational  space from pests, insects and Cockroaches.<br />Bed Bugs Control<br />Termite Control</p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>

                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={renovation} />
                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Home Repairs</h2>
                                <p class="card-intro">Get your home repair services done by verified & trusted professionals. Background verified & skilled professionals. <br />Carpentry<br />Electrician<br />Plumbers </p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>




                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={Relax} />
                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Grooming and Relaxation</h2>
                                <p class="card-intro">Don't have enough time to visit a parlor? Relax at home and book trained professionals for waxing, threading, hair color, facial & clean up, & many more. <br />Salon Service for women<br />Salon Service for Men<br />Spa Services for Women<br />Spa Service for Men<br />Party Makeup  </p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>

                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={Basket} />
                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Cleaning Service</h2>
                                <p class="card-intro">Complete cleaning services like deep cleaning, basic home cleaning by verified professionals at best price. <br />Bathroom Deep Cleaning<br />Kitchen Deep Cleaning<br />Sofa and Carpet Cleaning</p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>

                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={HomeAppliance} />
                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Appliances</h2>
                                <p class="card-intro">Get your appliances repaired by our experts who are professionally trained & verified. Experts in Washing machines, AC Repair, Waterpurifier repair & many more. <br />Servicing, Repair, Installation & Uninstallation<br />Geyser<br />Refrigerator<br />Washing Machine</p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>

                    <div class="cards">
                        <div class="card-item">
                            <div class="card-image">
                                <img style={{ height: "150px", }} src={Maintenance} />
                            </div>
                            <div class="card-info">
                                <h2 class="card-title">ODS - Home Maintenance</h2>
                                <p class="card-intro">Bored of your home interiors and wondering who will give it a new look? We are here to help you with verified & curated professionals.  <br />Painting
                                    Interior <br />Renovate</p>
                                <button onClick={this.toggle} type="button" class="btn btn-primary">Enquiry</button>

                            </div>
                        </div>


                    </div>
                </div>








                {/* <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ padding: "40px" }}
                > */}









                {/* </Swiper> */}




                <div className='row'>
                    <div style={{ textAlign: "center" }} className='col-sm-12'>
                        &nbsp;

                        <h3 style={{ paddingBottom: "50px" }}>Happiness Guarantee</h3>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-3' style={{ marginBottom: "50px" }}><img style={{ height: "70px", }} src={one} />
                        <p>Verified Professionals</p>
                    </div>
                    <div className='col-sm-3' style={{ marginBottom: "50px" }}><img style={{ height: "70px", }} src={two} />
                        <p>Insured Work</p>
                    </div>
                    <div className='col-sm-3' style={{ marginBottom: "50px" }}><img style={{ height: "70px", }} src={three} />
                        <p>Re-work Assurance</p>
                    </div>
                    <div className='col-sm-3' style={{ marginBottom: "50px" }}><img style={{ height: "70px", }} src={four} />
                        <p>Professional Support</p>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader style={{ background: "#3C3B5C" }} toggle={this.toggle}>
                        <div class="logo">
                            <img style={{ height: "50px" }} src={Logo} />
                        </div>

                    </ModalHeader>
                    <ModalBody>

                        <div class="container">
                            <form onSubmit={sendEmail} id="contact" action="" method="post">
                              
                                <fieldset style={{display:"none"}}>
                                    <input placeholder="Ticket ID" name="from_Ticket_ID" type="text" value={ID} tabindex="1"  />
                                </fieldset>
                                
                                <fieldset>
                                    <input placeholder="Your name" name="from_name" type="text" tabindex="1" required autofocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" name="from_email" tabindex="2" required />
                                </fieldset>
                         
                                <fieldset>
                                    <input placeholder="Address" type="text" tabindex="4" name="from_address" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Phone Number" type="text" tabindex="4" name="from_phone" required />
                                </fieldset>

                               
                                <fieldset>

             

          <ReactSearchAutocomplete
            items={items}
            placeholder= "City"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            required
          />
                                </fieldset>

    

                                <fieldset>
                                    <select name='from_service_intersted_for' class="form-select form-select-lg mb-3" style={{fontSize: "12px"}} aria-label=".form-select-lg ">
                                        <option selected >Select Services Interested For</option>
                                        <option value="Construction">Construction</option>
                                        <option value="ODS - Pest Control">ODS - Pest Control</option>
                                        <option  value="ODS - Home Repairs">ODS - Home Repairs</option>
                                        <option  value="ODS - Grooming and Relaxation">ODS - Grooming and Relaxation</option>
                                        <option  value="ODS - Cleaning Service">ODS - Cleaning Service</option>
                                        <option  value="ODS - Appliances">ODS - Appliances</option>
                                        <option  value="ODS - Home Maintenance">ODS - Home Maintenance</option>

                                    </select>
                                </fieldset>


                                <fieldset>
                                    <textarea placeholder="Additional Information" tabindex="5" name="from_additional_information" required></textarea>
                                </fieldset>



                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" value="Send Message" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </ModalBody>

                </Modal>


            </div>

        );
    }
}

export default Index;

