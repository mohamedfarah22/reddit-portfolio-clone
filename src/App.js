import React from 'react';
import { Header } from './features/Header/Header.jsx'
import { Subreddits } from './features/Subreddits/Subreddits.jsx';
import './App.css';
import { Home } from './features/Home/Home.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return(
    <div className="app container">
    <Header />
    <div className="body-container">
    <main>
    <Router>
      <Route path="/">
      <Home/>
      </Route>
      
    </Router>
    </main>
    <aside>
      <Subreddits />
    </aside>
    </div>
    </div>
  )
}

export default App;
