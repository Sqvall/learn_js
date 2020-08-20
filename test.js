const bigInt = require('big-integer')

function getShortcodeFromTag (tag) {
  let id = bigInt(tag.split('_', 1)[0])
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
  let shortcode = ''

  while (id.greater(0)) {
    const division = id.divmod(64)
    id = division.quotient
    shortcode = `${alphabet.charAt(division.remainder)}${shortcode}`
  }

  return shortcode
}

console.log(getShortcodeFromTag('stub!'))
