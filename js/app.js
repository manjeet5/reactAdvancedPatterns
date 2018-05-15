import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from './client/welcomePage.js';

const App = () => (<div>
  <Route exact path="/" component={WelcomePage} />
</div>);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
