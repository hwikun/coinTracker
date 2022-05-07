import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 480px;
	margin: 0 auto;
	padding: 0px 20px;
`;

const Header = styled.header`
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
	background-color: white;
	color: ${(props) => props.theme.bgColor};
	border-radius: 15px;
	margin-bottom: 10px;
	a {
		display: flex;
		align-items: center;
		padding: 20px;
		transition: color 0.2s ease-in;
	}
	&:hover {
		a {
			color: ${(props) => props.theme.accentColor};
		}
	}
`;

const Img = styled.img`
	width: 35px;
	height: 35px;
	margin-right: 10px;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
	text-align: center;
	display: block;
`;

interface CoinInterface {
	id: string;
	name: string;
	symbol: string;
	type: string;
	rank: number;
	is_new: boolean;
}

function Coins() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState<CoinInterface[]>([]);
	useEffect(() => {
		(async () => {
			const response = await fetch('https://api.coinpaprika.com/v1/coins');
			const json = await response.json();
			setCoins(json.slice(0, 100));
			setLoading(false);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			{loading ? (
				<Loader>Loading...</Loader>
			) : (
				<CoinsList>
					{coins.map((coin) => (
						<Coin key={coin.id}>
							<Link to={`/${coin.id}`} state={{ name: coin.name }}>
								<Img
									src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
								/>
								{coin.name} &rarr;
							</Link>
						</Coin>
					))}
				</CoinsList>
			)}
		</Container>
	);
}
export default Coins;
