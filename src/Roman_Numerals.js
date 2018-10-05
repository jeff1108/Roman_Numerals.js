const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
const TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']


function number_to_word(number){
  if (number < 10) {
    return units(number)
  } else {
    return tens(number)
  }
}


function units(number) {
  return UNITS[number - 1]
}

function tens(number) {
  var tens = Math.floor(number / 10)
  var str = ''
  str += TENS[tens - 1]
  if(!_isDivisible(number, 10)) {
    str += units(number % 10)
  }
  return str
}

function _isDivisible(number, divisor) {
  return num % divisor === 0
}
