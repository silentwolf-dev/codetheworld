/** @format */
import ".././css/components/searchbar.css";
import { useState } from "react";
import { courses } from "../content/courses";
import { useSearchParams } from "react-router-dom";

const CourseSearch = ({
	className,
	buttonTitle,
	placeholder,
	courselist,
	hidelist,
}) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className={`searchbar ${className}`}>
			<div className='search-input-container  homepage-mview'>
				<input
					type='text'
					className='search-input'
					value={inputValue}
					placeholder='search javaScript, CSS, etc...'
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
				<button className='search-btn'>
					search <span className='material-icons'>search</span>
				</button>
			</div>
			<ul className={`search-content-container hidelist  `}>
				{courses
					.filter((v) => {
						if (inputValue === "") {
							return v;
						} else if (
							v.name.toLowerCase().includes(inputValue.toLowerCase()) ||
							v.description.toLowerCase().includes(inputValue.toLowerCase()) ||
							v.tags.join("").toLowerCase().includes(inputValue.toLowerCase())
						) {
							return v;
						}
					})
					.map((v) => {
						return (
							<li className='search-content'>
								<div>
									<h3 class='search-content-title'>{v.name}</h3>
									<p className='search-content-text'>{v.description}</p>
								</div>
								<p className='search-content-price'>{v.price}</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default CourseSearch;
