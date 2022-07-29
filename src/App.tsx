import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CharactersPage from "./pages/characters";
import CharacterShowPage from "./pages/characters/show";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters">
        <Route index element={<CharactersPage />} />
        <Route path=":characterId" element={<CharacterShowPage />} />
      </Route>
    </Routes>
  );
}

export default App;
