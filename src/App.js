import React from 'react'
import WriteList from './components/WriteList'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import WriteDetail from './components/WriteDetail';
import AddWrite from './components/AddWrite';
import WriteEdit from './components/WriteEdit'

function App() {


  return (
    <Router>
    <div className="main-wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component={WriteList}/>
        <Route path="/posts/:id" exact component={WriteDetail}/>
        <Route path="/addwrite" component={AddWrite}/>
        <Route path="/posts/:id/edit" component={WriteEdit}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
