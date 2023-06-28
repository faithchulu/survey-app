import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Visualization from "./pages/visualization";
import Create_survey from "./pages/create_survey";
import Previous_survey from "./pages/previous_survey";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/createsurvey" element={<Create_survey />} />
          <Route path="/previoussurvey" element={<Previous_survey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
