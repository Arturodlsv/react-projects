import { useSearchParams } from 'react-router-dom'
import TruckPnG from '../assets/truck.png'
import { useMemo, useState } from 'react'
import { getItems } from '../api/fetching'
import { type IItems } from '../types/items.types'
import ItemCard from '../components/ItemCard'

const SearchView = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [items, setItems] = useState<IItems[]>()
  const searchTerm = searchParams.get('search')
  useMemo(() => {
    getItems(searchTerm ?? '').then((data) => {
      setItems(data)
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [searchTerm])
  return (
    <div className='w-full'>
      <header className='flex flex-col items-center justify-center gap-2 p-2'>
        <section className='flex gap-4 items-center justify-center'>
        <img src={TruckPnG} width={80} className="overflow-hidden" alt="" />
        <h1 className='pt-1 font-semibold text-2xl'>Shofu Online</h1>
        </section>
        <nav className='flex justify-center items-center w-full'>
          <input
            type="text"
            className="border-2 border-black w-full pl-2 text-base italic"
            value={searchTerm ?? ''}
            onChange={(e) => {
              setSearchParams({ search: e.target.value })
            }}
          />
        </nav>
      </header>
      <main className='w-full flex justify-center items-center'>
        <div className='flex w-full justify-center items-center gap-2 flex-col'>
          {items?.map((item) => (
            <ItemCard
              key={item.id}
              category={item.category}
              id={item.id}
              name={item.name}
              price={item.price}
              thumbnail={item.thumbnail}
              description={item.description}
              rating={item.rating}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default SearchView
