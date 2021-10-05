import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import './AllServices.css';

const AllServices = () => {
    const [allCourses,setAllCourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data=>setAllCourses(data))
    }, []);
    return (
        <div className="container-fluid services-container">
            <div className="mt-5 pt-5">
                <h1 className="container our-services pt-5">Our Services</h1>
                <p className="pb-5">You don't have to struggle alone, you've got our assistance and help.</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 courses-container">
                    {/* {
                        allCourses.map(course=><AllCourses
                            key={course._id}
                            course={course}
                        ></AllCourses>)
                    } */}
                    {
                        allCourses.map(course=><Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default AllServices;