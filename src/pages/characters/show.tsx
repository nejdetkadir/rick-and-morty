import { useParams } from 'react-router-dom';

const Show: React.FC = () => {
  const { characterId } = useParams();

  return (
    <h1 className="text-3xl font-bold underline">
      Characters show page
      <br />
      {characterId}
    </h1>
  );
}

export default Show;
