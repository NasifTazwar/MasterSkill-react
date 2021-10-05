import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data=>setCourses(data.slice(0,4)))
    }, []);
    return (
        <div className="container-fluid services-container">
            <h1 className="container our-services pt-5">Our Services</h1>
            <p className="pb-5">You don't have to struggle alone, you've got our assistance and help.</p>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 courses-container">
                    {
                        courses.map(course=><Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                    {/* {
                        allCourses.map(course=><AllCourses
                            key={course._id}
                            course={course}
                        ></AllCourses>)
                    } */}

                </div>
            </div>
            
        </div>
    );
};

export default Services;