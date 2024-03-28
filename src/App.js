import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const NoMatch = lazy(() => import('./Components/NoMatch'));
const Assassin = lazy(() => import('./Pages/assassin'));
const View = lazy(() => import('./view_panel/view_panel'));

const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/assassin" element={<Assassin />} />
					<Route path="/panel" element={<View />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
