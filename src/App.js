import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./screens/home/Home";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page1' element={<Home/>} />
          <Route path='/page2' element={<Home/>} />
          <Route path='/page3' element={<Home/>} />
          <Route path='/page4' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
