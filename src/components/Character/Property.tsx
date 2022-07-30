interface Props {
  color: string;
  text: string;
}

const Propert: React.FC<Props> = ({ color, text }) => {
  return <span className={`${color} text-sm text-white font-bold shadow py-1 px-1 rounded-full`}>{ text }</span>
}

export default Propert;
