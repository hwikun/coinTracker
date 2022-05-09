import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './route/Coin';
import Coins from './route/Coins';
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Coins />} />
				<Route path='/:coinId/*' element={<Coin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
