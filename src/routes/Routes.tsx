import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from '../components'
import { pages } from '../constant'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout pages={pages} />}>
        {pages.map(({ index, name, href, Component }) => (
          <Route
            index={index}
            key={name}
            path={href}
            element={
              <Suspense fallback={<div />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  )
}
