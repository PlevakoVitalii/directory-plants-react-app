import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navibar from './components/Navibar';
import Users from './components/Users';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navibar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
