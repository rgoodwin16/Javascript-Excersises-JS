//Longest Word 

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

    //============= Longest Word Reader =====================================//

    window.longestReadText = function () {
        
        var output = "";

        var filePath = document.getElementById('fileInput');
        console.log(filePath);
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

})();