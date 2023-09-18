import React, { useMemo, useState } from 'react'
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
    <div>
      <div>
        <section>
          <img src={item?.thumbnail} alt="" />
        </section>
        <section className="flex flex-col gap-2 px-4">
          <span>{item?.title}</span>
          <span className='text text-justify'>{item?.description}</span>
          <span>{item?.price}</span>
          <span>{item?.rating}</span>
          <span>{item?.category}</span>
        </section>
      </div>
    </div>
  )
}

export default ItemsDetails
