const expand = function(s, b, e)
{
    let B = b;
    let E = e;

    let left = s.charAt(B);
    let right = s.charAt(E);

    while(left === right)
    {
        if(B >= 0 && E < s.length)
        {
            B--;
            E++;
            left = s.charAt(B);
            right = s.charAt(E);
        }
        else
            break;
    }

    const largestPalindromeAtS = s.substring(B + 1, E);
    return largestPalindromeAtS;
};

const longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    } else {
        let longest = "";
        for (let i = 0; i < s.length; i++) {
            const possiblePalindrome1 = expand(s, i, i);
            const possiblePalindrome2 = expand(s, i, i+1);

            if(possiblePalindrome1.length > longest.length)
            {
                longest = possiblePalindrome1;
            }
            if(possiblePalindrome2.length > longest.length)
            {
                longest = possiblePalindrome2;
            }
        }
        return longest;
    }
};

const {performance} = require('perf_hooks');

const strings = ["aa",
    "forgeeksskeegfor",
    "abba",
    "jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx",
    "forgeeksskeegfor",
    "aabb",
    "aaaabbbb",
    "aab",
    "a",
    "abccba",
    "abc",
    ""];


var t0 = performance.now();
for (let i = 0; i < strings.length; i++) {
    console.log(`"${strings[i]}" longest palindrome is ${longestPalindrome(strings[i])}`);
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
