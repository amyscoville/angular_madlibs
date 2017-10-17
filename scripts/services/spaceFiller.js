(function(){
    angular
    .module('MadLibs')
    .factory('SpaceFiller', spaceFiller);       
       
    function spaceFiller(DefaultWords){
        var service = {
            getFinalWords: getFinalWords
        };

        return service;

        function getFinalWords(userWords) {
            return {
                verbs: getWordsArr(userWords.verbs, 'verbs'),
                nouns: getWordsArr(userWords.nouns, 'nouns'),
                adjectives: getWordsArr(userWords.adjectives, 'adjectives'),
                adverbs: getWordsArr(userWords.adverbs, 'adverbs')
            }
        }

        //methods and functions
        function getWordsArr(str, wordType) {
            if (str[str.length-1] === ',') {
                str = str.slice(0, -1);
            }
            var arr = str.split(',');
            if (arr.length < 4) { 
                return getRandWords(arr, wordType);
            } else {
                return arr;
            }
        }

        function getRandIndex(arrLength) {
            return Math.round(Math.random() * (arrLength -1));
        }

        function getRandWords(arr, wordType) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = DefaultWords[wordType][getRandIndex(DefaultWords[wordType].length)]; 
            }
            for (var i = 0; i < num; i++) {
                var index = getRandIndex(DefaultWords[wordType].length);
                arr.push(DefaultWords[wordType][index]);
            }
            return arr;
        }
    }
})();








    