var isPrime = function(number) {
	for (var i = 2; i < number; i++) {
		if ((number % i) == 0) {
			return false;
		}
	}
	return true;
};

var buildPrimeArray = function(upperLimit) {
	var returnList = [2];
	var i = 3;
	while (i < upperLimit) {
		if (isPrime(i)) {
			returnList.push(i);
		}
		i += 1;
	}
	return returnList;
};

var checkForPrimes = function() {
	var returnArray = [];
	var count = 0;
	var resultFound = false;
	var userNum = document.getElementById("userNumber").value;
	var result = "<p>The prime factorization of " + userNum + " is: ";
	var primeArray = buildPrimeArray(userNum);

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
	
	result += returnArray.toString() + "</p>";
	
	document.getElementById("results").innerHTML = result;
};
