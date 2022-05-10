import Router from './Router';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

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
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => setIsDark((current) => !current);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<button onClick={toggleDark}>Toggle Mode</button>
				<GlobalStyle />
				<Router />
				<ReactQueryDevtools initialIsOpen={true} />
			</ThemeProvider>
		</>
	);
}

export default App;
