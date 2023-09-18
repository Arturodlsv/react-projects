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
    await getDetails(id ?? '').then((data) => {
      setItem(data)
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [id])
  return (
    <div>
      <h1>{item?.title}</h1>
    </div>
  )
}

export default ItemsDetails
