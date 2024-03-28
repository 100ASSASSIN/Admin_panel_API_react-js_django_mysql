import { Link } from 'react-router-dom';

const Home= () => {
	return (
		<div className="container">
			<div className="banner-container">
					<h2>ASSASSIN</h2>
					<Link to="/assassin">
						<div className="btn">Admin</div>
					</Link>
				
			</div>
		</div>
	);
};

export default Home;
