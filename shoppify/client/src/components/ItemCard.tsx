import React from 'react'
import { type IItemsCard } from '../types/items.types'

const ItemCard: React.FC<IItemsCard> = ({ category, id, name, price, thumbnail, description, rating }) => {
  return (
    <div className='w-full items-center justify-center flex'>
        <div className=' w-3/5'>
            <section>
                <img src={thumbnail} alt="" />
            </section>
            <section>
                <span className='font-bold text-xl'>{name}</span>
            </section>
            <section>
                <span className='font-bold text-base'>${price}</span>
            </section>
            <section>
                <span className='text-base'>{description}</span>
            </section>
        </div>
    </div>
  )
}

export default ItemCard
