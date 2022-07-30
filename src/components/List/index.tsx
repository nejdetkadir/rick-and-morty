interface Props {
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({ children }) => {
  return (
    <div className="my-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {children}
    </div>
  )
}

export default Index;
