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

  useEffect(() => {
    getEpisodes()
      .then((res: AxiosResponse<ApiResponse<EpisodeType>>) => {
        setEpisodes(res.data.results);
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
      <List>
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
