import { useState } from 'react'
import SearchInput from '../components/SearchInput'
import TruckPnG from '../assets/truck.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <header className="w-full pb-[240px] flex justify-center flex-col gap-4 overflow-hidden">
        <section className="overflow-hidden flex justify-center items-center">
          <img src={TruckPnG} width={150} className="overflow-hidden" alt="" />
        </section>
        <section>
          <h1 className="text-center text-3xl">Shofu Online</h1>
        </section>
        <nav>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </nav>
        <section className="flex justify-center items-center">
          <button className="bg-blue-500 active:bg-blue-800 duration-200 text-white font-bold py-2 px-4 rounded" onClick={() => { Navigate('/search') }}>
            Search
          </button>
        </section>
      </header>
    </div>
  )
}

export default Home
