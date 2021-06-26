function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword (options) {
  // Define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  if (options.excludeCharacters) {
    collection = collection.filter(
      (character) => !options.excludeCharacters.includes(character)
    )
  }

  // Return error
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  return password
}

module.exports = generatePassword
