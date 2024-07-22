function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}


function isVowel(char) {
    if (char.length !== 1) {
        return false;
    }

    var vowels = 'aeiouAEIOU';
    return vowels.indexOf(char) !== -1;
}


function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}


function multiply(numbers) {
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}


function reverse(str) {
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


function findLongestWord(words) {
    var longestLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length;
        }
    }
    return longestLength;
}

function filterLongWords(words, i) {
    var longWords = [];
    for (var j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            longWords.push(words[j]);
        }
    }
    return longWords;
}

function jsFiddleModification () {
    console.log("Testing map, filter and reduce function - ");

    const numbers = [1,3,5,3,3];
    console.log("Initial array: " + numbers);

    const multipliedBy10 = numbers.map(x => x * 10);
    console.log('After multiply each element with 10 - ' + multipliedBy10);

    const allThrees = numbers.filter(x => x === 3);
    console.log('Array of all 3 - ' + allThrees);

    const product = numbers.reduce((acc, x) => acc * x, 1);
    console.log('Product of all element - ' + product);
}

function myFunctionTest(expected, functionToTest) {
    if (expected === functionToTest()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

// Test cases for max function
console.log("Expected output of max(20,10) is 20 and " +
    myFunctionTest(20, function() { return max(20, 10); }));
console.log("Expected output of max(0, 5) is 5 and " +
    myFunctionTest(5, function() { return max(0, 5); }));
console.log("Expected output of max(-1, -10) is -1 and " +
    myFunctionTest(-1, function() { return max(-1, -10); }));

// Test cases for maxOfThree function
console.log("Expected output of maxOfThree(5,10,15) is 15 and " +
    myFunctionTest(15, function() { return maxOfThree(5, 10, 15); }));
console.log("Expected output of maxOfThree(20, 10, 15) is 20 and " +
    myFunctionTest(20, function() { return maxOfThree(20, 10, 15); }));
console.log("Expected output of maxOfThree(1, 25, 3) is 25 and " +
    myFunctionTest(25, function() { return maxOfThree(1, 25, 3); }));

// Test cases for isVowel function
console.log("Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function() { return isVowel('a'); }));
console.log("Expected output of isVowel('b') is false and " +
    myFunctionTest(false, function() { return isVowel('b'); }));
console.log("Expected output of isVowel('E') is true and " +
    myFunctionTest(true, function() { return isVowel('E'); }));

// Test cases for sum function
console.log("Expected output of sum([1,2,3,4]) is 10 and " +
    myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.log("Expected output of sum([5, 5, 5, 5]) is 20 and " +
    myFunctionTest(20, function() { return sum([5, 5, 5, 5]); }));
console.log("Expected output of sum([-1, -2, -3, -4]) is -10 and " +
    myFunctionTest(-10, function() { return sum([-1, -2, -3, -4]); }));

// Test cases for multiply function
console.log("Expected output of multiply([1,2,3,4]) is 24 and " +
    myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.log("Expected output of multiply([2, 2, 2, 2]) is 16 and " +
    myFunctionTest(16, function() { return multiply([2, 2, 2, 2]); }));
console.log("Expected output of multiply([-1, 1, -1, 1]) is 1 and " +
    myFunctionTest(1, function() { return multiply([-1, 1, -1, 1]); }));

// Test cases for reverse function
console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " +
    myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));
console.log("Expected output of reverse('hello') is 'olleh' and " +
    myFunctionTest('olleh', function() { return reverse('hello'); }));
console.log("Expected output of reverse('abcd') is 'dcba' and " +
    myFunctionTest('dcba', function() { return reverse('abcd'); }));

// Test cases for findLongestWord function
console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " +
    myFunctionTest(6, function() { return findLongestWord(['apple', 'banana', 'cherry']); }));
console.log("Expected output of findLongestWord(['cat', 'elephant', 'dog']) is 8 and " +
    myFunctionTest(8, function() { return findLongestWord(['cat', 'elephant', 'dog']); }));
console.log("Expected output of findLongestWord(['a', 'ab', 'abc']) is 3 and " +
    myFunctionTest(3, function() { return findLongestWord(['a', 'ab', 'abc']); }));

// Test cases for filterLongWords function
console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and " +
    myFunctionTest(['banana', 'cherry'].toString(), function() { return filterLongWords(['apple', 'banana', 'cherry'], 5).toString(); }));
console.log("Expected output of filterLongWords(['cat', 'elephant', 'dog'], 3) is ['elephant'] and " +
    myFunctionTest(['elephant'].toString(), function() { return filterLongWords(['cat', 'elephant', 'dog'], 3).toString(); }));
console.log("Expected output of filterLongWords(['a', 'ab', 'abc'], 1) is ['abc'] and " +
    myFunctionTest(['abc'].toString(), function() { return filterLongWords(['a', 'ab', 'abc'], 1).toString(); }));

jsFiddleModification();