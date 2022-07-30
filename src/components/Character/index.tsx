import { Character as CharacterType } from "./../../types";
import { Link } from "react-router-dom";

interface Props {
  character: CharacterType;
}

const Default: React.FC<Props> = ({ character }) => {
  return (
    <div className="w-full shadow-xl rounded-md bg-slate-100 hover:shadow-2xl">
      <img className="w-full" src={character.image} alt={character.name} />
      <div className="px-4 py-2 text-center flex flex-col gap-2 m-3">
        <h1 className="sm:text-2xl md:text-3xl font-bold truncate">{character.name}</h1>
        <Link to={`/characters/${character.id}`} className="p4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg p-2 mt-3">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Default;
