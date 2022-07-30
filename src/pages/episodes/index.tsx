import { useState, useEffect } from "react";
import { Episode as EpisodeType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getEpisodes } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import Episode from "./../../components/Episode";
import List from "./../../components/List";

const Index: React.FC = () => {
  const [episodes, setEpisodes] = useState<Array<EpisodeType>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getEpisodes(currentPage)
      .then((res: AxiosResponse<ApiResponse<EpisodeType>>) => {
        setEpisodes([...episodes, ...res.data.results]);
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
          episodes.map((episode: EpisodeType, index: number) => {
            return <Episode key={index} episode={episode} />
          })
        }
      </List>
    </Layout>
  );
}

export default Index;
