import Router from './Router';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Router />
			<ReactQueryDevtools initialIsOpen={true} />
		</>
	);
}

export default App;
