type Props = {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='container mx-auto flex min-h-screen flex-col px-4'>
      {children}
    </div>
  )
}
