import { Link } from "react-router-dom"

const SignupForm = ()=>{
    return(
       <form action="" method="post" className="signup-form">
           <div className="signup-input-container signup-username-container">
            <h4 className=" signup-titles signup-username-title">Username</h4>
            <input 
              type="text"
              placeholder="Enter your username"
              className="signup-inputs signup-username-input"
             />
           </div>

           <div className="signup-input-container signup-email-container">
             <h4 className="signup-titles signup-email-title">Email</h4>
             <input 
              type={"email"}  
              placeholder={"Enter your email"}
              className="signup-inputs signup-email-input"
              />
           </div>

           <div className="signup-input-container signup-password-container">
           <h4 className="signup-titles signup-password-title">Password</h4>
             <input 
              type={"password"}  
              placeholder={"password"}
              className="signup-inputs signup-password-input"
              />
           </div>

           <div className="signup-input-container signup-password-confirm-container">
           <h4 className="signup-titles signup-password-confirm-title">Confirm Password</h4>
           <input 
              type={"password"}  
              placeholder={"confirm password"}
              className="signup-inputs signup-password-confirm-input"
              />
           </div>

           <div className="signup-errormessage-display">
                 <span className="signup-errormessage">vaildaition: User already exicts</span>
           </div>

           <div className="">
             <p className="signup-login-link-txt">
                already have an account <Link to={"auth/login"}>login</Link>
              </p>   
           </div>

            
            <div className="signup-btn-container">
                 <button type={"submit"} className="signup-btn">Signup</button>
            </div>
       </form>
    )
}


export default SignupForm;