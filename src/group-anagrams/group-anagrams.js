let sortString = function(string)
{
    let charArray = string.split("");

    const sortFn = function(a,b)
    {
        return a.localeCompare(b);
    };

    charArray = charArray.sort(sortFn);

    return charArray.join("");
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramDict = {};

    for (let i = 0; i < strs.length; i++) {
        const sortedString = sortString(strs[i]);
        if(!anagramDict[sortedString])
        {
            anagramDict[sortedString] = [];
        }

        anagramDict[sortedString].push(strs[i]);
    }

    const anagramsArray = [];
    const keys = Object.keys(anagramDict);

    for (let i = 0; i < keys.length; i++) {
        anagramsArray[i] = anagramDict[keys[i]];
    }

    return anagramsArray;
};

exports.groupAnagrams = groupAnagrams;

