export const TutCard = ({id, title, description, benifits, btnText})=>{
    return (
        <div className="tutcard">
             <h3 className="tutcard-title">{title}</h3>
             <div><p>{description}</p></div>


             <ul className="tutcard-benifits">
                {
                    benifits.map((benifit)=>{
                        return(
                            <li key={id}>{benifit}</li>
                        )
                    })
                }
            </ul>

            <button type="button" className="tutcard-btn">{btnText}</button>
        </div>
    )
}