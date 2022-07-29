interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Default: React.FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
    </>
  )
}

export default Default;
