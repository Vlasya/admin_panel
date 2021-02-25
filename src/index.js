import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.module.scss'
import App from './App';
import { Provider} from 'react-redux'
import { BrowserRouter as Router} from "react-router-dom";
import {store} from "./store";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>

    </Router>
  ,
  document.getElementById('root')
);


