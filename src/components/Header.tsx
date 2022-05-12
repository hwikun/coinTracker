import styled from 'styled-components';
import { Switch as Toggle } from 'antd';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Wraper = styled.header`
	height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0px 15px;
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

const BackBtn = styled.button``;

interface IHeader {
	title: string;
}

function Header({ title }: IHeader) {
	const setDarkAtom = useSetRecoilState(isDarkAtom);
	const toggleDark = () => setDarkAtom((prev) => !prev);
	const { pathname } = useLocation();

	return (
		<Wraper>
			<BackBtn>
				{pathname !== '/coinTracker' ? (
					<Link to={'/coinTracker'}>홈으로</Link>
				) : null}
			</BackBtn>
			<Title>{title}</Title>
			<Toggle onClick={toggleDark} />
		</Wraper>
	);
}
export default Header;
