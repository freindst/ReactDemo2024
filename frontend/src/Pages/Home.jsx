import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
					<h2>Welcome!</h2>
					<Link to="/users">
						<div className="btn">Check all users</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;