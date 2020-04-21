theBeatlesPlay = (m, ins) => {
  var result = []
  for (let i = 0; i < m.length; i++) {
    result.push(`${m[i]} plays ${ins[i]}`)
  }

  return result
}

johnLennonFacts = (a) => {
  var result = []

  let i = 0
  while (i < a.length) {
    result.push(a[i] + '!!!')
  }

  return result
}
