import { Routes, Route } from "react-router-dom";
import CharactersPage from "./pages/characters";
import CharacterShowPage from "./pages/characters/show";
import LocationsPage from "./pages/locations";
import LocationShowPage from "./pages/locations/show";
import EpisodesPage from "./pages/episodes";
import EpisodeShowPage from "./pages/episodes/show";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/characters">
        <Route index element={<CharactersPage />} />
        <Route path=":characterId" element={<CharacterShowPage />} />
      </Route>
      <Route path="/locations">
        <Route index element={<LocationsPage />} />
        <Route path=":locationId" element={<LocationShowPage />} />
      </Route>
      <Route path="/episodes">
        <Route index element={<EpisodesPage />} />
        <Route path=":episodeId" element={<EpisodeShowPage />} />
      </Route>
    </Routes>
  );
}

export default App;
