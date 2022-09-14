export const CourseCard = ({
    title,
    description,
    buttonTitle, 
    benefits, 
})=>{
    return(
       <div  className="coursecard">
             <h2 className="coursecard-title">{title}</h2>
             <p className="cursecard-title">{description}</p>

             <ul className="coursecard-benefits-list">
                {
                    benefits.map((v)=>{
                        return(
                            <li className="cursecard-benifits">
                              {v}
                            </li>
                        );   
                    })
                }
             </ul>

             <button className="coursecard-btn">{buttonTitle}</button>
       </div>
    )
}