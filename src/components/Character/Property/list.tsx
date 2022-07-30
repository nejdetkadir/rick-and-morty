import { statusColor, genderColor } from "./../../../utils"
import Property from "./index";
import {Character as CharacterType } from "./../../../types";

interface Props {
  character: CharacterType;
  customClass?: string;
}

const List: React.FC<Props> = ({ character, customClass }) => {
  return (
    <>
      <Property color={statusColor(character.status)} text={character.status} customClass={customClass} />
      <Property color={genderColor(character.gender)} text={character.gender} customClass={customClass} />
      <Property color="bg-indigo-500" text={`${character.episode.length} Ep.`} customClass={customClass} />
    </>
  )
}

export default List;
