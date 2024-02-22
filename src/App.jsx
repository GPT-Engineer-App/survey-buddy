import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateSurvey from "./pages/CreateSurvey.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-survey" element={<CreateSurvey />} />
      </Routes>
    </Router>
  );
}

export default App;
