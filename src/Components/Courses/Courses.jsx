
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({ handleAddToCart }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="md:w-2/3 grid grid-cols-3 gap-5 mt-5">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
}
export default Courses;