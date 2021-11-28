import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AddProduct from './Dashboard/pages/AddProduct/AddProduct';
import SingleProduct from './Pages/SingleProduct/SingleProduct/SingleProduct';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardContainer from './Dashboard/DashboardContainer/DashboardContainer';
import ManageProducts from './Dashboard/pages/ManageProducts/ManageProducts';
import DashboardWelcome from './Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Dashboard/pages/MakeAdmin/MakeAdmin';
import EditProduct from './Dashboard/pages/EditProduct/EditProduct';

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
              <Route path="welcome" element={<DashboardWelcome />} />
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="editProduct/:id" element={<EditProduct />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />

            </Route>
            <Route
              path="/products/:productId"
              element={<SingleProduct />}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={

                <p>Page not found!</p>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;
