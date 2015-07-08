// Coder Foundry Javascript Examples | Ray Goodwin

//Max Of Five | Sum of Five | Product of Five

function maxOfFive() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;

    var max = Math.max(num1, num2, num3, num4, num5);

    var resultMax = document.getElementById('resultMax');
    resultMax.innerHTML = "The largest number is: " + max;

}

function sum(previousValue, currentValue) {
    return previousValue + Math.round(currentValue);
}

function multiply(previousValue, currentValue) {
    return previousValue * Math.round(currentValue);
}

function sumOfFive() {
    var numbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value,
    ];

    var sumResult = numbers.reduce(sum, 0);
    var sumHtml = document.getElementById('resultSum');
    sumHtml.innerHTML = "The Sum of the numbers is: " + sumResult;

}

function multiplyFive() {
    var numbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value,
    ];

    var multiplyResult = numbers.reduce(multiply, 1);
    var multiplyHtml = document.getElementById('resultMultiply');
    multiplyHtml.innerHTML = "The Product of the numbers is: " + multiplyResult;

}

//Factorials


function fact(num) {
    if (num < 0)
        return 'Undefined';
    var fact = 1;
    for (var i = num; i > 1; i--)
        fact *= i;
    return fact;
}

function factorial() {
    var factNum = parseFloat(document.getElementById('factNum').value);
    var factHtml = document.getElementById('resultFact');

    if (isNaN(factNum)) {
        factHtml.innerHTML = "Please enter a real number.";
    } else {
        var factResult = fact(factNum);
        factHtml.innerHTML = "The Factorial of " + factNum + " is:  " + factResult;
    }
           
}

//Palindromes

function palindrome() {
    var text = document.getElementById('textPalindrome').value;
    var inverse = text.split("").reverse().join("");

    if (inverse == text) {
        var palResult = text + " is a Palindrome.";
    } else {
        var palResult = text + " is NOT a Palindrome.";
    }

    var palHtml = document.getElementById('resultPal');
    palHtml.innerHTML = palResult;
}

//FizzBuzz

function fizzBuzz() {
    var fizzHtml = document.getElementById('resultFizz');

    for (i = 1; i <= 100; i++) {
        if ((i%3 == 0) && (i % 5== 0)) {
            fizzHtml.innerHTML += "FizzBuzz" + " ";
        } else if ((i%3 == 0)){
            fizzHtml.innerHTML += "Fizz" + " ";
        } else if ((i%5 == 0)){
            fizzHtml.innerHTML += "Buzz" + " ";
        } else {
            fizzHtml.innerHTML += i + " ";
        }
    }
}

//Perfect Numbers

function perfectChecker(n) {
    var temp = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            temp += i;
        }
    }
    if (temp === n) {
        return true;
        //alert(n + " is a Perfect Number");
    } else {
        return false;
        //alert(n + " is NOT a Perfect Number");
    }
}

function displayPerfect(num) {
    var displayHtml = document.getElementById('resultPerfect');

    for (j = num; j < 10000; j++) {
        if (perfectChecker(j)) {
            displayHtml.innerHTML += j + " is a Perfect Number" + "<br/>";
        }
    }
}

//Happy Numbers

function happyChecker(n) {
    var arr = [];
    var newNum = 0;
    //Ok split the number into a string then into an array
    var num = n.toString().split("");
    for (var i = 0; i < num.length; i++) {
        arr[i] = parseInt(num[i], 10);
    }
    //Ok square the numbers and add them to newNum
    for (var i = 0; i < arr.length; i++) {
        newNum += Math.pow(arr[i], 2);
    }
    //And here is a quick check to stop from hitting an endless loop
    if (newNum === 58 || newNum === 4 || newNum === 37) {
        return false;
    }

    if (newNum === 1) {
        return true;
    } else {
        return happyChecker(newNum);
    }
}

function disHappy(num) {
    var happy = document.getElementById('resultHappy');

    for (j = num; j < 20; j++) {
        if (happyChecker(j)) {
            happy.innerHTML += j + " is a Happy Number." + "<br/>";
        }
    }
}

//Armstrong Numbers

function armstrongChecker(n) {
    var arr = [];
    var newNum = 0;
    //Take n and split the digits into single numbers
    var num = n.toString().split("");
    for (var i = 0; i < num.length; i++) {
        arr[i] = parseInt(num[i], 10);
    }
    //Now cube the numbers and add them together
    for (var i = 0; i < arr.length; i++) {
        newNum += Math.pow(arr[i], 3);
    }
    //Here we check to see if the newNum matches the original num
    if (newNum === n) {
        return true;

    } else {
        return false;

    }

}

function disArmstrong(num) {
    var armstrong = document.getElementById('resultArmstrong');

    for (j = num; j < 1000; j++) {
        if (armstrongChecker(j)) {
            armstrong.innerHTML += j + " is an Armstrong Number." + "<br/>";
        }
    }
}

//Word Search | Highlighter

function findWord() {
    var userText = document.getElementById('userText').value;
    var userKeyWord = document.getElementById('userKeyWord').value;

    var array = userText.match(new RegExp(userKeyWord, 'gi'));

    if (array == null) {
        var userResult = userKeyWord + " does not appear in this text.";
    } else if (array.length == 1) {
        var userResult = userKeyWord + " appears " + array.length + " time.";
        userResult += "<br/>";
        userResult += "<br/>";
        //var userResult = userText.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
        userResult += userText.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
    } else {
        var userResult = userKeyWord + " appears " + array.length + " times.";
        userResult += "<br/>";
        userResult += "<br/>";
        userResult += userText.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
    }

    var searchResult = document.getElementById('resultWordSearch');
    searchResult.innerHTML = userResult;
}

//Longest Word | WordSearch | Word Filter

(function () {
    var reader;
    window.checkFileAPI = function () {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            reader = new FileReader();
            return true;
        } else {
            alert('The File APIs are not fully supported by your browser. Fallback required.');
            return false;
        }
    }

    //============= Open / Read The .txt file for each program ===============//


    //============= Longest Word Reader =====================================//

    window.longestReadText = function () {
        
        var output = "";

        var filePath = document.getElementById('longestFileInput');

        if (filePath.files && filePath.files[0]) {
            reader.onload = function (e) {
                output = e.target.result;
                var longest = longestWordChecker(output);
                displayLongestWord(longest)
            }; //end onload()
            reader.readAsText(filePath.files[0]);
        } //end if html5 filelist support
    }

    //============= Longest Word Checker & Display =========================//

    function longestWordChecker(txt) {
        var str = txt.split(" ");
        var longest = '';
        for (var i = 0; i < str.length; i++) {
            var current = str[i].replace(/[^\w]/gi, '');
            if (current.length > longest.length)
                longest = current;
        }
        return longest;
    }

    
    function displayLongestWord(word) {

        var longestResult = document.getElementById('resultLongest');
        longestResult.innerHTML = "The longest word in this file is: " + "<strong>" + word + "</strong>";

    }

    
    //============= Word Search Reader ======================================//

    window.wordsearchReadText = function () {

        var output = "";

        var filePath = document.getElementById('wordsearchFileInput');

        if (filePath.files && filePath.files[0]) {
            reader.onload = function (e) {
                output = e.target.result;
                var wordSearch = wordSearchChecker(output);
                displayWordSearch(wordSearch)
            }; //end onload()
            reader.readAsText(filePath.files[0]);
        } //end if html5 filelist support
    }
    
    //============= WordSearch Checker & Display ==========================//

    function wordSearchChecker(txt) {
        var userKeyWord = document.getElementById('userKeyWord').value;
        var wordSearch = '';
        var array = txt.match(new RegExp(userKeyWord, 'gi'));

        if (array == null) {
            //var userResult = userKeyWord + " does not appear in this text.";
            wordSearch = userKeyWord + " does not appear in this file.";

        } else if (array.length == 1) {
            wordSearch = userKeyWord + " appears " + array.length + " time.";
            wordSearch += "<br/>";
            wordSearch += "<br/>";
            //var userResult = userText.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
            wordSearch += txt.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
        } else {
            wordSearch = userKeyWord + " appears " + array.length + " times.";
            wordSearch += "<br/>";
            wordSearch += "<br/>";
            wordSearch += txt.replace(new RegExp(userKeyWord, 'gi'), "<strong class='word-highlight'>" + userKeyWord + "</strong>");
        }

        return wordSearch;
    }

    function displayWordSearch(word) {
        var searchResult = document.getElementById('resultWordSearch');
        searchResult.innerHTML = word;
    }

    
    //============  Word Filter Reader =====================================//

    window.wordFilterReadText = function () {

        var output = "";

        var filePath = document.getElementById('wordFilterFileInput');

        if (filePath.files && filePath.files[0]) {
            reader.onload = function (e) {
                output = e.target.result;
                var wordFilter = wordFilterChecker(output);
                displayWordFilter(wordFilter)
            }; //end onload()
            reader.readAsText(filePath.files[0]);
        } //end if html5 filelist support
    }


    //============== Word Filter Checker & Display =======================//

    function wordFilterChecker(txt) {
        var userNumber = parseFloat(document.getElementById('userNumberWordFilter').value);
        var textArray = txt.split(" ");

        var wordFilter = '';
        var selectedWord = '';
        var printedWords = {};

        for (i = 0; i < textArray.length; i++) {
            selectedWord = textArray[i].replace(/[^\w]/gi, '').toLowerCase();
            if (selectedWord.length > userNumber) {
                if (printedWords[selectedWord] == null) {
                    wordFilter += selectedWord + "<br/>";
                    printedWords[selectedWord] = true;
                }
            }

        }

            return wordFilter;

    }


    function displayWordFilter(word) {
        var filterResult = document.getElementById('filterResult');
        filterResult.innerHTML += word + "<br/>";
    }

})();




//Word Frequency

function wordFreq() {
    var userText = document.getElementById('userWordFrequency').value;
    var textArray = userText.split(" ");
    var frequencyResult = document.getElementById('resultWordFrequency');


    //Generate Keyword

    var selectedWord = "";

    for (i = 0; i < textArray.length; i++) {
        selectedWord = textArray[i];
        var freqArray = userText.match(new RegExp(selectedWord, 'gi'));
        frequencyResult.innerHTML += selectedWord + " appears " + freqArray.length + " times." + "<br/>";
    }




}

//Word Filter

function wordFilter() {
    var userText = document.getElementById('userTextWordFilter').value;
    var userNumber = parseFloat(document.getElementById('userNumberWordFilter').value);
    var textArray = userText.split(" ");

    var resultWordFilter = document.getElementById('resultWordFilter');

    var selectedWord = "";

    for (i = 0; i < textArray.length; i++) {
        selectedWord = textArray[i];
        //var freqArray = userText.match(new RegExp(selectedWord, 'gi'));
        if (selectedWord.length > userNumber) {
            resultWordFilter.innerHTML += selectedWord + "<br/>";
        }

    }


}
