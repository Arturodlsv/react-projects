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

  const calculateCategory = (data: IItems[]) => {
    const categories = ({
      smartphones: 0,
      laptops: 0,
      fragances: 0,
      skincare: 0,
      groceries: 0,
      homeDecoration: 0
    })
    data.forEach((item) => {
      if (item.category === 'smartphones') {
        categories.smartphones++
      } else if (item.category === 'laptops') {
        categories.laptops++
      } else if (item.category === 'fragances') {
        categories.fragances++
      } else if (item.category === 'skincare') {
        categories.skincare++
      } else if (item.category === 'groceries') {
        categories.groceries++
      } else if (item.category === 'home-decoration') {
        categories.homeDecoration++
      }
    })
    return categories
  }
  const hello = calculateCategory(items ?? [])
  console.log(hello)
  return (
    <div className='w-full flex flex-col justify-center gap-6'>
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
        <section className='overflow-hidden'>
        <ul className='flex justify-center items-center gap-3 w-full flex-wrap'>
          {hello?.smartphones > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Smartphones: <span className='font-semibold'>{hello?.smartphones}</span></li>
          )}
          {hello?.laptops > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Laptops: <span className='font-semibold'>{hello?.laptops}</span></li>
          )}
          {hello?.fragances > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Fragances: <span className='font-semibold'>{hello?.fragances}</span></li>
          )}
          {hello?.skincare > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Skincare: <span className='font-semibold'>{hello?.skincare}</span></li>
          )}
          {hello?.groceries > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Groceries: <span className='font-semibold'>{hello?.groceries}</span></li>
          )}
          {hello?.homeDecoration > 0 && (
            <li className='bg-green-200 p-2 rounded-md shadow-sm italic text-sm'>Home Decoration: <span className='font-semibold'>{hello?.homeDecoration}</span></li>
          )}
        </ul>
        </section>
      </header>
      <main className='w-full flex justify-center items-center'>
        <div className='flex w-full justify-center items-center gap-8 flex-col'>
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
