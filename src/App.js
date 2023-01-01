
import './App.css';
import Cities from './components/cities';
import Clock from './components/clock';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>

        <Switch>
          <Route path="/" exact component={Cities}></Route>
          <Route path="/:region/:place" component={Clock}></Route>
        </Switch>
  

    </Router>
    </div>

  );
}

export default App;
