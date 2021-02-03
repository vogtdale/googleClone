import './App.css';
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchResults from './pages/serchResults/SearchResults';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResults}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
