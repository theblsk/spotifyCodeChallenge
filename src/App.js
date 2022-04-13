import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SearchPage from "./Components/SearchPage";
import Navbar from "./Components/Navbar"
import AlbumPage from "./Components/AlbumPage";
function App() {
  return (
    <BrowserRouter>

    <Navbar>

    </Navbar>
      <div className="containAll">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path='/search' element={<SearchPage />}></Route>
          <Route path='/albums' element={<AlbumPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
