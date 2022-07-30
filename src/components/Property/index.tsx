interface Props {
  color: string;
  text: string;
  customClass?: string;
}

const Propert: React.FC<Props> = ({ color, text, customClass }) => {
  return <span className={`${color} text-sm text-white font-bold shadow py-1 px-1 rounded-full ${customClass}`}>{ text }</span>
}

export default Propert;
