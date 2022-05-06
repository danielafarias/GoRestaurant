import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes />
    </BrowserRouter>
  );
};

export default App;
