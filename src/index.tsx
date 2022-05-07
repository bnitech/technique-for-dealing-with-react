import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import loggerMiddleware from './lib/loggerMiddleware';

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
