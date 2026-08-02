import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SidebarWrapper from "./layout/SidebarWrapper";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route element={<SidebarWrapper />}>
            <Route path="/" element={<Home />} />
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
