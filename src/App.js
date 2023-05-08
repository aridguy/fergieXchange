// import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Routes/Dashboard/Dashboard';




function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/dashboard" element={<Dashboard />} />          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
