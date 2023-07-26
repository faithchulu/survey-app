import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login";
import Home from "./pages/Home";
import Visualization from "./pages/admin/visualization";
import CreateSurvey from "./pages/admin/create_survey";
import PreviousSurvey from "./pages/admin/previous_survey";
import FormWizard from "./pages/user/FormWizard";
import Dashboard from "./pages/admin/dashboard";
import About from "./pages/user/about";
import Latest from "./pages/user/latest";
import UserHome from "./pages/user/userhome";

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
