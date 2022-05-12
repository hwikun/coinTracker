import { PriceData } from './Coin';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Title = styled.h2`
	font-size: 30px;
	margin-bottom: 20px;
	border-bottom: 2px solid black;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 300;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 10px 0px;
`;

const Amount = styled.div`
	width: 50%;
	align-items: center;
	display: flex;
	justify-content: center;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
interface PriceProps {
	coinName: string;
	priceData: PriceData;
}

function Price({ coinName, priceData }: PriceProps) {
	const {
		quotes: { USD },
	} = priceData;

	return (
		<Container>
			<Helmet>
				<title>{coinName} Price</title>
			</Helmet>
			<Title>{coinName} Price</Title>
			<Contents>
				<Content>
					<Amount>시가총액: {USD.market_cap}</Amount>
					<Amount>24시간 거래량: {USD.volume_24h}</Amount>
				</Content>
				<Content>
					<Amount>가격: ${USD.price}</Amount>
					<Amount>전일대비: {USD.percent_change_24h}%</Amount>
				</Content>
			</Contents>
		</Container>
	);
}

export default Price;
