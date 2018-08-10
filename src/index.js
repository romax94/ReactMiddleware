import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './services/api';
import rootReducer from './reducers/index';
import App from './containers/App';
import Header from './components/Header/Header';

const middlewares = [thunk];

let middleware = applyMiddleware(...middlewares, api);

// if (proccess.env.NODE_ENV === 'local') {
//   middleware = compose(middleware, composeWithDevTools());
// } else {
//   middleware = compose(middleware);
// }

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeWithDevTools(middleware));
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  root
);
