function solver (string1, string2) {
  let input1, input2
  [input1, input2] = [string1, string2].map(inputModify)
  if (input1[2] < input2[2]) {
    return daysBetween(input1, input2)
  }
  return daysBetween(input1, input2)
}

function inputModify (string) {
  return ([string.substr(0, 2), string.substr(2, 2), string.substr(4)]).map(Number)
}

console.log(solver('16041991', '12121991'))

function daysBetween (array1, array2) {
	 return [array1, array2]
}
