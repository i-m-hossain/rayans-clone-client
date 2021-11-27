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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardContainer from './Dashboard/DashboardContainer/DashboardContainer';
import ManageProducts from './Dashboard/pages/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardContainer />
                </PrivateRoute>
              }
            >
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="manageProducts" element={<ManageProducts />} />

            </Route>
            <Route
              path="/products/:productId"
              element={<SingleProduct />}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={

                <p>There's nothing here!</p>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
