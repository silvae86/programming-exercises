const powerOfN = function (number, n)
{
    const numberInBaseN = number.toString(n);
    const match = numberInBaseN.match(/^10*$/);
    if(match && match.length === 1 && match[0] === numberInBaseN)
        return true;
    else
        return false;
}

console.log(powerOfN(256,2));
