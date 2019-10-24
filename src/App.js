import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from '~/styles/theme';
import { store, persistor } from './store';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
