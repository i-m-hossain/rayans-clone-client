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
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
