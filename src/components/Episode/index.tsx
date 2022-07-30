import { Episode as EpisodeType } from "./../../types";
import { Link } from "react-router-dom";

interface Props {
  episode: EpisodeType;
}

const Index: React.FC<Props> = ({ episode }) => {
  return (
    <div className="w-full shadow-xl rounded-md bg-slate-100 hover:shadow-2xl h-full">
      <div className="px-4 py-2 text-center flex flex-col gap-2 m-3">
        <h1 className="sm:text-2xl md:text-xl font-bold truncate">{episode.name}</h1>
        <Link to={`/episodes/${episode.id}`} className="p4 bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 mt-3">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Index;
