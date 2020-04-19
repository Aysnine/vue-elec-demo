const getWeight = ({ children }) => {
  return [children ? 1000 : 0].reduce((acc, val) => acc + val, 0)
}

export const dataSort = (data) => {
  return data.sort(
    (a, b) => getWeight(b) - getWeight(a) + ('' + a.name).localeCompare(b.name),
  )
}
