import React, { Component, useRef, form } from 'react';

import "./css/home.css"
import "./js/home.js"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../assets/Logo.png'
import emailjs from '@emailjs/browser';
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





class Index extends Component {


    constructor(props) {

        super(props);
        this.state = {
            modal: false
        };

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

            emailjs.sendForm('service_c9azhhb', 'template_jt0xu7l', e.target, '6aCdv7mmH2DEULwUE')
                .then((result) => {
                    console.log(result.text);
                    console.log(result.text);
                    window.location.reload();

                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }



        return (


            <div>



                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{padding:"40px"}}
                >


                    <SwiperSlide>
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>

                                <div class="card-image">
                                    {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
                                </div>
                            </div>

                            <div class="card-content">
                                <h2 class="name">David Dell</h2>
                                <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                                <button class="button" onClick={this.toggle}>Enquiry</button>
                            </div>
                        </div></SwiperSlide>

                    <SwiperSlide> <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button" onClick={this.toggle}>Enquiry</button>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide> <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button" onClick={this.toggle}>Enquiry</button>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide> <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button" onClick={this.toggle}>Enqiiry</button>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide> <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">David Dell</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button" onClick={this.toggle}>Enquiry</button>
                        </div>
                    </div>
                    </SwiperSlide>





                </Swiper>


                <div className='row'>
                    <div style={{ textAlign: "center" }} className='col-sm-12'>
                        &nbsp;

                        <h3 style={{ paddingBottom: "50px" }}>Happiness Guarantee</h3>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-sm-3'><img style={{ height: "100px" }} src={one} /></div>
                    <div className='col-sm-3'><img style={{ height: "100px" }} src={two} /></div>
                    <div className='col-sm-3'><img style={{ height: "100px" }} src={three} /></div>
                    <div className='col-sm-3'><img style={{ height: "100px" }} src={four} /></div>
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

                                <fieldset>
                                    <input placeholder="Your name" name="user_name" type="text" tabindex="1" required autofocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" name="from_email" tabindex="2" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="City" type="text" tabindex="3" name="from_city" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Address" type="text" tabindex="4" name="from_address" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Services Interested For" type="text" tabindex="4" name="from_service_intersted_for" required />
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

