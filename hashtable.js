class HashTable {
    constructor(size) {
        this.size = size;
        this.table = {}; // Объект для хранения данных
    }

    _hashFunction(key) {
        // Простая хеш-функция на основе остатка от деления
        return key.toString().length % this.size;
    }

    insert(key, value) {
        const index = this._hashFunction(key);
        if (!this.table[index]) {
            // Если в данном индексе еще нет данных, создаем массив
            this.table[index] = [];
        }
        this.table[index].push([key, value]); // Добавляем новую пару ключ-значение
    }

    search(key) {
        const index = this._hashFunction(key);
        if (this.table[index]) {
            // Если индекс существует, ищем значение по ключу
            for (const pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1]; // Возвращаем значение по ключу
                }
            }
        }
        return undefined; // Если ключ не найден, возвращаем undefined
    }

    delete(key) {
        const index = this._hashFunction(key);
        if (this.table[index]) {
            // Если индекс существует, ищем и удаляем пару ключ-значение
            this.table[index] = this.table[index].filter(pair => pair[0] !== key);
        }
    }
}

// Использование хеш-таблицы
const hashTable = new HashTable(10);
hashTable.insert('apple', 5);
hashTable.insert('banana', 7);
hashTable.insert('orange', 3);
hashTable.insert('rafit', 3);
hashTable.insert('rasit', 3);
hashTable.insert('philips',1)
console.log(hashTable.search('rasit'))

