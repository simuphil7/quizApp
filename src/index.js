import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Quizpage from './pages/quizpage'
import Resultpage from './pages/result'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'


const myStore = createStore(allReducers,   
  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/quiz' component={Quizpage}/>
    <Route path='/result' component={Resultpage} />
    </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
