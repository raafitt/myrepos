class Node {
    constructor(data) {
        this.data = data; // Данные узла
        this.next = null; // Указатель на следующий узел (изначально отсутствует)
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Начальный узел списка
    }

    // Метод добавления элемента в конец списка
    append(data) {
        const newNode = new Node(data); // Создание нового узла
        if (!this.head) {
            this.head = newNode; // Если список пуст, новый узел становится начальным
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Поиск последнего узла в списке
        }
        current.next = newNode; // Добавление нового узла в конец списка
    }
    removelast(){
        if (!this.head || !this.head.next) {
            this.head = null; // Если список пуст или содержит только один узел, удаляем его
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null; // Удаляем связь с последним узлом
    }


    // Метод вывода элементов списка
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next; // Переход к следующему узлу
        }
    }
}

// Пример использования односвязного списка
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.removelast()
linkedList.display()

// Создание узла списка
const node1 = { data: 1, next: null };
const node2 = { data: 2, next: null };
const node3 = { data: 3, next: null };

// Установка связей между узлами
node1.next = node2;
node2.next = node3;



