import CustomerLayout from "./layout/CustomerLayout";
import { Routes, Route } from "react-router-dom";
import StaffLayout from "./layout/StaffLayout";
import HomePage from "./pages/customer/HomePage";
import StaffHomePage from "./pages/staff/StaffHomePage";
import SignUpPage from "./pages/staff/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Menu from "./pages/customer/Menu";
import EmailVerify from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgetPassword";
import { Toaster } from "react-hot-toast";
import CustomerPage from "./pages/customer/CustomerPage";
import AboutUs from "./pages/AboutUs";
import ReservationPage from "./pages/customer/ReservationPage";
import ProfilePage from "./pages/customer/ProfilePage"; // Import ProfilePage

export default function App() {
  return (
    <>
      {/* Wrap all adjacent elements in a React Fragment */}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customer/home" element={<CustomerPage />} />
          <Route path="/verify-email/:token" element={<EmailVerify />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reservation" element={<ReservationPage />} />
          
          {/* Add the profile page route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* This will load the profile page */}
        </Route>
        
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<StaffHomePage />} />
          <Route path="/staff/home" element={<StaffHomePage />} />
        </Route>
      </Routes>
    </>
  );
}
m 