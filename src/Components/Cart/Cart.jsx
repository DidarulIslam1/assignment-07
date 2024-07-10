
import PropTypes from 'prop-types';

const Cart = ({ courses, totalCredit }) => {

    return (
        <div className="md:w-[25rem] p-5 bg-white mt-5 rounded-xl space-y-5 h-96">
            <h2 className="text-[#2F80ED] text-xl font-bold">Credit Hour Remaining: {20 - totalCredit}</h2>
            <hr />
            <h2 className="text-[#1C1B1B] text-xl font-bold">Course Name</h2>
            <ol className='list-decimal'>{
                courses.map(course => <li key={course.id}>{course.title}</li>)
            }</ol>
            <hr />
            <p className="text-[#1C1B1BCC] text-lg font-medium">Total Credit Hour: {totalCredit}hr</p>
            <hr />
            <p className="text-[#1C1B1BCC] text-lg font-semibold">Total Price:</p>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.object.isRequired,
    totalCredit: PropTypes.number.isRequired
}

export default Cart;