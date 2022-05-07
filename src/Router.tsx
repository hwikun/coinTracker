import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './route/Coin';
import Coins from './route/Coins';
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/:coinId' element={<Coin />}></Route>
				<Route path='/' element={<Coins />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
