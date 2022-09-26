import { LoginForm } from "../Auth/Login";
import "../../css/auth/signup.css"


export const LoginPage = ()=>{
    return (
        <div className="loginpage">
          <div className="loginform-container">
                <LoginForm/>
          </div>
        </div>
    )
}