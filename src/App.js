import React from 'react';
import { Header } from './features/Header/Header.jsx'
import { Subreddits } from './features/Subreddits/Subreddits.jsx';
import './App.css';

function App() {
  return(
    <div className="app container">
    <Header />
    <div className="body-container">
    <main>
      <h1>Home</h1>
    </main>
    <aside>
      <Subreddits />
    </aside>
    </div>
    </div>
  )
}

export default App;
