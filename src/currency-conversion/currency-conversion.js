// Currency exchange

const exchangeRates = [
    ['USD', 'EUR', 2.0],
    ['JPY', 'USD', 8.5],
    ['JPY', 'GBP', 1.5],
    ['XYZ', 'CLP', 10],
];

const getDict = function () {
    const exchangeRateDict = {};
    for (let i = 0; i < exchangeRates.length; i++) {
        let exchangeRate = exchangeRates[i];
        let firstCurr = exchangeRate[0];
        let secCurr = exchangeRate[1];
        let rate = exchangeRate[2];

        if (!(firstCurr in exchangeRateDict)) {
            exchangeRateDict[firstCurr] = {};
        }

        if (!(secCurr in exchangeRateDict)) {
            exchangeRateDict[secCurr] = {};
        }

        exchangeRateDict[firstCurr][secCurr] = rate;
        exchangeRateDict[secCurr][firstCurr] = 1 / rate;
    }

    return exchangeRateDict;
};

const exchangeRateDict = getDict(exchangeRates);

// consider the cost of each traversal as 1, because we we want
// to minimize the number of traversals only, since at the end we
// assume that there is no loss in the conversion itself.
// Hence, every traversal can have the
// same cost (makes it a sort of unweighted graph in practice).
let costOfTraversal = 1;

const findRateThroughPath = function (start, end) {
    const parents = {};
    const nextNodes = [];
    const explored = {};

    // initialize structures for Dijstra's algorithm,
    // every node starts out as infinite distance, except
    // the starting node
    let distances = {};
    for (let i = 0; i < Object.keys(exchangeRateDict).length; i++) {
        let currency = Object.keys(exchangeRateDict)[i];
        distances[currency] = Number.MAX_SAFE_INTEGER;

        // we also initialize the parents and explored verification
        // dictionaries
        parents[currency] = null;
        explored[currency] = false;
    }

    distances[start] = 0;
    nextNodes.push(start);

    while (nextNodes.length > 0) {
        const node = nextNodes.shift();

        // get currencies that can be converted from start currency
        // (adjacent nodes)
        let currentCost = distances[node];
        let minimalCostToContinue = Number.MAX_SAFE_INTEGER;
        let cheapestNextNode;

        for (let neighbour in exchangeRateDict[node]) {
            // if we found a cheaper cost than the last saved distance to this neighbour...
            if (currentCost + costOfTraversal < distances[neighbour]) {
                distances[neighbour] = currentCost + costOfTraversal;
                parents[neighbour] = node;

                if (distances[neighbour] < minimalCostToContinue) {
                    minimalCostToContinue = costOfTraversal;
                    cheapestNextNode = neighbour;
                }
            }

            if (!explored[neighbour]) {
                nextNodes.push(neighbour);
            }
        }

        explored[node] = true;
    }

    // if the distance remains infinity, we have no viable path from start to end currencies...
    if (distances[end] === Number.MAX_SAFE_INTEGER) {
        return null;
    } else {
        // lets loop the parents object from the end to the start and calculate the rate...
        let parent = parents[end];
        let rate = exchangeRateDict[end][parent];
        while (parents[parent] !== null) {
            let nextRate = exchangeRateDict[parent][parents[parent]];
            rate = rate * nextRate;
            parent = parents[parent];
        }

        return rate;
    }
};

const getRate = function (firstCurr, secCurr) {
    if (firstCurr in exchangeRateDict) {
        if (exchangeRateDict[firstCurr][secCurr] === undefined) {
            return findRateThroughPath(firstCurr, secCurr);
        } else
            return exchangeRateDict[firstCurr][secCurr];
    } else {
        return null;
    }
};

module.exports.getRate = getRate;
