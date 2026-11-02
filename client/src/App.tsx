import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SidebarWrapper from "./layout/SidebarWrapper";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SidebarWrapper />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
