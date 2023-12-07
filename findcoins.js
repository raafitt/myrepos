let n=0
function findMinCoins(coins, targetAmount) {
    coins.sort((a, b) => b - a); // Сортировка монет по убыванию номинала
    let remainingAmount = targetAmount;
    const selectedCoins = {};

    for (let i = 0; i < coins.length; i++) {
        n+=1
        const currentCoin = coins[i];
        const count = Math.floor(remainingAmount / currentCoin);
        if (count > 0) {
            selectedCoins[currentCoin] = count; // Записываем количество монет данного номинала
            remainingAmount -= count * currentCoin; // Вычитаем из оставшейся суммы
        }
    }

    return selectedCoins;
}

const availableCoins = [50, 25, 10, 5, 2, 1]; // Доступные номиналы монет
const targetAmount = 68; // Целевая сумма для представления

const result = findMinCoins(availableCoins, targetAmount);
console.log(result); // Вывод наименьшего количества монет для представления целевой суммы
console.log(n)