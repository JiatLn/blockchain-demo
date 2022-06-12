export const round = (num: number, precision = 2) => {
  return Math.round(num * 10 ** precision) / 10 ** precision
}

export function tf(str: string) {
  const re = /_(\w)/g
  str = str.replace(re, ($0, $1) => {
    return $1.toUpperCase()
  })
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
