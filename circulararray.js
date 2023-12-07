class CircularArray {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
        this.head = 0; // Индекс начала массива
        this.tail = 0; // Индекс конца массива
    }

    // Метод добавления элемента в конец массива
    enqueue(element) {
        if ((this.tail + 1) % this.size === this.head) {
            console.log("Циклический массив заполнен, элемент не может быть добавлен.");
        } else {
            this.array[this.tail] = element;
            this.tail = (this.tail + 1) % this.size;
            console.log(this.array)
        }
    }

    // Метод удаления элемента из начала массива
    dequeue() {
        if (this.head === this.tail) {
            console.log("Циклический массив пуст, элемент не может быть удален.");
        } else {
            const removed = this.array[this.head];
            this.head = (this.head + 1) % this.size;
            return removed;
        }
    }

    // Метод вывода элементов циклического массива
    display() {
        let index = this.head;
        while (index !== this.tail) {
            console.log(this.array[index]);
            index = (index + 1) % this.size;
        }
    }
}

// Пример использования циклического массива
const circularArray = new CircularArray(5);
circularArray.enqueue(1);
circularArray.enqueue(2);
circularArray.enqueue(3);
circularArray.enqueue(4);

console.log(17%6)



