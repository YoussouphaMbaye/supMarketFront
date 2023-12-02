import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (<>
  <BrowserRouter>
  
    <Routes>
      <Route  path="/" element={<Home/>}></Route>
      
      <Route path="/Product" element={<Products />}></Route>
      {/* <Route path="/empControle/:id" element={<ControlCode />}></Route> */}
      
      
    </Routes>
  </BrowserRouter>
  
  </>);
}

export default App;
