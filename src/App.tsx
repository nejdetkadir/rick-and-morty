import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CharactersPage from "./pages/characters";
import CharacterShowPage from "./pages/characters/show";
import LocationsPage from "./pages/locations";
import LocationShowPage from "./pages/locations/show";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters">
        <Route index element={<CharactersPage />} />
        <Route path=":characterId" element={<CharacterShowPage />} />
      </Route>
      <Route path="/locations">
        <Route index element={<LocationsPage />} />
        <Route path=":locationId" element={<LocationShowPage />} />
      </Route>
    </Routes>
  );
}

export default App;
