
var isPrime = function(number) {
	for (i = 2; i < number; i++) {
		if ((number % i) == 0) {
			return false;
		}
	}
	return true;
};

var checkForPrimes = function() {
	var primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 72, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
	var returnArray = [];
	var count = 0;
	var resultFound = false;
	var userNum = document.getElementById("userNumber").value;

	while(!isPrime(userNum)) {
		while(count < primeArray.length && !resultFound) {
			if (userNum % primeArray[count] == 0) {
				returnArray.push(primeArray[count]);
				resultFound = true;
				userNum = userNum / primeArray[count];
			}
			count = count + 1;
		}
		count = 0;
		resultFound = false;
	}
	returnArray.push(userNum);
	document.write(returnArray);
};