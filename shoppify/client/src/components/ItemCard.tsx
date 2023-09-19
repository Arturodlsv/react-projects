import React from 'react'
import { type IItemsCard } from '../types/items.types'
import { useNavigate } from 'react-router-dom'

const ItemCard: React.FC<IItemsCard> = ({
  category,
  id,
  title,
  price,
  thumbnail,
  description,
  rating
}) => {
  const Navigate = useNavigate()
  return (
    <div className="w-full items-center justify-center flex">
      <div className="w-3/5 flex flex-col gap-2 bg-slate-400 bg-opacity-60">
        <section className='w-full'>
          <img src={thumbnail} className='w-full' alt="" />
        </section>
        <main className='flex flex-col p-4 gap-2'>
        <section>
          <span className="font-bold text-xl">{title}</span>
        </section>
        <section>
          <span className="font-bold text-base">${price}</span>
        </section>
        <section>
          <span className='font-bold'>Category: </span>
          <span className="text-base">{category}</span>
        </section>
        <section>
        <span className="font-semibold text-lg">
            Rating:
            <span className="font-semibold">
              {rating === 4 && '⭐⭐⭐⭐'}
              {rating === 3 && '⭐⭐⭐'}
              {rating === 2 && '⭐⭐'}
              {rating === 1 && '⭐'}
            </span>
          </span>
        </section>
        <section>
          <span className="text-base">{description}</span>
        </section>
        <section className='flex justify-center items-center'>
          <button
          className='bg-blue-500 text-white font-bold py-1 px-4 rounded'
            onClick={() => {
              console.log(id)
              Navigate(`/items/${id}`)
            }}
          >
            See Details
          </button>
        </section>
        </main>
      </div>
    </div>
  )
}

export default ItemCard
