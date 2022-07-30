import {
  Character as CharacterType,
  CharacterStatusEnum,
  CharacterGenderEnum
} from "./../../types";
import Property from "./Property";
import { Link } from "react-router-dom";

interface Props {
  character: CharacterType;
}

const Default: React.FC<Props> = ({ character }) => {

  const statusColor = (status: CharacterStatusEnum) => {
    if (status === CharacterStatusEnum.ALIVE) {
      return "bg-green-500";
    } else if (status === CharacterStatusEnum.DEAD) {
      return "bg-red-500";
    } else {
      return "bg-gray-500";
    }
  }

  const genderColor = (gender: CharacterGenderEnum) => {
    if (gender === CharacterGenderEnum.FEMALE) {
      return "bg-rose-500"
    } else if (gender === CharacterGenderEnum.MALE) {
      return "bg-sky-500"
    } else {
      return "bg-slate-500"
    }
  }

  return (
    <div className="w-full shadow-xl rounded-md bg-slate-100">
      <img className="w-full" src={character.image} alt={character.name} />
      <div className="px-4 py-2 text-center flex flex-col gap-2 m-3">
        <h1 className="sm:text-2xl md:text-3xl font-bold truncate">{character.name}</h1>
        <div className="flex justify-between mt-2">
          <Property color={statusColor(character.status)} text={character.status} />
          <Property color={genderColor(character.gender)} text={character.gender} />
          <Property color="bg-indigo-500" text={`${character.episode.length} Ep.`} />
        </div>
        <Link to={`/characters/${character.id}`} className="p4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg p-2 mt-3">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Default;
