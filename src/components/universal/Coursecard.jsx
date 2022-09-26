import  img  from "../../assets/course-image.jpg"
export const CourseCard = ({title, description})=>{
    return(
      <div className="coursecard">
          <div className="coursecard-header">
              <img className="coursecard-img" src={img} alt="" />
          </div>
          <div className="coursecard-info">
             <h3 className="coursecard-title">{title}</h3>
             <p className="coursecard-description">{description}</p>
          </div>

          <div className="coursecard-footer">
               <span className="coursecard-price">$0.00/mouthly</span>
              <button className="coursecard-btn">Purchase</button>
          </div>
      </div>
    )
}