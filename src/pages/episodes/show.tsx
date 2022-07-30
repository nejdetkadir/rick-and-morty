import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Episode as EpisodeType, ApiErrorResponse } from "./../../types";
import { getEpisode } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import Property from "./../../components/Property";
import { Link } from "react-router-dom";
import { timeAgoInWords } from "./../../utils"

const Show: React.FC = () => {
  const [episode, setEpisode] = useState<EpisodeType>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const { episodeId } = useParams();

  useEffect(() => {
    getEpisode(Number(episodeId))
      .then((res: AxiosResponse<EpisodeType>) => {
        setEpisode(res.data);
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
      <div className="container mt-5">
        <Link to={'/episodes'}>
          <button className="rounded bg-teal-500 hover:bg-teal-600 text-white p-1 px-2">Go Back</button>
        </Link>
        <h1 className="text-4xl text-center font-bold p-3">{episode?.name}</h1>
        {
          episode?.air_date &&
          <div className="flex justify-center p-2">
            <p><b>Air Date:</b> {timeAgoInWords(episode?.air_date)} ({episode?.air_date})</p>
          </div>
        }
        {
          episode?.episode &&
          <div className="flex justify-center">
            <p><b>Episode:</b> {episode?.episode}</p>
          </div>
        }
        <div className="flex justify-center mt-4 gap-5">
          <Property color="bg-indigo-500" text={`${episode?.characters.length} Characters`} customClass="px-5 py-2 shadow-lg" />
        </div>
      </div>
    </Layout>
  );
}

export default Show;
