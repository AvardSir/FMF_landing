<template>
  <section class="comparison">
    <div class="comparison__container">
      <h2 class="comparison__title">Сравнение с другими продуктами</h2>
      <p class="comparison__description">
        «Complex SW СУСТАВЫ» — это комплексная добавка, сочетающая высокие дозировки глюкозамина и хондроитина с противовоспалительной босвеллией и полным набором витаминов для защиты соединительной ткани. В отличие от многих стандартных средств на рынке, он предлагает законченную систему «все в одной порции». Ключевым преимуществом является наличие клинически значимых дозировок (например, 1250 мг глюкозамина), тогда как многие на рынке используют уменьшенные дозировки ради экономии.
      </p>
      <div class="comparison__highlight">
        <h3 class="comparison__highlight-title">1 порция = 17 обычных капсул</h3>
        <p class="comparison__highlight-text">
          Доза в 3 раза выше конкурентов. Достаточно одной порции в день
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.comparison {
  width: 100%;
  padding: 80px 40px;
  background: var(--color-white);
}

.comparison__container {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.comparison__title {
  font-size: 48px;
  font-weight: 500;
  line-height: 52.8px;
  color: var(--color-text-primary);
}

.comparison__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-text-primary);
  max-width: 1839px;
}

.comparison__highlight {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  background: var(--color-background);
  border-radius: 16px;
  max-width: 597px;
}

.comparison__highlight-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  color: var(--color-text-primary);
}

.comparison__highlight-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .comparison {
    padding: 80px 20px;
  }

  .comparison__container {
    gap: 32px;
  }

  .comparison__title {
    font-size: 24px;
    line-height: 28px;
  }

  .comparison__description {
    font-size: 14px;
    line-height: 17px;
  }

  .comparison__highlight {
    padding: 24px;
  }

  .comparison__highlight-title {
    font-size: 18px;
  }

  .comparison__highlight-text {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
