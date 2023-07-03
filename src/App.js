import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Visualization from "./pages/visualization";
import CreateSurvey from "./pages/create_survey";
import PreviousSurvey from "./pages/previous_survey";
import FormWizard from "./pages/FormWizard";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/form" element={<FormWizard />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/createsurvey" element={<CreateSurvey />} />
          <Route path="/previoussurvey" element={<PreviousSurvey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
