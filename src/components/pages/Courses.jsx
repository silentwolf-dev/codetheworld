import CourseCard from "../universal/Coursecard";
import "../../css/pages/course.css"
import { courses} from "../../content/courses";
const CoursePage = ()=> {
    return(
        <div className="Coursepage">
              <div className="coursecard-container">
                 { 
                    courses.map((value)=>{
                        return(
                           <CourseCard
                             title={value.title}
                             description={value.description}
                           />
                        )
                    })
                    
                  }
              </div>
        </div>
    );
}

export default CoursePage;