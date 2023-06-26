import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/Home'

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
