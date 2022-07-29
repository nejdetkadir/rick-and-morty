import { useState, useEffect } from "react";
import { Character as CharacterType, ApiResponse } from "./../../types";
import { getCharacters } from "./../../api";
import { AxiosResponse } from "axios";

const Index: React.FC = () => {
  const [characters, setCharacters] = useState<Array<CharacterType>>([]);

  useEffect(() => {
    getCharacters()
      .then((res: AxiosResponse<ApiResponse<CharacterType>>) => {
        setCharacters(res.data.results);
      });
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      <pre>
        {JSON.stringify(characters, null, 2)}
      </pre>
    </h1>
  );
}

export default Index;
