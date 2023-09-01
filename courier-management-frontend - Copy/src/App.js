import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import AddUserForm from "./userComponent/AddUserForm";
import UserLoginForm from "./userComponent/UserLoginForm";
import AddCardDetails from "./pages/AddCardDetails";
import MyOrder from "./userComponent/MyOrder";
import AllOrders from "./userComponent/AllOrders";
import SearchOrder from "./userComponent/SearchOrder";
import RegisterAdminForm from "./userComponent/RegisterAdminForm";
import AdminLoginPage from "./userComponent/AdminLoginPage";
import AddDeliveryPerson from "./userComponent/AddDeliveryPerson";
import DeliveryPersonLogin from "./userComponent/DeliveryPersonLogin";
import AssignDeliveryToOrders from "./userComponent/AssignDeliveryToOrders";
import MyDeliveries from "./userComponent/MyDeliveries";
import AddCourierForm from "./CourierComponent/AddCourierForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/user/register" element={<AddUserForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/admin/register" element={<RegisterAdminForm />} />
        <Route path="/user/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/user/deliveryperson/register"
          element={<AddDeliveryPerson />}
        />
        <Route
          path="/user/deliveryperson/login"
          element={<DeliveryPersonLogin />}
        />
        <Route
          path="/home/product/category/:categoryId/:categoryName"
          element={<HomePage />}
        />
        <Route path="/user/mycourier" element={<MyOrder />} />
        <Route path="/user/admin/allcourier" element={<AllOrders />} />
        <Route path="/user/admin/searchOrder" element={<SearchOrder />} />
        <Route
          path="/user/admin/assigndelivery"
          element={<AssignDeliveryToOrders />}
        />
        <Route path="/user/delivery/myorders" element={<MyDeliveries />} />
        <Route path="/user/courier/add" element={<AddCourierForm />} />
        <Route path="/user/courier/payment" element={<AddCardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
