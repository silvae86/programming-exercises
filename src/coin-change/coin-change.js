/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var sort = function(array)
{
    return array.sort(function(a, b){
        return a < b;
    })
}

var expand = function (currentPath, coins, goalAmount)
{
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (currentPath.total + coin === goalAmount) {
            return {path: currentPath.path.concat([coin]), total: currentPath.total + coin, success: 1};
        } else if (currentPath.total + coin <= goalAmount) {
            return expand({ path: currentPath.path.concat([coin]), total: currentPath.total + coin }, coins, goalAmount);
        }
    }

    return null;
}

var coinChange = function(coins, amount) {
    coins = sort(coins);
    let shortestPath = expand({path: [], total: 0}, coins, amount);
    if(shortestPath === null)
    {
        return -1;
    }
    else
    {
        return shortestPath.path.length;
    }
};

console.log(coinChange([2], 3));
console.log(coinChange([2], 1));
console.log(coinChange([1, 2, 5, 10, 20, 59, 4, 6, 8, 12,324, 56, 92, 91, 198, 1092, 10, 128, 293, 291, 28, 11], 10000));
