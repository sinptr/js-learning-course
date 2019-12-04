export const useStrict = {
  title: 'Строгий режим — "use strict"',
  sections: [
    {
      content: [
        {
          text:
            'На протяжении долгого времени JavaScript развивался без проблем с обратной совместимостью. Новые функции добавлялись в язык, в то время как старая функциональность не менялась.\n' +
            '\n' +
            'Преимуществом данного подхода было то, что существующий код продолжал работать. А недостатком – что любая ошибка или несовершенное решение, принятое создателями JavaScript, застревали в языке навсегда.\n' +
            '\n' +
            'Так было до 2009 года, когда появился ECMAScript 5 (ES5). Он добавил новые возможности в язык и изменил некоторые из существующих. Чтобы старый код работал, большинство таких модификаций по умолчанию отключены. Вы должны явно включить их с помощью специальной директивы: "use strict".',
        },
      ],
    },
    {
      title: '«use strict»',
      content: [
        {
          text:
            '<p>Директива выглядит как строка: <code>"use strict"</code> или <code>\'use strict\'</code>. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.</p><p>Например:</p>',
        },
        {
          lang: 'javascript',
          text:
            '"use strict";\n' +
            '\n' +
            '// этот код работает в современном режиме\n' +
            '...',
        },
        {
          text:
            '<p>Позже мы изучим функции (способ группировки команд). Забегая вперёд, заметим, что вместо всего скрипта <code>"use strict"</code> можно поставить в начале большинства видов функций. Это позволяет включить строгий режим только в конкретной функции. Но обычно люди используют его для всего файла.</p>',
        },
      ],
    },
    {
      title: 'Консоль браузера',
      content: [
        {
          text:
            '<p>В будущем, когда вы будете использовать консоль браузера для тестирования функций, обратите внимание, что <code>use strict</code> по умолчанию в ней выключен.</p><p>Иногда, когда <code>use strict</code> имеет значение, вы можете получить неправильные результаты.</p><p>Можно использовать <kbd class="shortcut">Shift<span class="shortcut__plus">+</span>Enter</kbd> для ввода нескольких строк и написать в верхней строке <code>use strict</code>:</p>',
        },
        {
          lang: 'javascript',
          text:
            "'use strict'; <Shift+Enter для перехода на новую строку>\n" +
            '//  ...ваш код...\n' +
            '<Enter для запуска>',
        },
        {
          text:
            '<p>В большинстве браузеров, включая Chrome и Firefox, это работает.</p><p>В старых браузерах консоль не учитывает такой <code>use strict</code>, там можно «оборачивать» код в функцию, вот так:</p>',
        },
        {
          lang: 'javascript',
          text:
            '(function() {\n' +
            "  'use strict';\n" +
            '\n' +
            '  // ...ваш код...\n' +
            '})()',
        },
      ],
    },
    {
      title: 'Всегда используйте «use strict»',
      content: [
        {
          text:
            '<p>Нам ещё предстоит рассмотреть различия между строгим режимом и режимом «по умолчанию».</p><p>В следующих главах, изучая особенности языка, мы будем отмечать различия между строгим и стандартным режимами. К счастью, их не так много, и они действительно делают нашу жизнь лучше.</p><p>На данный момент достаточно иметь общее понимание об этом режиме:</p><ol>\n' +
            '<li>Директива <code>"use strict"</code> переключает движок в «современный» режим, изменяя поведение некоторых встроенных функций. Позже в учебнике мы увидим подробности.</li>\n' +
            '<li>Строгий режим включается путём размещения <code>"use strict"</code> в начале скрипта или функции. Некоторые функции языка, такие как «классы» и «модули», автоматически включают строгий режим.</li>\n' +
            '<li>Строгий режим поддерживается всеми современными браузерами.</li>\n' +
            '<li>Мы рекомендуем всегда начинать скрипты с <code>"use strict"</code>. Все примеры в этом руководстве предполагают строгий режим, если (очень редко) не указано иное.</li>\n' +
            '</ol>',
        },
      ],
    },
  ],
};
