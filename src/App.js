import "./App.css";
import Footer from "./Component/Utility/Footer/Footer";
import NavbarLogin from "./Component/Utility/NavbarLogin/NavbarLogin";
import AllBrandPage from "./Page/AllBrandPage";
import AllCategoryPage from "./Page/AllCategoryPage";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import HomePage from "./Page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopProductPage from "./Page/Products/ShopProductPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import NewPasswordPage from "./Page/Auth/NewPasswordPage";
function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/newpassword" element={<NewPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
