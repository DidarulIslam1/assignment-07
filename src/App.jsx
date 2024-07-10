
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Cart from './Components/Cart/Cart'


function App() {
  const [courses, setCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleAddToCart = (course) => {
    if (!courses.includes(course)) {
      setCourses([...courses, course]);
    }
    else {
      alert('This course already selected')
    }

    let count = course.hour + totalCredit;
    if (count > 20) {
      alert('You have not enough time')
    }
    else {
      setTotalCredit(count);
    }
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex gap-5 max-w-[85rem] mx-auto'>
        <Courses
          handleAddToCart={handleAddToCart}
        ></Courses>
        <Cart courses={courses} totalCredit={totalCredit}></Cart>
      </main>

    </>
  )
}

export default App
