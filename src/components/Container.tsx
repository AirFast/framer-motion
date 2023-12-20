type Props = {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }) => {
  return <main className='container mx-auto px-4'>{children}</main>
}
