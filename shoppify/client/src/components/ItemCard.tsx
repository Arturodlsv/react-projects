import React from 'react'
import { type IItemsCard } from '../types/items.types'
import { useNavigate } from 'react-router-dom'

const ItemCard: React.FC<IItemsCard> = ({
  category,
  id,
  name,
  price,
  thumbnail,
  description,
  rating
}) => {
  const Navigate = useNavigate()
  return (
    <div className="w-full items-center justify-center flex">
      <div className="w-3/5 flex flex-col gap-2 bg-slate-400 bg-opacity-60 p-4">
        <section className='w-full'>
          <img src={thumbnail} className='w-full' alt="" />
        </section>
        <section>
          <span className="font-bold text-xl">{name}</span>
        </section>
        <section>
          <span className="font-bold text-base">${price}</span>
        </section>
        <section>
          <span className="text-base">{description}</span>
        </section>
        <section>
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
      </div>
    </div>
  )
}

export default ItemCard
