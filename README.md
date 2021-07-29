--

## Быстрый старт

```bash
npx create-react-app .имя папки проекта
```

Для того чтобы создать приложение в текущей папке, вместо имени проекта ставится
точка. Например npx `create-react-app .`. Это можно использовать когда был
склонирован репозиторий и в его локальной версии инициализируется приложение.

### Установить в проект следующие пакеты.

```bash
npm install --save-dev prettier eslint
```

Инициализация `lint-staged` и `husky`.

Пользователям MacOS и Linux систем необходимо выполнить в терминале следующую
команду. Она установит и настроит `husky` и `lint-staged` в зависимости от
инструментов качества кода из зависимостей проекта в `package.json`.

```bash
npx mrm lint-staged
```

Пользователям Windows необходимо выполнить следующую команду. Она делает тоже
самое.

```bash
npx mrm@2 lint-staged
```

```bash
npm install --save prop-types
```

добавить в корень проекта `.huskyrc`

```bash
{
    "hooks":{
      "pre-commit": "lint-staget"
    }
}
```

добавить в корень проекта `.lintstagedrc`

```bash
{
  "src/**/*.{json,css,scss,md}": ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"]
}
```

В файле `package.json` добавить

```bash
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
```

заменив `имя_пользователя` и `имя_репозитория` на свои.

```bash
npm run build
```

```bash
npm install gh-pages --save-dev
```

добавить два пакета в `package.json`

```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

```bash
npm install modern-normalize
```

<!-- добавить поддержку формата в файл `package.json` - `lint-staged`

```bash
"lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,scss,css,md}": "prettier --write"
  }
``` -->

#### дополнительные пакеты

[axios](https://www.npmjs.com/package/axios)<br>
[react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)<br>
[react-toastify](https://www.npmjs.com/package/react-toastify)<br>
[react-scroll](https://www.npmjs.com/package/react-scroll)<br>
[react-icons](https://react-icons.github.io/react-icons)<br>
[prop-types](https://www.npmjs.com/package/prop-types)<br>
[gh-pages](https://www.npmjs.com/package/gh-pages)<br>
[modern-normalize](https://github.com/sindresorhus/modern-normalize)<br>
[node-sass](https://www.npmjs.com/package/node-sass)<br>
[shortid](https://www.npmjs.com/package/shortid)<br>
[classnames](https://www.npmjs.com/package/classnames)<br>

---
