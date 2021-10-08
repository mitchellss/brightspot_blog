import './App.css';
import Header from './modules/Header';
import Body from './modules/Body';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticlePage from './modules/ArticlePage';
import CreateArticle from './modules/CreateArticle';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Body}/>
      <Route exact path="/create" exact component={CreateArticle}/>
      <Route path="/article/:urlName" component={ArticlePage}/>
    </Router>
  );
}

export default App;
