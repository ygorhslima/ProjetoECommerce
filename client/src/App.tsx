import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import SidebarWrapper from "./layout/SidebarWrapper";
function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SidebarWrapper/>}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
