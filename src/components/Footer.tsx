const year = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className='my-8'>
      <span>&copy; AirFast, {year}</span>
    </footer>
  )
}
