//Devise a function that takes an input 'n' (integer) and returns a string that is the
//decimal representation of the number grouped by commas after every 3 digits.  Do not
//solve the task using a built-in formatting function that can accomplish the whole
//task on its own.
//
//    Assume: 0 <= n < 1000000000
//
//1 -> "1"
//10 -> "10"
//100 -> "100"
//1000 -> "1,000"
//10000 -> "10,000"
//100000 -> "100,000"
//1000000 -> "1,000,000"
//35235235 -> "35,235,235"

var splitEveryThree = function(number)
{
    var string = number.toString();
    var sections = [];

    var end = string.length;
    var start = string.length - 3;

    while(start >= 0)
    {
        sections.push(string.substring(start, end));
        end -=3;
        start -=3;
    }

    if(end > 0)
    {
        sections.push(string.substring(0,end));
    }

    return sections.reverse();
}

var insertCommas = function(n)
{
    if(n < 1000)
    {
        return n.toString();
    }
    else
    {
        var sections = splitEveryThree(n);
        return sections.join(',');
    }
}

console.log(insertCommas(0));