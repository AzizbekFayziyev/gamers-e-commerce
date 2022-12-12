import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Styles
import './assets/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const siteTheme = createTheme({
  palette: {
    primary: {
      main: "#5900ff"
    },
    secondary: {
      main: "#FB2E86"
    },
    blue: {
      main: "#101750"
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={siteTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
