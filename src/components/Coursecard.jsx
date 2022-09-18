
export const CourseCard = ({
    title,
    description,
    buttonTitle, 
    benefits, 
})=>{
    return(
       <div  className="coursecard">
        <div className="coursecard-header">
             <h2 className="coursecard-title">{title}</h2>
            <p className="coursecard-price">$0</p>
             <p className="cursecard-title">{description}</p>
        </div>
             <ul className="coursecard-benefits-list">
                {
                    benefits.map((benefit)=>{
                        return(
                            <li className="cursecard-benifits">
                              <span class="material-icons checkbox-icon">check_box</span>
                              {benefit}
                            </li>
                        );   
                    })
                }
             </ul>

             <button className="coursecard-btn">{buttonTitle}</button>
       </div>
    )
}