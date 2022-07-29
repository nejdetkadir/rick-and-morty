import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Character as CharacterType, ApiErrorResponse } from "./../../types";
import { getCharacter } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

const Show: React.FC = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const { characterId } = useParams();

  useEffect(() => {
    getCharacter(Number(characterId))
      .then((res: AxiosResponse<CharacterType>) => {
        setCharacter(res.data);
      })
      .catch((err: AxiosError<ApiErrorResponse>) => {
        alert(err.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [characterId]);

  return (
    <Layout isLoading={isLoading}>
      <h1 className="text-3xl font-bold underline">
        {character && JSON.stringify(character, null, 2)}
      </h1>
    </Layout>
  );
}

export default Show;
