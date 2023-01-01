
import './App.css';
import Cities from './components/cities';
import Clock from './components/clock';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Cities}></Route>
          <Route path="/:id" component={Clock}></Route>
        </Switch>
        <Cities></Cities>
  
    </div>
    </Router>

  );
}

export default App;
