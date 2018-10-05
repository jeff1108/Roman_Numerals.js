const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']


function romanNumerals(number){
  return UNITS[number - 1]
}


function number_to_word(number){
  if (number < 10) {
    return romanNumerals(number)
  }
}
