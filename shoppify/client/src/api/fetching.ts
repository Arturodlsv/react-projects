const getItems = async (term: string) => {
  const response = await fetch(
        `http://localhost:3000/products?q=${term}`
  )
  const res = await response.json()
  return res
}

export { getItems }
