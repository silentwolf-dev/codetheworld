/** @format */
import { Navbar, HomePage, CoursePage,  SignupPage, LoginPage, Footer} from "./components";
import { Route, Routes } from "react-router-dom";


function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/courses' element={<CoursePage />} />
				<Route exact path='/auth/signup' element={<SignupPage />} />
				<Route exact path='/auth/login' element={<LoginPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
