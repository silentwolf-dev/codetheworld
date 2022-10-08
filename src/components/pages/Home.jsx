/** @format */

import "../../css/pages/home.css";
import { Link } from "react-router-dom";
import { CourseSearch } from "../CourseSearch.jsx";
import { courses } from "../../content/courses";
import "../../css/pages/home.css"

const tags = ["css", "c#", "javascript", "html"];

export const Home = (props) => {
	return (
		<div className='homepage'>
			<div className='home-intro-container'>
				<h1>Welcome to codeMastery</h1>
				<p>
				  You can find over 100+ courses based on what on your topic or visit <Link to='/explore'>Explore</Link>to view
					courses
				</p>
				<CourseSearch
					placeholder={"search something"}
					courselist={courses}
					buttonTitle={"search"}
				/>

				<ul className='home-taglist-container'>
					{tags.map((v) => {
						return <li className="home-taglist">{v}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
