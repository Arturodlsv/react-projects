interface usersData {
  cell: string
  name: {
    first: string
    last: string
  }
  location: {
    country: string
  }
  picture: {
    large: string
  }
}

export type { usersData }
