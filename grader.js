
let letterGrader = (num) => {

  let grade

  if (num === 100) {
    return 'A+'
  }

  if (num < 60) {
    return 'F'
  } else if (num < 70) {
    grade = 'D'
  } else if (num < 80) {
    grade = 'C'
  } else if (num < 90) {
    grade = 'B'
  } else if (num < 100) {
    grade = 'A'
  }

  if (num.toString()[1] > 7 && num.toString()[1] < 10) {
    return grade + '+'
  }

  if (num.toString()[1] >= 0 && num.toString()[1] < 3) {
    return grade + '-'
  }

  return grade
}

let average = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0)

  let ave = sum / arr.length
  return ave
}

let median = (arr) => {

  arr.sort()
  let index

  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length % 2 === 0) {
    index = arr.length / 2
    return (arr[index - 1] + arr[index]) / 2
  } else {
    index = Math.floor(arr.length / 2)
    return arr[index]
  }

}

let mode = (arr) => {

  let obj = {}
  let greatest = 0
  let modeArray = []

  arr.forEach((elem, index) => {

    if (obj[elem] === undefined) {
      obj[elem] = 1
    } else {

      obj[elem] ++

      if (greatest <= obj[elem]) {
        greatest = obj[elem]
      }
    }

  })

  for (let p in obj) {
    if (obj[p] === greatest) {
      modeArray.push(parseInt(p, 10))
    }
  }
  return modeArray.sort()
}

module.exports = {
  letterGrader: letterGrader,
  average: average,
  median: median,
  mode: mode
}
