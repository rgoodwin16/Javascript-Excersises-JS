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
    //============= Word Search Reader ======================================//

    window.wordsearchReadText = function () {
        var reader;
        reader = new FileReader();
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


})();
