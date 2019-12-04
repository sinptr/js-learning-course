export default {
  title: 'Привет, мир!',
  sections: [
    {
      content: [
        {
          text:
            'В этой части учебника мы изучаем собственно JavaScript, сам язык.\n' +
            '\n' +
            'Но нам нужна рабочая среда для запуска наших скриптов, и, поскольку это онлайн-книга, то браузер будет хорошим выбором. В этой главе мы сократим количество специфичных для браузера команд (например, alert) до минимума, чтобы вы не тратили на них время, если планируете сосредоточиться на другой среде (например, Node.js). А на использовании JavaScript в браузере мы сосредоточимся в следующей части учебника.\n' +
            '\n' +
            'Итак, сначала давайте посмотрим, как выполнить скрипт на странице. Для серверных сред (например, Node.js), вы можете выполнить скрипт с помощью команды типа "node my.js". Для браузера всё немного иначе.',
        },
      ],
    },
    {
      title: 'Тег «script»',
      content: [
        {
          text:
            'Программы на JavaScript могут быть вставлены в любое место HTML-документа с помощью тега "script".<br/> Для примера:',
        },
        {
          lang: 'xml',
          text:
            '<!DOCTYPE HTML>\n' +
            '<html>\n' +
            '\n' +
            '<body>\n' +
            '\n' +
            '  <p>Перед скриптом...</p>\n' +
            '\n' +
            '  <script>\n' +
            "    alert( 'Привет, мир!' );\n" +
            '  </script>\n' +
            '\n' +
            '  <p>...После скрипта.</p>\n' +
            '\n' +
            '</body>\n' +
            '\n' +
            '</html>',
        },
      ],
    },
    {
      title: 'Современная разметка',
      content: [
        {
          text: `<p>Тег <code>&lt;script&gt;</code> имеет несколько атрибутов, которые редко используются, но всё ещё могут встретиться в старом коде:</p>`,
        },
        {
          text: `<dl>
<dt>Атрибут <code>type</code>: <code>&lt;script <u>type</u>=…&gt;</code></dt>
<dd>
<p>Старый стандарт HTML, HTML4, требовал наличия этого атрибута в теге <code>&lt;script&gt;</code>. Обычно он имел значение <code>type="text/javascript"</code>. На текущий момент этого больше не требуется. Более того, в современном стандарте HTML смысл этого атрибута полностью изменился. Теперь он может использоваться для JavaScript-модулей. Но это тема не для начального уровня, и о ней мы поговорим в другой части учебника.</p>
</dd>
<dt>Атрибут <code>language</code>: <code>&lt;script <u>language</u>=…&gt;</code></dt>
<dd>
<p>Этот атрибут должен был задавать язык, на котором написан скрипт. Но так как JavaScript является языком по умолчанию, в этом атрибуте уже нет необходимости.</p>
</dd>
<dt>Обёртывание скрипта в HTML-комментарии.</dt>
<dd>
<p>В очень древних книгах и руководствах вы сможете найти комментарии внутри тега <code>&lt;script&gt;</code>, например, такие:</p>
<div data-trusted="1" class="code-example" data-prism-highlighted="1">
      <div class="codebox code-example__codebox">
        
        <div class="codebox__code" data-code="1">
          <pre class="line-numbers  language-markup"><code class=" language-markup"><code class="token tag"><code class="token tag"><code class="token punctuation">&lt;</code>script</code> <code class="token attr-name">type</code><code class="token attr-value"><code class="token punctuation">=</code><code class="token punctuation">"</code>text/javascript<code class="token punctuation">"</code></code><code class="token punctuation">&gt;</code></code><code class="token comment">&lt;!--
    ...
//--&gt;</code><code class="token tag"><code class="token tag"><code class="token punctuation">&lt;/</code>script</code><code class="token punctuation">&gt;</code></code></code><span class="line-numbers-rows"><span></span><span></span><span></span></span></pre>
        </div>
      </div>
      
      </div><p>Этот комментарий скрывал код JavaScript в старых браузерах, которые не знали, как обрабатывать тег <code>&lt;script&gt;</code>. Поскольку все браузеры, выпущенные за последние 15 лет, не содержат данной проблемы, такие комментарии уже не нужны. Если они есть, то это признак, что перед нами очень древний код.</p>
</dd>
</dl>`,
        },
      ],
    },
  ],

  tasks: [
    {
      title: 'Вызвать alert',
      description:
        'Создайте страницу, которая отобразит сообщение «Я JavaScript!».\n' +
        '\n' +
        'Выполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.',
      solution: {
        lang: 'xml',
        text:
          '<!DOCTYPE html>\n' +
          '<html>\n' +
          '<body>\n' +
          '\n' +
          '  <script>\n' +
          '    alert( "Я JavaScript!" );\n' +
          '  </script>\n' +
          '\n' +
          '</body>\n' +
          '</html>',
      },
    },
    {
      title: 'Покажите сообщение с помощью внешнего скрипта',
      description:
        'Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.js, лежащий в той же папке. Откройте страницу, убедитесь, что оповещение работает.',
    },
  ],
};
