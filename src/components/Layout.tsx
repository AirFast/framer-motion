import { Outlet } from 'react-router-dom'

import { Container } from './Container'
import { Header } from './Header'
import { Page } from './types'

type Props = {
  pages: Page[]
}

export const Layout: React.FC<Props> = ({ pages }) => {
  return (
    <Container>
      <Header pages={pages} />
      <Outlet />
    </Container>
  )
}
