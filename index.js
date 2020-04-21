theBeatlesPlay = (m, ins) => {
  var result = []
  for (let i = 0; i < m.length; i++) {
    result.push(`${m[i]} plays ${ins[i]}`)
  }

  return result
}

function johnLennonFacts(a) {
  var result = []

  let i = 0
  while (i < a.length) {
    result.push(a[i] + '!!!')
    i++
  }

  return result
}

function theBeatlesPlay(n) {
  var result = []

  do {
    result.push('I love the Beatles!')
    n--
  }while(n > 0)

  return result
}