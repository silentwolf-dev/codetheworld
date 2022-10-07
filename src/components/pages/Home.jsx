import '../../css/pages/home.css'
import { Link } from 'react-router-dom'
import { CourseSearch } from '../CourseSearch.jsx'
import { courses } from '../../content/courses'




export const Home = (props) => {
  return (
    <div className="homepage">
        <div className='home-intro-container'>
            <h1>Welcome to codeMastery</h1>
            <p>Search for a course or visit <Link to="/explore">Explore</Link>to view courses</p>
            <CourseSearch
              placeholder={"search something"}
              courselist={courses}
              buttonTitle={"search"}
            />
        </div>
    </div>
  )
}