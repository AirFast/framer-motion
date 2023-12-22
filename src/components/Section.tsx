type Props = {
  children: React.ReactNode
}
export const Section: React.FC<Props> = ({ children }) => {
  return <section className='flex flex-col gap-12'>{children}</section>
}
