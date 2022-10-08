/** @format */

export const DisplayTags = ({tags}) => {
	return (
		<ul className='taglist-container mobile'>
			{tags.map((v) => {
				return <li className='home-taglist'>{v}</li>;
			})}
		</ul>
	);
};
