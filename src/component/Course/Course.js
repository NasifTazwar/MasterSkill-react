import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BiBookAlt ,BiArrowFromLeft,BiDollar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import './Course.css';

const Course = (props) => {
    const {name , img , cost,ratings,reviews,duration,tutor} = props.course;
    return (
        // <div className="col-md-4 col-sm-2 col-2 course-container">
        <div className="course-container">
                <div className="img-container">
                    <img className="course-img" src={img} alt="" />
                </div>
                <div className="course-details">
                    <div className="ratings-duration">
                        <p><BiBookAlt></BiBookAlt> {duration} Lessons</p>
                        <p><span className="fastar"><FaStar></FaStar></span> {ratings}({reviews})</p>
                    </div>
                    <h4 className="course-name">{name}</h4>
                    <p className="course-name"><span className="icon-color"><BsPerson></BsPerson></span> {tutor}</p>
                    <div className="cost-details">
                        <h4><BiDollar></BiDollar>{cost}</h4>
                        <h5>Know Details <BiArrowFromLeft></BiArrowFromLeft></h5>
                    </div>
                </div>
        </div>
    );
};

export default Course;