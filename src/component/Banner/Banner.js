import React from 'react';
import bannerImage from '../../images/banner-img.jpg';
import { BsExclamationLg } from 'react-icons/bs';
import './Banner.css';

const Banner = () => {
    const iconColor={
        fontSize: '35px',
        fontWeight: 600,
        color: '#FF6600'
    }
    return (
        <div className="row align-items-center banner-container custom-margin">
                        <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                                    <h1 className="title-header">
                                    Learn Skills From 
                                    <br /> Our Platfrom<span><BsExclamationLg style={iconColor}></BsExclamationLg></span> <br />
                                    </h1>
                                    <br />
                                    <h5>Unlimited access to all 16+ courses.</h5>
                                    <br />

                        </div>
                        <div className="col-md-12 col-lg-6 col-12 col-sm-12">
                            <img className="img-fluid" src={bannerImage} alt="" />
                        </div>
                    </div>
    );
};

export default Banner;