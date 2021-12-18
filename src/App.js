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
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Laptop from './Pages/Explore/Laptop/Laptop';
import Tablet from './Pages/Explore/Tablet/Tablet';
import Monitor from './Pages/Explore/Monitor/Monitor';
import AllProducts from './Pages/Explore/AllProducts/AllProducts';
import Explore from './Pages/Explore/Explore';
import ManageCategory from './Dashboard/pages/ManageCategory/ManageCategory';
import EditCategory from './Dashboard/pages/EditCategory/EditCategory';
import SearchResult from './Pages/SearchResult/SearchResult';
import UserOrder from './Dashboard/pages/UserOrder/UserOrder';
import ManageOrders from './Dashboard/pages/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardContainer />
                </PrivateRoute>
              }
            >
              <Route path="welcome" element={<DashboardWelcome />} />
              <Route path="userOrder" element={<UserOrder />} />

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
                path="manageCategory"
                element={
                  <AdminRoute>
                    <ManageCategory />
                  </AdminRoute>

                }
              />
              <Route
                path="editCategory/:id"
                element={
                  <AdminRoute>
                    <EditCategory />
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
              <Route
                path="manageOrders"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>

                }
              />

            </Route>
            <Route
              path="/products/:productId"
              element={<SingleProduct />}
            />
            <Route path="/explore" element={<Explore />} >
              <Route index element={<AllProducts />} />
              <Route path="laptop" element={<Laptop />} />
              <Route path="tablet" element={<Tablet />} />
              <Route path="monitors" element={<Monitor />} />
            </Route>
            <Route
              path="/placeOrder/:productId"
              element={<PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>}
            />
            <Route
              path="/searchResult"
              element={<SearchResult />}
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
