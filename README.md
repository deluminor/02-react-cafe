# Sip Happens Café

Віджет відгуків для кавʼярні на **React + TypeScript**.  
Користувач обирає `Good` / `Neutral` / `Bad`, а застосунок миттєво показує статистику: кількість голосів, загальну суму та відсоток позитивних відгуків.

**Репозиторій:** [02-react-cafe](https://github.com/deluminor/02-react-cafe)

---

## Що вміє

- три варіанти оцінки: Good, Neutral, Bad
- live-статистика після кожного голосу
- обчислення `totalVotes` і `positiveRate` на льоту
- умовний рендеринг: `Notification` ↔ `VoteStats`
- кнопка `Reset` зʼявляється лише коли вже є голоси
- адаптивний UI з теплою кавʼярнею-палітрою

---

## Стек

| Технологія               | Навіщо                       |
| ------------------------ | ---------------------------- |
| React 19                 | UI і локальний стан          |
| TypeScript               | типізація пропсів і стану    |
| Vite                     | збірка й dev-сервер          |
| CSS Modules              | ізольовані стилі компонентів |
| modern-normalize         | уніфікація базових стилів    |
| Vitest + Testing Library | поведінкові тести            |
| Prettier + Oxlint        | формат і lint                |
| Husky + lint-staged      | локальні quality gates       |
| GitHub Actions           | CI на push / PR              |

---

## Архітектура

Стан піднято в `App` — це єдине джерело правди про голоси.

```
App
├── CafeInfo
├── VoteOptions   ← onVote / onReset / canReset
└── VoteStats | Notification   ← залежно від totalVotes
```

- `votes` живе в `App`
- діти отримують дані через пропси
- події піднімаються вгору через колбеки
- `totalVotes` і `positiveRate` обчислюються при рендері, не зберігаються в `useState`

Спільні типи: `src/types/votes.ts`  
Локальні props-інтерфейси: у файлах відповідних компонентів

---

## Швидкий старт

```bash
git clone git@github.com:deluminor/02-react-cafe.git
cd 02-react-cafe
npm install
npm run dev
```

Відкрий [http://localhost:5173](http://localhost:5173)

---

## Скрипти

| Команда                | Опис                                     |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | локальна розробка                        |
| `npm run build`        | production-збірка                        |
| `npm run preview`      | превʼю зібраного білду                   |
| `npm run lint`         | Oxlint                                   |
| `npm run format`       | Prettier write                           |
| `npm run format:check` | Prettier check                           |
| `npm run typecheck`    | TypeScript                               |
| `npm test`             | Vitest                                   |
| `npm run test:watch`   | Vitest у watch-режимі                    |
| `npm run check`        | format + lint + typecheck + test + build |

---

## Структура

```text
src/
├── components/
│   ├── App/
│   ├── CafeInfo/
│   ├── VoteOptions/
│   ├── VoteStats/
│   └── Notification/
├── types/
│   └── votes.ts
├── test/
│   └── setup.ts
├── index.css
└── main.tsx
```

Кожен компонент — окрема папка з парою:

- `ComponentName.tsx`
- `ComponentName.module.css`

Експорт компонентів — через `export default`.

---

## Якість коду

Перед кожним комітом і пушем проганяється повний `npm run check`.

CI (`.github/workflows/ci.yml`) перевіряє те саме на кожному push у `main` і на pull request:

1. formatting
2. lint
3. typecheck
4. tests
5. build

---

## Критерії ДЗ

Реалізовано кроки 1–8:

1. `App` як контейнер
2. `CafeInfo`
3. стан `votes` + типи `Votes` / `VoteType`
4. `VoteOptions`
5. `VoteStats`
6. обчислення статистики
7. `Notification` + умовний рендеринг
8. умовний `Reset` через `canReset`
