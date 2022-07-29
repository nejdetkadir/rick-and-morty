import { useState, useEffect } from "react";
import { Character as CharacterType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getCharacters } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

const Index: React.FC = () => {
  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCharacters()
      .then((res: AxiosResponse<ApiResponse<CharacterType>>) => {
        setCharacters(res.data.results);
      })
      .catch((res: AxiosError<ApiErrorResponse>) => {
        alert(res.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <h1 className="text-3xl font-bold underline">
        <pre>
          {JSON.stringify(characters, null, 2)}
        </pre>
      </h1>
    </Layout>
  );
}

export default Index;
