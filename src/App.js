import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Info from './Components/InfoSection/Info';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="" element={<Info/>}/>
      </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
