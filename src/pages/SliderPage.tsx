import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

import { Section } from '../components'

const SliderPage = () => {
  return (
    <Section>
      <h1 className='text-4xl font-medium'>Slider Page</h1>
      <button className='rounded-full bg-white p-3 transition-all hover:bg-slate-200'>
        <ArrowLeftIcon className='h-6 w-6 mix-blend-exclusion' />
      </button>
      <button className='rounded-full bg-white p-3 transition-all hover:bg-slate-200'>
        <ArrowRightIcon className='h-6 w-6 mix-blend-exclusion' />
      </button>
    </Section>
  )
}

export default SliderPage
