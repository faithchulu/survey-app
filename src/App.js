import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login";
import Home from "./pages/Home";
import Survey from "./pages/user/Survey";
import Visualization from "./pages/admin/visualization";
import CreateSurvey from "./pages/admin/create_survey";
import PreviousSurvey from "./pages/admin/previous_survey";
import FormWizard from "./pages/user/FormWizard";
import Dashboard from "./pages/admin/dashboard";
import About from "./pages/user/about";
import Latest from "./pages/user/latest";
import UserHome from "./pages/user/userhome";
import CreateForm from "./pages/admin/createform";
import ViewSurvey from "./pages/admin/view_survey";

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
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/form" element={<FormWizard />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/createsurvey" element={<CreateSurvey />} />
          <Route path="/previoussurvey" element={<PreviousSurvey />} />
          <Route path="/create" element={<CreateForm/>} />
          <Route path="/view" element={<ViewSurvey/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
