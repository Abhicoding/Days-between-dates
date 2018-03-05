function solver (string1, string2) {
  let input1, input2, countDays = 0
  //[input1, input2] = [string1, string2].map(inputModify)
  input1 = inputModify(string1)
  input2 = inputModify(string2)
  while (!((input1[0] === input2[0]) && (input1[1] === input2[1]) && (input1[2] === input2[2]))){
  	countDays++
  	input1 = incrementor(input1)
  }
  return countDays
}

function inputModify (string) {
  return ([string.substr(0, 2), string.substr(2, 2), string.substr(4)]).map(Number)
}

//console.log(daysBetween([16,04,1991], [17,12,1991]))

function incrementor(array) {
	if (array[1] === 12 && array[0] === 31){
		array = [0, 1, array[2]+1]
	}
	else if (array[0] === daysInMonth(array)){
		array = [0, array[1]+1, array[2]]		
	}
	array[0]++
	return array
}

function daysInMonth(array){
	if (array[1] === 2){
		return (isLeapYear(array)) ? 29 : 28
	} 
	if ([4, 6, 9, 11].includes(array[1])){
		return 30
	}
	return 31
}

function isLeapYear(array) {
	if(array[2]%400 === 0){
		return true
	}
	if(array[2]%100 === 0){
		return false
	}
	if(array[2]%4 === 0){
		return true
	}
	return false
}


//console.log(solver('25051996', '05032018'))
//console.log(incrementor([29, 2, 2000]))
/*function incrementMonth(array1, array2, count) {
	// body...
}

function daysInMonth(argument) {
	// body...
}*/