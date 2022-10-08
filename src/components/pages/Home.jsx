/** @format */

import "../../css/pages/home.css";
import { Link } from "react-router-dom";
import img from '../../assets/offer.png'
import { CourseSearch } from "../CourseSearch.jsx";
import { courses } from "../../content/courses";
import "../../css/pages/home.css";
import { DisplayTags } from "../DisplayTags";
const tags = ["css", "c#", "javascript", "html"];

export const Home = (props) => {
	return (
		<div className='homepage'>
			<div className='home-intro-container'>
				<h1>
					Welcome to <span>codemastery</span>
				</h1>
				<p>
					You can find over 100+ courses based on what on your topic or visit{" "}
					<Link to='/explore'>Explore</Link> to view courses
				</p>
				<div className="trending-tags-display">
					<span>Top five trending tags</span>
					<DisplayTags tags={tags} />
					<CourseSearch
						placeholder={"search something"}
						courselist={courses}
						buttonTitle={"search"}
						className={"desktop"}
					/>
				</div>
			</div>

			<div className='search-container mobile'>
				<CourseSearch
					placeholder={"search something"}
					courselist={courses}
					buttonTitle={"search"}
					className={""}
					hidelist={true}
				/>
			</div>


			<div className="benefits-sections">
                   <div  className="">
				      <img  className="benfits-img" src={img} alt="" />
					   <h3>create courses</h3>
					   <p>create courses and share it with others allow</p>
					</div> 

					<div  className="">
						<div className="benefit-card2">
							<img className="benfits-img" src={img} alt="" />
						 <h3>create courses</h3>
					     <p>create courses and share it with others allow</p>
						</div>
					</div> 

					<div  className="">
						<img className="benfits-img" src={img} alt="" />
					   <h3>create courses</h3>
					   <p>create courses and share it with others allow</p>
					</div> 
			</div>
		</div>
	);
};
