const CustomError = require('../extensions/custom-error')

module.exports = function countCats (matrix) {
  let totalCats = 0
  matrix.forEach(subMatrix => {
    subMatrix.forEach(cat => {
      cat === '^^' ? (totalCats += 1) : null
    })
  })
  return totalCats
}
