# Complex SW СУСТАВЫ — лендинг c CMS

Одностраничный сайт для биологически активной добавки.

Проект построен на **React 19** + **Vite 8**, с CSS-анимациями (Animate.css) и ** CMS использующий WordPress REST API**.

---

## 🚀 Демо

Статический сайт задеплоен на **Render**:

[https://fmf-landing.onrender.com](https://fmf-landing.onrender.com)

---

## 🛠 Технологии

- **React 19**
- **Vite 8**
- CSS-анимации + Animate.css (CDN)
- WordPress REST API (для CMS)
- Render (бесплатный хостинг)

---

## 📦 Установка и запуск

```bash
git clone https://github.com/ваш-аккаунт/имя-репозитория.git
cd имя-репозитория
npm install
npm run dev
Откройте http://localhost:5173.

🏗 Сборка для продакшена
bash
npm run build    # результат в папке dist
npm run preview  # локальный предпросмотр собранного сайта
🌐 Деплой на Render
Проект настроен как Static Site:

Build Command: npm run build

Publish Directory: dist

Переменная окружения (при необходимости):
VITE_WP_API_URL — URL WordPress API (по умолчанию используется запасной адрес).

После каждого пуша в основную ветку Render автоматически пересобирает и публикует сайт.

Анимации
CSS-анимации и Animate.css (подключены через CDN).
Компонент StikyJar — эффект «прилипания» элемента при скролле.


Запуск перед сборкой (при необходимости):

bash
node fix-paths.js
⚠️ Скрипт изменяет файлы в src. Перед запуском убедитесь, что у вас есть коммит или резервная копия.

📁 Структура проекта
text
my-project/
├── public/                 # статические файлы (изображения, иконки)
├── src/
│   ├── components/         # React-компоненты (StikyJar, PricePerBank, MaxLogo и др.)
│   ├── App.jsx             # главный компонент
│   ├── main.jsx            # точка входа
│   ├── index.css           # глобальные стили
│   ├── style.css           # дополнительные стили
│   └── App.css             # стили App
├── index.html              # шаблон HTML
├── package.json
├── vite.config.js
├── fix-paths.js            # скрипт для автоматического исправления путей
└── README.md
