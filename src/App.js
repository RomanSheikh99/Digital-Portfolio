import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Sheared/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <Router>
      <Header ></Header>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;
