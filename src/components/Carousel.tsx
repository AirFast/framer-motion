import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { Section } from '.'

const photos = [
  'https://images.pexels.com/photos/947448/pexels-photo-947448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3291244/pexels-photo-3291244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2320691/pexels-photo-2320691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1552152/pexels-photo-1552152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1104917/pexels-photo-1104917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1459514/pexels-photo-1459514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2858264/pexels-photo-2858264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/12150547/pexels-photo-12150547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3109758/pexels-photo-3109758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5956613/pexels-photo-5956613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14213612/pexels-photo-14213612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7899773/pexels-photo-7899773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

export const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (!carousel.current) return
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Section>
      <h1 className='text-4xl font-medium'>Carousel</h1>
      <motion.div
        ref={carousel}
        className='cursor-grab overflow-hidden'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inline-flex gap-20'
        >
          {photos.map((photo) => (
            <div key={photo} className='h-[720px] min-w-[480px]'>
              <img
                src={photo}
                className='pointer-events-none h-full w-full max-w-none rounded-2xl object-cover'
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
