import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/Bi';

const Course = ({ course, handleAddToCart }) => {
    const { img, title, detail, hour, price } = course;
    return (
        <div className='flex flex-col bg-white p-4 rounded-xl'>
            <img src={img} alt="" />
            <h3 className='text-[#1C1B1B] text-xl font-semibold mt-5'>{title}</h3>
            <span className='text-[#1C1B1B] text-base font-normal mt-5 mb-5'>{detail}</span>
            <div className='flex justify-between text-[#1C1B1B99] font-semibold mt-auto'>
                <div className='flex items-center justify-between'>
                    <FiDollarSign className='text-2xl'></FiDollarSign>
                    <p>Price: {price}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <BiBookOpen className='text-2xl'></BiBookOpen>
                    <p>Credit: {hour}hr </p>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(course)}
                className='bg-[#2F80ED] text-white text-xl font-medium w-full py-2 rounded-lg mt-5'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Course;