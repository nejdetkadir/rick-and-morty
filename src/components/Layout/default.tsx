import Loading from '../Loading';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Default: React.FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4">
      <Header />
      {children}
    </div>
  )
}

export default Default;
