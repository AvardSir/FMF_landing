<template>
  <section class="benefits">
    <div class="benefits__container">
      <div class="benefits__grid">
        <BenefitCard
          title="Питание суставов"
          description="Полноценный рацион для ваших суставов. Ежедневно снабжаем хрящевую ткань важными витаминами и микроэлементами, необходимыми для поддержания ее структуры и функций."
        >
          <template #icon>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 8V32M12 16L20 8L28 16M12 24L20 32L28 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </BenefitCard>

        <BenefitCard
          title="Регенерация"
          description="Запуск собственных механизмов организма по восстановлению хряща, а не просто временное маскирование проблемы. Стимулируем внутренние ресурсы организма для восстановления хрящевой ткани, способствуя ее здоровью изнутри."
        >
          <template #icon>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 10C15 10 12 13 12 18C12 23 15 26 20 30C25 26 28 23 28 18C28 13 25 10 20 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </BenefitCard>

        <BenefitCard
          title="Результат"
          description="Сохраняем комфорт в любом движении. Благодаря комплексной поддержке вы дольше остаетесь активными, забываете о скованности и с легкостью занимаетесь любимыми делами."
        >
          <template #icon>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 8L12 16V32H16V24H24V32H28V16L20 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </BenefitCard>

        <BenefitCard
          title="Комплексный эффект"
          description="Мы объединили нутритивную защиту и стимуляцию регенерации хряща. Это комплексный подход к здоровью суставов: питание + обновление = ваша уверенная подвижность и комфорт при любом уровне активности."
        >
          <template #icon>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M20 4V12M20 28V36M4 20H12M28 20H36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </BenefitCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitCard from './BenefitCard.vue'
</script>

<style scoped>
.benefits {
  width: 100%;
  padding: 80px 40px;
  background: var(--color-background);
  position: relative;
}

.benefits__container {
  max-width: 1920px;
  margin: 0 auto;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(2, 597px);
  gap: 399px 646px;
  justify-content: center;
  padding-top: 0;
}

@media (max-width: 1400px) {
  .benefits__grid {
    grid-template-columns: 1fr;
    gap: 80px;
    max-width: 597px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .benefits {
    padding: 80px 20px;
  }

  .benefits__grid {
    gap: 60px;
    padding-top: 40px;
  }
}
</style>
