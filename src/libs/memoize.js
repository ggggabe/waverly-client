export const memoize = fn => {
  const cache = {}

  return (...args) => {
    const stringArgs = JSON.stringify(args)

    if (!cache[stringArgs]) {
      cache[stringArgs] = fn(...args)
    }

    return cache[stringArgs]
  }
}
