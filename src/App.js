import "./App.css";
import Cities from "./components/cities";
import Clock from "./components/clock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Cities ></Cities>}></Route>
          <Route path="/region/:place" element={<Clock></Clock> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
