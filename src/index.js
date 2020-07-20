import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue, amber } from '@material-ui/core/colors';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: amber[500],
      light: amber[200],
      dark: amber[700],
    },
    type: 'light',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
