import { CourseCard } from "../Coursecard";
import "../../css/course.css"
import { cardbase } from "../../content/courses";
export const Course = ()=> {
    return(
        <div className="Coursepage">
              <div className="coursecard-container">
                 { 
                    cardbase.map((value)=>{
                        return(
                           <CourseCard
                             title={value.title}
                             description={value.description}
                             buttonTitle={value.btn}
                             benefits={value.benifits}
                           />
                        )
                    })
                    
                  }
              </div>
        </div>
    );
}

