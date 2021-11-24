import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import SingleProduct from './Pages/SingleProduct/SingleProduct/SingleProduct';
import Login from './Pages/Login/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
