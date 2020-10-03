//"Anagram":  An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase using all the original letters exactly once; for example, the letters from 'icon' can be rearranged into 'coin'.
//
//    Devise a function that takes one parameter W and returns all the anagrams for W from the file wl.txt.
//
//    anagrams("beat") should return:
//["beat", "beta", "bate"]


var words = [];
var anagrams = {};
var inputFile = 'wl.txt';

var compareTo = function(a, b)
{
    return a < b;
};

var getKey = function(word)
{
    var letters = word.split('');
    var sorted = letters.sort(compareTo);

    return sorted.join('');
};

function processFile(inputFile, word) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
        words.push(line);
    });

    rl.on('close', function (line) {
        //console.log(line);
        console.log('done reading file.');

        for(var i = 0; i < words.length;i++)
        {
            var key = getKey(words[i]);
            if(anagrams[key] == null)
            {
                anagrams[key] = [];
            }

            anagrams[key].push(words[i]);
        }

        console.log(anagrams[getKey(word)]);
    });
}

processFile(inputFile, 'apple');

