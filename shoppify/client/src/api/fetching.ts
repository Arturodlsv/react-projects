const getItems = async (term: string) => {
  const response = await fetch(
        `http://localhost:3000/api/products?q=${term}`
  )
  const res = response.json()
  return await res
}

export { getItems }
