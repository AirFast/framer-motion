import { Outlet } from 'react-router-dom'

import { Container } from './Container'
import { Header } from './Header'
import { Footer } from './Footer'

import { Page } from './types'

type Props = {
  pages: Page[]
}

export const Layout: React.FC<Props> = ({ pages }) => {
  return (
    <Container>
      <Header pages={pages} />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}
