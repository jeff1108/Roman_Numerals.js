const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
const TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
const HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']


function number_to_word(number){
  if (number < 10) {
    return units(number)
  } else if (number < 100) {
    return tens(number)
  } else if (number < 1000) {
    return hundreds(number)
  } else {
    return "M"
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

function hundreds(number) {
  var hundreds = Math.floor(number / 100)
  var str = ''
  str += HUNDREDS[hundreds - 1]
  if(!_isDivisible(number, 100)) {
    number % 100 > 9 ? str += tens(number % 100) : str += units(number % 100)
  }
  return str
}

function _isDivisible(number, divisor) {
  return number % divisor === 0
}
