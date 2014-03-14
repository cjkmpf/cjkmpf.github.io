var Stack = function() {
	var stackList = [];

	this.stackPush = function(item) {
		stackList.push(item);
		return;
	}

	this.stackPop = function(item) {
		return stackList.pop();
	}

	this.peek = function() {
		return stackList[stackList.length - 1];
	}

	this.isEmpty = function() {
		if (stackList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return stackList.length;
	}

	this.clone = function() {
		var newList = stackList.slice(0);
		var newStack = new Stack();

		for (var i = 0; i < newList.length; i++) {
			newStack.push(newList[i]);
		}

		return newStack;
	}

	this.show = function() {
		return stackList;
	}
};

var Queue = function() {
	var queueList = [];

	this.enqueue = function(item) {
		queueList.push(item);
		return;
	}

	this.dequeue = function() {
		var removed = queueList.splice(0,1);
		return(removed[0]);
	}

	this.isEmpty = function() {
		if (queueList.length == 0) {
			return true;
		} else {
			return false;
		}
	}

	this.size = function() {
		return queueList.length;
	}
};

var Set = function() {
	var setList = [];

	this.addToSet = function(item) {
		setList.push(item);
		return;
	}

	this.checkSet = function(item) {
		var foundItem = false;

		for (var i = 0; i < this.setList.length; i++) {
			if (setList[i] == item) {
				foundItem = true;
			}
		}
		return foundItem;
	}
};

var getOneDifferents = function(word, wList) {
	console.log(word);
	console.log(wList);
	var oneDifferents = [];

	for (var i = 0; i < wList.length; i++) {
		var sameCh = 0;
		for(var j = 0; j < wList[i].length; j++) {
			if (wList[i] == word[j]) {
				sameCh += 1;
			}
		}		
		if (sameCh == word.length - 1) {
			oneDifferents.append(wList[i]);
		}
	}
	console.log(oneDifferents);
	return oneDifferents;
};

var main = function() {

	var beginWord = document.getElementById("userBeginWord").value;
	var endWord = document.getElementById("userEndWord").value;
	var wordLength = document.getElementById("lenChoice");
	var wordLenVal = wordLength.options[wordLength.selectedIndex].value;
	
	console.log(beginWord);
	console.log(endWord);
	console.log(wordLenVal);

	if (wordLenVal == 3) {
		var useList = threeLetterWords;
	} else if (wordLenVal == 4) {
		var useList = fourLetterWords;
	} else {
		var useList = fiveLetterWords;
	}

	var queue = new Queue();
	var stack = new Stack();
	stack.stackPush(beginWord);
	queue.enqueue(stack);
	usedWords = new Set();
	usedWords.addToSet(beginWord);

	var done = false;
	var found = false;

	while (!done) {
		var currentStack = queue.dequeue();
		var topWord = currentStack.peek();
		var nextWords = getOneDifferents(topWord, useList)

		for (var i = 0; i < nextWords.length; i++) {
			var nextInUsed = false;
			
			for (var j = 0; j < usedWords.length; j++) {
				if (nextWords[i] == usedWords[j]) {
					nextInUsed = true;
				}
			}

			if (!nextInUsed) {
				usedWords.addToSet(nextWords[i]);
				var newStack = currentStack.clone();
				newStack.stackPush(nextWords[i]);

				if (nextWords[i] == endWord) {
					done = true;
					found = true;
					var finalList = newStack.show();
				}

				queue.enqueue(newStack);
			}		
		}
	
		if (queue.size() == 0) {
			done = true;
			found = false;
		}
	}

	if (!found) {
		alert("No matches could be found")
	} else {
		var printList = finalList.reverse();
		alert(printList);
	}
	return;
}
