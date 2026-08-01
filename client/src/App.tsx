import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import NavigationCategory from "./layout/NavigationCategory";
function App() {
  return (
    <>
      <div>
        <Header/>
        <NavigationCategory/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
