const CustomError = require('../extensions/custom-error')

module.exports = function transform (arr) {
  if (!Array.isArray(arr)) throw Error('Not an array!')
  if (arr.length < 1) return arr

  let transformedArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1] != undefined) transformedArray.push(arr[i + 1])
      continue
    }

    if (arr[i] === '--double-prev') {
      if (arr[i - 1] != undefined && arr[i - 2] != '--discard-next')
        transformedArray.push(arr[i - 1])
      continue
    }

    if (arr[i] === '--discard-next') {
      i++
      continue
    }

    if (arr[i] === '--discard-prev') continue

    transformedArray.push(arr[i])

    if (arr[i + 1] === '--discard-prev') {
      transformedArray.pop()
      continue
    }
  }

  return transformedArray
}
