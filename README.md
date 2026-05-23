# Figma Site - Complex SW СУСТАВЫ

Pixel perfect лендинг на Vue 3 + TypeScript, созданный на основе дизайна из Figma.

## Структура проекта

```
figma-site/
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── fonts.css       # Подключение шрифта Onest
│   │   │   ├── variables.css   # CSS переменные (цвета, размеры)
│   │   │   └── reset.css       # CSS reset
│   │   ├── product.png         # Изображение продукта из Figma
│   │   └── hero-bg.png         # Фоновое изображение
│   ├── components/
│   │   ├── HeaderSection.vue           # Фиксированный хедер
│   │   ├── HeroSection.vue             # Главная секция с продуктом
│   │   ├── IntroSection.vue            # Вводная секция
│   │   ├── BenefitsSection.vue         # Секция преимуществ
│   │   ├── BenefitCard.vue             # Карточка преимущества
│   │   ├── TargetAudienceSection.vue   # Целевая аудитория
│   │   ├── ComparisonSection.vue       # Сравнение с конкурентами
│   │   └── FooterSection.vue           # Футер
│   ├── App.vue
│   └── main.ts
├── figma-design.json          # Полные данные из Figma API
├── figma-styles.json          # Извлеченные стили
├── figma-sections.json        # Структура секций
└── .mcp.json                  # Конфигурация MCP сервера Figma
```

## Дизайн из Figma

- **URL**: https://www.figma.com/design/OzFvVvb7ptrdKVg2DYoWAX/FMF-Test
- **Node ID**: 273-428
- **Версии**: 
  - Мобильная: 375px × 9102px
  - Десктопная: 1920px × 9926px

## Стили

### Цвета
- Primary: `rgba(47, 157, 207, 1)` - основной синий
- Background: `rgba(243, 243, 243, 1)` - светло-серый фон
- Text Primary: `rgba(28, 28, 28, 1)` - основной текст
- White: `rgba(255, 255, 255, 1)`

### Типографика
- **Шрифт**: Onest (Google Fonts)
- **Размеры**: 
  - Hero: 32px / 500 weight
  - H2: 20px / 500 weight
  - Body: 16px / 400 weight

### Breakpoints
- Mobile: 375px
- Desktop: 1920px

## Компоненты

### HeaderSection
Фиксированный хедер с навигацией.

### HeroSection
Главная секция с:
- Заголовком "Свобода движения"
- Изображением продукта (588×744px)
- CTA кнопкой "Купить в 1 клик"
- Информацией о продукте

### BenefitsSection
Сетка из 4 карточек преимуществ:
1. Питание суставов
2. Регенерация
3. Результат
4. Комплексный эффект

### ComparisonSection
Сравнение с конкурентами с выделением "1 порция = 17 обычных капсул".

## Запуск проекта

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Dev сервер: http://localhost:5173

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Адаптивность

Сайт полностью адаптивен:
- Desktop (1920px+): полная версия с сеткой 2×2 для карточек
- Tablet (768px-1400px): одна колонка карточек
- Mobile (<768px): оптимизированная мобильная версия

## Pixel Perfect

Все размеры, отступы и цвета точно соответствуют дизайну из Figma:
- Размеры элементов в px
- Точные цвета из палитры
- Шрифт Onest с правильными весами
- Изображения загружены из Figma API

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

