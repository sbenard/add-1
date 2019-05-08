export const fillData = (rowsNumber = 4) => {
  const result = new Array(rowsNumber)
  result.fill('')
  return result.map(row => {
    for (let index = 0; index < 4; index++) {
      row += (Math.random() * 10) | 0
    }
    return row
  })
}

export const increment = value =>
  value &&
  String(value)
    .split('')
    .map(number => (+number === 9 ? 0 : +number + 1))
    .join('')
