export const codeStructure = {
  title: 'Структура кода',
  sections: [
    {
      content: [
        {
          text:
            'Начнём изучение языка с рассмотрения основных «строительных блоков» кода.',
        },
      ],
    },
    {
      title: 'Инструкции',
      content: [
        {
          text: `<p>Инструкции – это синтаксические конструкции и команды, которые выполняют действия.</p><p>Мы уже видели инструкцию <code>alert('Привет, мир!')</code>, которая отображает сообщение «Привет, мир!».</p><p>В нашем коде может быть столько инструкций, сколько мы захотим. Инструкции могут отделяться точкой с запятой.</p><p>Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:</p>`,
        },
        {
          lang: 'javascript',
          text: "alert('Привет'); alert('Мир');",
        },
        {
          text:
            'Обычно каждую инструкцию пишут на новой строке, чтобы код было легче читать:',
        },
        {
          lang: 'javascript',
          text: "alert('Привет');\n" + "alert('Мир');",
        },
      ],
    },
    {
      title: 'Точка с запятой',
      content: [
        {
          text:
            '<p>В большинстве случаев точку с запятой можно не ставить, если есть переход на новую строку.</p><p>Так тоже будет работать:</p>',
        },
        {
          lang: 'javascript',
          text: "alert('Привет')\n" + "alert('Мир')",
        },
        {
          text:
            'В этом случае JavaScript интерпретирует перенос строки как «неявную» точку с запятой. Это называется автоматическая вставка точки с запятой.',
        },
        {
          text:
            '<strong>В большинстве случаев новая строка подразумевает точку с запятой. Но «в большинстве случаев» не значит «всегда»!</strong>',
        },
        {
          text:
            'В некоторых ситуациях новая строка всё же не означает точку с запятой. Например:',
        },
        {
          lang: 'javascript',
          text: 'alert(3 +\n' + '1\n' + '+ 2);',
        },
        {
          text:
            'Код выведет 6, потому что JavaScript не вставляет здесь точку с запятой. Интуитивно очевидно, что, если строка заканчивается знаком "+", значит, это «незавершённое выражение», поэтому точка с запятой не требуется. И в этом случае всё работает, как задумано.',
        },
      ],
    },
  ],
};