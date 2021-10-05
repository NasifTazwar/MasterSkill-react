import React from 'react';
import contactUsBanner from '../../images/contactUs-banner.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="row align-items-center banner-container custom-margin pb-5">
                        <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                            <img className="img-fluid" src={contactUsBanner} alt="" />
                        </div>
                        <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                                    <h1 className="title-header">
                                    <br /> Contact Us<span></span> <br />
                                    </h1>
                                    <br />
                                    
                                    <br />
                                    <button type="button" className="btn btn-outline-dark btn-lg">Hear From Our Community</button>
                        </div>
            </div>

            <div className="form-container">
            <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div class="row g-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control txt-area-edit" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-outline-dark custom-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Contact;