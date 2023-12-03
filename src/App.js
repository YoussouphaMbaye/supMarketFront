import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Supplie from './pages/supplie';
import Employee from './pages/employee';

function App() {
  return (<>
  <BrowserRouter>
  
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      
      <Route path="/Product" element={<Products />}></Route>
      <Route path="/supplie" element={<Supplie />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      {/* <Route path="/empControle/:id" element={<ControlCode />}></Route> */}
      
      
    </Routes>
  </BrowserRouter>
  
  </>);
}

export default App;
