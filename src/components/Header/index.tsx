import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="flex justify-evenly gap-2 mt-4 text-center text-white font-bold">
      <Link to={'/characters'} className="bg-amber-500 p-3 flex-1 shadow rounded">CHARACTERS</Link>
      <Link to={'/episodes'} className="bg-green-500 p-3 flex-1 shadow rounded">EPISODES</Link>
      <Link to={'/locations'} className="bg-cyan-500 p-3 flex-1 shadow rounded">LOCATIONS</Link>
    </div>
  )
}

export default Index;
