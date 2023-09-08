const usersFetch = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100')
  const res = response.json()
  return await res
}

export { usersFetch }
