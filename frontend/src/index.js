import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRenderer } from 'fela';
import { RendererProvider as StyleProvider, ThemeProvider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

import './index.css';
import App from './App';
import store from './store';
import theme from './app-theme';

const renderer = createRenderer({
    plugins: [prefixer(), fallbackValue()],
});

// The provider will automatically render the styles
// into the mountNode on componentWillMount
const mountNode = document.getElementById('stylesheet');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyleProvider renderer={renderer} mountNode={mountNode}>
                    <App />
                </StyleProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
