import React, { useEffect } from 'react';
import { Header } from './features/Header/Header.jsx'
import { Subreddits } from './features/Subreddits/Subreddits.jsx';
import './App.css';
import { Home } from './features/Home/Home.jsx';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { PostPage } from './Components/postPage/postPage.jsx';

function App() {
const history = useHistory();



  return(
    <div className="app container">
    <Header />
    <div className="body-container">
   
    <main>
    <Switch>
    <Route path='/r/:subreddit/comments/:post_id/:post_title/'>
        <PostPage/>
    </Route>
    <Route path="/">
        <Home/>
    </Route>
    </Switch>
    </main>
    <aside>
      <Subreddits />
    </aside>
    </div>
    </div>
  )
}

export default App;
