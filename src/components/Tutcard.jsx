export const TutCard = ({ id, title, price, description, benifits, btnText }) => {
    return (
        <div className="tutcard">
            <h3 className="tutcard-title">{title}</h3>
            <h4 className="tut-price">{price}</h4>
            <div><p className="tut-description">{description}</p></div>

            <ul className="tutcard-benifits">
                {
                    benifits.map((benifit) => {
                        return (
                            <li key={id}>{benifit}</li>
                        )
                    })
                }
            </ul>

            <button type="button" className="tutcard-btn">{btnText}</button>
        </div>
    )
}