import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Visualization from "./pages/visualization";
import CreateSurvey from "./pages/create_survey";
import PreviousSurvey from "./pages/previous_survey";
import FormWizard from "./pages/FormWizard";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Latest from "./pages/latest";
import UserHome from "./pages/userhome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/userhome" element={<UserHome />} />b
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/form" element={<FormWizard />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/createsurvey" element={<CreateSurvey />} />
          <Route path="/previoussurvey" element={<PreviousSurvey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
