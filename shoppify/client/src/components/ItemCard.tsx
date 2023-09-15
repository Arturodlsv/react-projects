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
      <div className=" w-3/5">
        <section>
          <img src={thumbnail} alt="" />
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
