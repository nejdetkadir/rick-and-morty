import { CharacterStatusEnum, CharacterGenderEnum } from "./../types";
import moment from 'moment';

export const statusColor = (status: CharacterStatusEnum) => {
  if (status === CharacterStatusEnum.ALIVE) {
    return "bg-green-500";
  } else if (status === CharacterStatusEnum.DEAD) {
    return "bg-red-500";
  } else {
    return "bg-gray-500";
  }
}

export const genderColor = (gender: CharacterGenderEnum) => {
  if (gender === CharacterGenderEnum.FEMALE) {
    return "bg-rose-500"
  } else if (gender === CharacterGenderEnum.MALE) {
    return "bg-sky-500"
  } else {
    return "bg-slate-500"
  }
}

export const timeAgoInWords = (datetime: string) => {
  return moment(datetime).fromNow();
}
