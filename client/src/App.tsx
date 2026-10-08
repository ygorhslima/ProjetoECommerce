import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SidebarWrapper from "./layout/SidebarWrapper";
import CategoryProvider from "./context/CategoryContext";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SidebarWrapper />}>
              <Route path="/" element={<Home />} />
              <Route path="/:idCategory" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CategoryProvider>
  );
}

export default App;
