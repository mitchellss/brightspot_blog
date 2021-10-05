import './App.css';
import Header from './modules/Header';
import Body from './modules/Body';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticlePage from './modules/ArticlePage';

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Body}/>
      <Route path="/:urlName"  component={ArticlePage}/>
    </Router>
  );
}

export default App;
