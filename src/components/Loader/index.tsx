interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Index: React.FC<Props> = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <div className="my-10 flex justify-center">
    {
        currentPage < totalPages &&
        <button className="bg-indigo-500 p-3 rounded-lg text-white font-bold shadow" onClick={() => { setCurrentPage(currentPage + 1) }}>Load More</button>
      }
    </div>
  )
}

export default Index;
