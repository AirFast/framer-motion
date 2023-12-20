import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Page } from './types'

type Props = {
  pages: Page[]
}

export const Header: React.FC<Props> = ({ pages }) => {
  const [active, setActive] = useState(pages[0].name)

  return (
    <header className='my-8'>
      <nav className='text-xl'>
        <ul className='flex flex-wrap'>
          {pages.map(({ name, href }) => (
            <li key={name}>
              <Link to={href}>
                <button
                  className='relative px-5 pb-2 pt-1.5 duration-300 hover:text-slate-300'
                  onClick={() => setActive(name)}
                >
                  <span className='relative z-10 mix-blend-exclusion'>
                    {name}
                  </span>
                  {active === name && (
                    <motion.div
                      layoutId='active-item'
                      className='absolute inset-0 bg-white'
                      style={{
                        borderRadius: 9999,
                      }}
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
