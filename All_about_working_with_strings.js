//Все о работе со строками

let str = 'Hello World'; // Строка для примера.
let str2 = 'Hello Dima !'; // Вторая строка для примера.

//Свойиства
console.log(str.length); // Возвращает длину строки.
console.log(str.prototype); // Возвращает протип строки.

//Методы
console.log(str.charAt(0)); // Возвращает символ по указанному индексу.
console.log(str.charCodeAt(0)); // Возвращает Unicode-код символа по указанному индексу.
console.log(str.concat(str2)); // Объединяет несколько строк в одну.
console.log(str.endsWith(str2)); // Проверяет, заканчивается ли строка на указанную подстроку.
console.log(str.includes(str2)); // Проверяет, содержит ли строка указанную подстроку.
console.log(str.indexOf(str2)); // Возвращает индекс первого вхождения указанной подстроки.
console.log(str.lastIndexOf(str2)); // Возвращает индекс последнего вхождения указанной подстроки.
console.log(str.localeCompare(str2)); // Сравнивает две строки с учетом локальных настроек.
console.log(str.match(/ab+c/)); // Выполняет поиск по регулярному выражению и возвращает массив совпадений.
console.log(str.padEnd(45, '+')); // Добавляет символы к концу строки, пока ее длина не достигнет указанной.
console.log(str.padStart(45, '+')); // Добавляет символы к началу строки, пока ее длина не достигнет указанной.
console.log(str.repeat(3)); // Повторяет строку указанное количество раз.
console.log(str.replace(/ab+c/, str2)); // Заменяет совпадения с регулярным выражением на указанную строку.
console.log(str.search(/ab+c/)); // Выполняет поиск по регулярному выражению и возвращает индекс первого совпадения.
console.log(str.slice(2, 5)); //  Возвращает подстроку, начиная с указанного индекса и заканчивая указанным индексом.
console.log(str.split(' ')); //  Разбивает строку на массив подстрок, используя указанный разделитель.
console.log(str.startsWith(str2)); //  Проверяет, начинается ли строка с указанной подстроки.
console.log(str.substring(2, 3)); //  Возвращает подстроку, начиная с указанного индекса и заканчивая указанным индексом.
console.log(str.toLocaleLowerCase()); //  Преобразует строку в нижний регистр с учетом локальных настроек.
console.log(str.toLocaleUpperCase()); //  Преобразует строку в верхний регистр с учетом локальных настроек.
console.log(str.toLowerCase()); //  Преобразует строку в нижний регистр.
console.log(str.toUpperCase()); //  Преобразует строку в верхний регистр.
console.log(str.trim()); //  Удаляет пробельные символы с начала и конца строки.