import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Character as CharacterType } from "./../../types";
import { getCharacter } from "./../../api";
import { AxiosResponse } from "axios";

const Show: React.FC = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const { characterId } = useParams();

  useEffect(() => {
    getCharacter(Number(characterId))
      .then((res: AxiosResponse<CharacterType>) => {
        setCharacter(res.data);
      });
  }, [characterId]);

  return (
    <h1 className="text-3xl font-bold underline">
      Characters show page
      <br />
      {characterId}
      <br />
      {character && JSON.stringify(character, null, 2)}
    </h1>
  );
}

export default Show;
