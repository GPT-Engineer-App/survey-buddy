import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CreateSurvey from "./pages/CreateSurvey";
import PreviewSurvey from "./pages/PreviewSurvey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-survey" element={<CreateSurvey />} />
        <Route path="/preview-survey" element={<PreviewSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;
