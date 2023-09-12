import { useState } from 'react'
import SearchInput from '../components/SearchInput'
import ImageBan from '../assets/bam.jpg'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <div className={ searchTerm === '' ? 'h-screen w-full flex justify-center items-center' : 'h-screen w-full'}>
      <header className="w-full pb-[240px] flex justify-center flex-col gap-4">
        <section className='overflow-hidden rounded-sm flex justify-center items-center'>
          <img src={ImageBan} className='w-3/5 shadow-md' alt="" />
        </section>
        <section>
          <h1 className="text-center text-3xl">Shofu Online</h1>
        </section>
        <nav>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </nav>
      </header>
    </div>
  )
}

export default Home
