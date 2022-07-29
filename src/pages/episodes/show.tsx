import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Episode as EpisodeType, ApiErrorResponse } from "./../../types";
import { getEpisode } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

const Show: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const { episodeId } = useParams();

  useEffect(() => {
    getEpisode(Number(episodeId))
      .then((res: AxiosResponse<EpisodeType>) => {
        setEpisodes(res.data);
      })
      .catch((err: AxiosError<ApiErrorResponse>) => {
        alert(err.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [episodeId]);

  return (
    <Layout isLoading={isLoading}>
      <h1 className="text-3xl font-bold underline">
        {episodes && JSON.stringify(episodes, null, 2)}
      </h1>
    </Layout>
  );
}

export default Show;
