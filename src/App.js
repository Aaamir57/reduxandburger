import logo from './logo.svg';
import './App.css';
import Redux from './Redux';
import Burger from './Burger';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" exact element={<Burger />} />
          <Route path="/redux" exact element={<Redux />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
