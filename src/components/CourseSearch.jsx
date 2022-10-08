/** @format */
import ".././css/components/searchbar.css";

export const CourseSearch = ({className, buttonTitle, placeholder, courselist, hidelist}) => {
	return (
		<div className={`searchbar ${className}`}>
			<div className='search-input-container  homepage-mview'>
				<input type='text' className='search-input' placeholder="search javaScript, CSS, etc..." />
				<button className="search-btn">search <span className="material-icons">search</span></button>
			</div>
			<ul className={`search-content-container ${hidelist === true ? "hidelist": " "}`}>
				{courselist.map((v) => {
					return (
						<li className='search-content'>
							<div>
							<h3 class='search-content-title'>{v.name}</h3>
							<p className='search-content-text'>{v.description}</p>
							</div>
							<img className="search-content-img" src={v.img} alt='' />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
