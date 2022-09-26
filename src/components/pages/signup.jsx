import { SignupForm } from "../Auth/Signup";
import "../../css/auth/signup.css"

export const SignupPage =()=>{
    return(
        <div className="signup-page">
           <div className="signupform-container">
               <SignupForm/>
          </div>
        </div>
    )
}