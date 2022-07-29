import { useState, useEffect } from "react";
import { Episode as EpisodeType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getEpisodes } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

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
      <h1 className="text-3xl font-bold underline">
        <pre>
          {JSON.stringify(episodes, null, 2)}
        </pre>
      </h1>
    </Layout>
  );
}

export default Index;
