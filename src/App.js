import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import NavBar from './Components/NavBar';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const NoMatch = lazy(() => import('./Components/NoMatch'));
const Assassin = lazy(() => import('./Pages/assassin'));
const View = lazy(() => import('./view_panel/view_panel'));
const NavBar = lazy(() => import ('./Components/NavBar'));
const Users = lazy(() => import ('./view_panel/user'));
const Profi = lazy(() => import ('./view_panel/profi'));
const Orders = lazy(() => import ('./view_panel/orders'));
const Items_ls = lazy(() => import ('./view_panel/items_all'));
const UploadPage = lazy(() => import ('./view_panel/upload/upload'));
const DeleteItem = lazy(() => import ('./view_panel/upload/delete'));
const Bot = lazy(() => import ('./Components/cookie'));
const Deleteord = lazy(() => import ('./view_panel/upload/orders-del'));
const Deleteu = lazy(() => import ('./view_panel/upload/user-del'));
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
					<Route path="/Users" element={<Users />} />
					<Route path="/Profi" element={<Profi />} />
					<Route path="/Orders" element={<Orders />} />
					<Route path="/new" element={<Items_ls />} />
					<Route path="/del" element={<DeleteItem />} />
					<Route path="/ord_del" element={<Deleteord />} />
					<Route path="/users_del" element={<Deleteu />} />
					<Route path="/cot" element={<Bot />} />
					<Route path="/up" element={<UploadPage />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
