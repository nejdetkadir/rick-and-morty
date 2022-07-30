import { Location as LocationType } from "./../../types";
import { Link } from "react-router-dom";

interface Props {
  location: LocationType;
}

const Index: React.FC<Props> = ({ location }) => {
  return (
    <div className="w-full shadow-xl rounded-md bg-slate-100 hover:shadow-2xl h-full">
      <div className="px-4 py-2 text-center flex flex-col gap-2 m-3">
        <h1 className="sm:text-2xl md:text-xl font-bold truncate">{location.name}</h1>
        <Link to={`/locations/${location.id}`} className="p4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg p-2 mt-3">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Index;
