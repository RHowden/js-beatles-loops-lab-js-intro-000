theBeatlesPlay = (m, ins) => {
  var result = []
  for (let i = 0; i < m.length; i++) {
    result.push(`${m[i]} plays ${ins[i]} `)
  }

  return result
}
