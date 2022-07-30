import Loader from "../../components/Loader";

interface Props {
  children: React.ReactNode;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Index: React.FC<Props> = ({ children, currentPage, setCurrentPage, totalPages }) => {
  return (
    <div>
      <div className="my-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {children}
      </div>
      <Loader currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default Index;
