/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function (s) {
    if (s.length === 0) {
        return true;
    }
    if (s.length === 1)
        return true;
    else {
        const first = s.charAt(0);
        const last = s.charAt(s.length - 1);

        if (first === last) {
            const center = s.substring(1).substring(0, s.length - 2);
            const centerIsPalindrome = isPalindrome(center);
            return centerIsPalindrome;
        } else
            return false;
    }
};

const expandForward = function (s, start, palindromeDict, palindromeMatrix) {
    for (let i = 0; start + i < s.length; i++) {
        let substring = s.substr(start, i);
        if (!palindromeDict[substring]) {
            if (isPalindrome(substring)) {
                palindromeDict[substring] = true;
            }
        }
    }
};

const expandBackwards = function (s, end, palindromeDict, palindromeMatrix) {
    for (let i = 0; i < end; i++) {
        let substring = s.substring(i, end + 1);
        if (!palindromeDict[substring]) {
            if (isPalindrome(substring)) {
                palindromeDict[substring] = true;
            }
        }
    }
};

const longestPalindromeSlow = function (s) {
    if (s.length <= 1) {
        return s;
    } else {
        const palindromeDict = {};
        for (let i = 0; i < s.length; i++) {
            expandForward(s, i, palindromeDict);
            expandBackwards(s, i, palindromeDict);
        }
        let allPalindromes = Object.keys(palindromeDict);
        if (allPalindromes.length >= 1) {
            allPalindromes = allPalindromes.sort(function (a, b) {
                return b.length - a.length;
            });

            return allPalindromes[0];
        } else
            return s;
    }
};

const {PerformanceObserver, performance} = require('perf_hooks');

const strings = ["jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx", "forgeeksskeegfor", "aabb", "aaaabbbb", "aab", "aa", "a", "abccba", "abc", ""];

var t0 = performance.now();
for (let i = 0; i < strings.length; i++) {
    console.log(`"${strings[i]}" longest palindrome is ${longestPalindromeSlow(strings[i])}`);
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
