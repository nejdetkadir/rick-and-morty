import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Character as CharacterType, ApiErrorResponse } from "./../../types";
import { getCharacter } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import { Link } from "react-router-dom";
import Properties from "../../components/Property/list";

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
      <div className="container mt-5">
        <Link to={'/characters'}>
          <button className="rounded bg-teal-500 hover:bg-teal-600 text-white p-1 px-2">Go Back</button>
        </Link>
        <div className="flex justify-center p-4">
          <img src={character?.image} alt={character?.name} />
        </div>
        <h1 className="text-4xl text-center font-bold p-3">{character?.name}</h1>
        {
          character?.location?.name &&
          <div className="flex justify-center p-2">
            <p><b>Location:</b> {character?.location?.name}</p>
          </div>
        }
        {
          character?.origin?.name &&
          <div className="flex justify-center">
            <p><b>Origin:</b> {character?.origin?.name}</p>
          </div>
        }
        <div className="flex justify-center mt-4 gap-5">
          <Properties character={character as CharacterType} customClass="px-5 py-2 shadow-lg" />
        </div>
      </div>
    </Layout>
  );
}

export default Show;
