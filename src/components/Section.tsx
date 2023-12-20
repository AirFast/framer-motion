type Props = {
  children: React.ReactNode
}
export const Section: React.FC<Props> = ({ children }) => {
  return <section className='my-8 py-8'>{children}</section>
}
