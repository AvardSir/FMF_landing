<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">Complex SW</div>
      <nav class="header__nav">
        <a href="#benefits" class="header__link">Преимущества</a>
        <a href="#comparison" class="header__link">Сравнение</a>
        <a href="#contact" class="header__link">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--color-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header__container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 34px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 108px;
  box-sizing: border-box;
}

.header__logo {
  font-size: 20px;
  font-weight: 500;
  color: var(--color-primary);
}

.header__nav {
  display: flex;
  gap: 32px;
}

.header__link {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text-primary);
  transition: color 0.2s ease;
}

.header__link:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .header__container {
    padding: 16px 20px;
  }

  .header__nav {
    gap: 16px;
  }

  .header__link {
    font-size: 14px;
  }
}
</style>
