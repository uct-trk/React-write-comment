import React from 'react'
import WriteList from './components/WriteList'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import WriteDetail from './components/WriteDetail';

function App() {


  return (
    <Router>
    <div className="main-wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component={WriteList}/>
        <Route path="/posts/:id" component={WriteDetail}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
