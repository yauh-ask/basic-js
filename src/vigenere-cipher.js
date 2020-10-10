class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }

  encrypt (str, key) {
    if (!str || !key) {
      throw new Error()
    }

    const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    str = str.toUpperCase()
    key = key.toUpperCase()
    let currentIndex = 0
    let keyLength = key.length
    let encryptedLetter = ''
    for (let i in str) {
      if (alfabet.indexOf(str[i]) < 0) {
        encryptedLetter += str[i]
        continue
      }
      let currentLetterIndexInAlfabet = alfabet.indexOf(str[i])
      let keyLetterIndexInAlfabet = alfabet.indexOf(
        key[currentIndex % keyLength]
      )
      encryptedLetter =
        encryptedLetter +
        alfabet[(currentLetterIndexInAlfabet + keyLetterIndexInAlfabet) % 26]
      currentIndex += 1
    }
    if (!this.direct) {
      return encryptedLetter
        .split('')
        .reverse()
        .join('')
    }
    return encryptedLetter
  }

  decrypt (str, key) {
    if (!str || !key) {
      throw new Error()
    }
    const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    str = str.toUpperCase()
    key = key.toUpperCase()
    let currentIndex = 0
    let keyLength = key.length
    let decryptedLetter = ''
    for (let i in str) {
      if (alfabet.indexOf(str[i]) < 0) {
        decryptedLetter += str[i]
        continue
      }
      let currentLetterIndexInAlfabet = alfabet.indexOf(str[i])
      let keyLetterIndexInAlfabet = alfabet.indexOf(
        key[currentIndex % keyLength]
      )
      decryptedLetter =
        decryptedLetter +
        alfabet[
          (currentLetterIndexInAlfabet - keyLetterIndexInAlfabet + 26) % 26
        ]
      currentIndex += 1
    }

    if (!this.direct) {
      return decryptedLetter
        .split('')
        .reverse()
        .join('')
    }
    return decryptedLetter
  }
}

module.exports = VigenereCipheringMachine
