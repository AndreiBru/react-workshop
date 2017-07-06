import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/app.css';
import {Route} from "react-router-dom";

const target = document.querySelector('#root');

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <main>
          <Route exact path="/" component={ App } />
        </main>
      </ConnectedRouter>
    </Provider>,
    target
);

registerServiceWorker();
