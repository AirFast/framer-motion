import { lazy } from 'react'
import { MenuType } from './types'

export const pages = [
  {
    index: true,
    name: 'Home',
    href: '/',
    menuType: [MenuType.Main],
    Component: lazy(() => import('../pages/HomePage')),
  },
  {
    index: false,
    name: 'Slider',
    href: '/slider',
    menuType: [MenuType.Main],
    Component: lazy(() => import('../pages/SliderPage')),
  },
]
