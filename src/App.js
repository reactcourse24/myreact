import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Home from './components/Home';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
<Router>
<div className="container">
<Navbar title="My React App"   aboutText="About" homeText="Home" />
<Routes>


<Route  path="/"  element={<Home />} >
        
        </Route>

          <Route  path="/about"  element={<About />} >
        
          </Route>
          <Route  path="/textform" element={ <Textform/>}>
        
          </Route>
          </Routes>
        </div>
      
      
        </Router>
     
      






  </>
  );
}

export default App;
