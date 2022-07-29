import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
    </Routes>
  );
}

export default App;
