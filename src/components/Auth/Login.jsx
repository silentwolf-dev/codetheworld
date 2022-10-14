import {Link} from "react-router-dom"

const LoginForm = ()=>{
   return(
     <div>
       <form action="" method="get" className="login-form">

         <div className="login-inputs-containers login-email-container">
            <h4 className="login-titles login-email-title">Email:</h4>

            <input 
            type="text" 
            placeholder={"Enter username"}
            className="login-inputs login-email-input"
            />
         </div>

         <div className="login-inputs-containers login-password-container">
              <h4 className="login-titles login-password-title">Password</h4>
              <input 
              type={"password"}
              placeholder={"password"}
              className="login-inputs login-password-input"
              />
         </div>

          <div className="login-inputs-containers login-info-container">  
              <Link to={"/auth/reset-password"}>reset password</Link>

              <p className="login-signup-link-txt">
                Don't have an account <Link to={"auth/signup"}>signup</Link>
              </p> 
          </div>

          <div className="login-errormessage-container">
             <span className="login-errormessage">Password or email is incorrect</span>
          </div>

          <div className="login-btn-container">
             <button type="submit" className="login-btn">Login</button>
            </div>  
     </form>
     </div>
     
   ) 
}


export default LoginForm;