export const variables = {
  title: 'Переменные',
  sections: [
    {
      content: [
        {
          text:
            '<p>JavaScript-приложению обычно нужно работать с информацией. Например:</p><ol>\n' +
            '<li>Интернет-магазин – информация может включать продаваемые товары и корзину покупок.</li>\n' +
            '<li>Чат – информация может включать пользователей, сообщения и многое другое.</li>\n' +
            '</ol><p>Переменные используются для хранения этой информации.</p>',
        },
      ],
    },
    {
      title: 'Переменная',
      content: [
        {
          text:
            '<p><a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)">Переменная</a> – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.</p><p>Для создания переменной в JavaScript используйте ключевое слово <code>let</code>.</p><p>Приведённая ниже инструкция создаёт (другими словами: <em>объявляет</em> или <em>определяет</em>) переменную с именем «message»:</p>',
        },
        {
          lang: 'javascript',
          text: 'let message;',
        },
        {
          text:
            '<p>Теперь можно поместить в неё данные, используя оператор присваивания <code>=</code>:</p>',
        },
        {
          lang: 'javascript',
          text:
            'let message;\n' + '\n' + "message = 'Hello'; // сохранить строку",
        },
        {
          text:
            '<p>Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:</p>',
        },
        {
          lang: 'javascript',
          text:
            'let message;\n' +
            "message = 'Hello!';\n" +
            '\n' +
            'alert(message); // показывает содержимое переменной',
        },
        {
          text:
            '<p>Для краткости можно совместить объявление переменной и запись данных в одну строку:</p>',
        },
        {
          lang: 'javascript',
          text:
            "let message = 'Hello!'; // определяем переменную и присваиваем ей значение\n" +
            '\n' +
            'alert(message); // Hello!',
        },
        {
          text:
            '<p>Мы также можем объявить несколько переменных в одной строке:</p>',
        },
        {
          lang: 'javascript',
          text: "let user = 'John', age = 25, message = 'Hello';",
        },
        {
          text:
            '<p>Такой способ может показаться короче, но мы не рекомендуем его.\n' +
            'Для лучшей читаемости объявляйте каждую переменную на новой строке.</p><p>Многострочный вариант немного длиннее, но легче для чтения:</p>',
        },
        {
          lang: 'javascript',
          text:
            "let user = 'John';\n" +
            'let age = 25;\n' +
            "let message = 'Hello';",
        },
        {
          text:
            '<p>Некоторые люди также определяют несколько переменных в таком вот многострочном стиле:</p>',
        },
        {
          lang: 'javascript',
          text:
            "let user = 'John',\n" + '  age = 25,\n' + "  message = 'Hello';",
        },
        {
          text: '<p>…Или даже с запятой в начале строки:</p>',
        },
        {
          lang: 'javascript',
          text:
            "let user = 'John'\n" + '  , age = 25\n' + "  , message = 'Hello';",
        },
      ],
    },
    {
      title: 'Имена переменных',
      content: [
        {
          text:
            '<p>В JavaScript есть два ограничения, касающиеся имён переменных:</p><ol>\n' +
            '<li>Имя переменной должно содержать только буквы, цифры или символы <code>$</code> и <code>_</code>.</li>\n' +
            '<li>Первый символ не должен быть цифрой.</li>\n' +
            '</ol><p>Примеры допустимых имён:</p>',
        },
        {
          lang: 'javascript',
          text: 'let userName;\n' + 'let test123;',
        },
        {
          text:
            '<p>Если имя содержит несколько слов, обычно используется <a href="https://ru.wikipedia.org/wiki/CamelCase">верблюжья нотация</a>,\n' +
            "то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: <code>myVeryLongName</code>.</p><p>Самое интересное – знак доллара <code>'$'</code> и подчёркивание <code>'_'</code> также можно использовать в названиях. Это обычные символы, как и буквы, без какого-либо особого значения.</p><p>Эти имена являются допустимыми:</p>",
        },
        {
          lang: 'javascript',
          text:
            'let $ = 1; // объявили переменную с именем "$"\n' +
            'let _ = 2; // а теперь переменную с именем "_"\n' +
            '\n' +
            'alert($ + _); // 3',
        },
      ],
    },
  ],
  tasks: [
    {
      title: 'Работа с переменными',
      description:
        'Объявите две переменные: admin и name.\n' +
        'Запишите строку "Джон" в переменную name.\n' +
        'Скопируйте значение из переменной name в admin.\n' +
        'Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).',
      solution: {
        lang: 'javascript',
        text:
          'let admin, name; // можно объявить две переменные через запятую\n' +
          '\n' +
          'name = "Джон";\n' +
          '\n' +
          'admin = name;\n' +
          '\n' +
          'alert( admin ); // "Джон"',
      },
    },
    {
      title: 'Придумайте правильные имена',
      description:
        'Создайте переменную для названия нашей планеты. Как бы вы её назвали?\n' +
        'Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?',
    },
  ],
};
