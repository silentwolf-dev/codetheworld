


export const CourseSearch = ({buttonTitle, placeholder, courselist})=>{
    
    return(
       <form action="" method="get" className='search-from'>
           <div className="search-wrapper">
               <div>
                
                  <input 
                  className="searchfrom-input" 
                  type="text"
                  />
                  <button className="search-btn btn-pry">{buttonTitle}</button>
               </div>
            </div>    
       </form>
    );
}


  