import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SingleProduct from './Pages/SingleProduct/SingleProduct/SingleProduct';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardContainer from './Dashboard/DashboardContainer/DashboardContainer';
import ManageProducts from './Dashboard/pages/ManageProducts/ManageProducts';
import DashboardWelcome from './Dashboard/DashboardWelcome/DashboardWelcome';
import EditProduct from './Dashboard/pages/EditProduct/EditProduct';
import ManageUserRole from './Dashboard/pages/ManageUserRole/ManageUserRole';
import AdminRoute from './Pages/AdminRoute/AdminRoute';

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
              <Route
                path="manageProducts"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>}

              />
              <Route
                path="editProduct/:id"
                element={
                  <AdminRoute>
                    <EditProduct />
                  </AdminRoute>
                }
              />
              <Route
                path="manageUserRole"
                element={
                  <AdminRoute>
                    <ManageUserRole />
                  </AdminRoute>

                }
              />

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
