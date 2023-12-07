function findMinCoins(coins, targetAmount) {
    const minCoins = new Array(targetAmount + 1).fill(Number.MAX_SAFE_INTEGER);
    minCoins[0] = 0;
    console.log(minCoins.length)

    for (let i = 1; i <= targetAmount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] >= i && minCoins[i - coins[j]] + 1 < minCoins[i]) {
                minCoins[i] = minCoins[i - coins[j]] + 1;
            }
        }
    }

    return minCoins[targetAmount] !== Number.MAX_SAFE_INTEGER ? minCoins[targetAmount] : -1;
}

const availableCoins = [10, 8, 6, 5, 2, 1];
const targetAmount = 16;

const result = findMinCoins(availableCoins, targetAmount);
console.log(result);
