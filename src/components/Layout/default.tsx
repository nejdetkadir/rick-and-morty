interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Default: React.FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}

export default Default;
