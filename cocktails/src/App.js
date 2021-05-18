import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './components/search';
import Detail from './components/detail';
import './App.css';

function App() {
  return (
    <div className="App">
    <div id="appContainer">
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </Router>
    </div>
    </div>
  );
}

export default App;
