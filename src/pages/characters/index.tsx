import { useState, useEffect } from "react";
import { Character as CharacterType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getCharacters } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import Character from "./../../components/Character";
import List from "./../../components/List";
import Loader from "../../components/Loader";

const Index: React.FC = () => {
  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getCharacters(currentPage)
      .then((res: AxiosResponse<ApiResponse<CharacterType>>) => {
        setCharacters([...characters, ...res.data.results]);
        setTotalPages(res.data.info.pages);
      })
      .catch((res: AxiosError<ApiErrorResponse>) => {
        alert(res.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <Layout isLoading={isLoading}>
      <List currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}>
        {
          characters.map((character: CharacterType, index: number) => {
            return <Character key={index} character={character} />
          })
        }
      </List>
    </Layout>
  );
}

export default Index;
