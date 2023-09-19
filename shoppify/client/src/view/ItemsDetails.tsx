import { useMemo, useState } from 'react'
import { getItem } from '../api/fetching'
import { useParams } from 'react-router-dom'
import { type IItems } from '../types/items.types'

const ItemsDetails = () => {
  const { id } = useParams()
  const [item, setItem] = useState<IItems>()
  const getDetails = async (id: string) => {
    const res = await getItem(id)
    return res
  }
  void useMemo(async () => {
    await getDetails(id ?? '')
      .then((data) => {
        setItem(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])
  return (
    <div className="h-full flex flex-col gap-4 bg-white">
      <section className="h-2/5 overflow-hidden">
        <img
          src={item?.thumbnail}
          className="w-full h-full object-fit overflow-hidden"
          alt=""
        />
      </section>
      <section className="flex flex-col gap-3 px-4 grow-[6]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{item?.title}</h1>
          <span className="font-semibold text-lg">
            Rating:
            <span className="font-semibold">
              {item?.rating === 4 && '⭐⭐⭐⭐'}
              {item?.rating === 3 && '⭐⭐⭐'}
              {item?.rating === 2 && '⭐⭐'}
              {item?.rating === 1 && '⭐'}
            </span>
          </span>
        </div>
        <div className='bg-black bg-opacity-70 p-2 h-2/5'>
          <p className="text text-justify tracking-wide leading-8 text-white">{item?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <section>
            <span className='font-semibold'>Category: </span>
            <span className="italic">{item?.category}</span>
          </section>
          <section>
          <span className='font-semibold'>Price: </span>
          <span className='tracking-wide'>{item?.price}</span>
          </section>
        </div>
        <div className="flex justify-center items-center">
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Add to Cart</button>
        </div>
      </section>
    </div>
  )
}

export default ItemsDetails
