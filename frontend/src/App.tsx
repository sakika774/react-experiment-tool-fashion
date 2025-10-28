// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExplanationPage } from "./pages/ExplanationPage";
import { ConsentPage } from "./pages/ConsentPage";
import { ExperimentTopPage } from "./pages/ExperimentTopPage";
import { ImagePage } from "./pages/ImagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExplanationPage />} />
        <Route path="/consent" element={<ConsentPage />} />
        <Route path="/experiment" element={<ExperimentTopPage />} />
        <Route path="/image/:index" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;