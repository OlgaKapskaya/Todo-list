import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createTheme, ThemeProvider} from "@material-ui/core";
import {amber, grey} from "@material-ui/core/colors";
const theme = createTheme({
    palette: {
        primary: amber,
        secondary: grey,
        type: 'dark'
    }
})
ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();