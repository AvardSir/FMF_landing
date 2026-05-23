<template>
  <section class="intro">
    <div class="intro__container">
      <h2 class="intro__title">
        Комплекс для тех, кто хочет свободно двигаться и заботиться о своих суставах каждый день
      </h2>
      <p class="intro__description">
        Представьте, что вы каждый день даете своим суставам «витамин бодрости», который помогает им оставаться гибкими и здоровыми.
      </p>
      <p class="intro__description">
        Благодаря поддержке естественных процессов обновления тканей, вы забываете о скованности и с легкостью наслаждаетесь любимым спортом или прогулками.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.intro {
  width: 100%;
  padding: 80px 40px;
  background: var(--color-background);
}

.intro__container {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.intro__title {
  font-size: 32px;
  font-weight: 500;
  line-height: 35.2px;
  color: var(--color-text-primary);
  max-width: 1530px;
}

.intro__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-text-primary);
  max-width: 597px;
}

@media (max-width: 768px) {
  .intro {
    padding: 80px 20px;
  }

  .intro__container {
    gap: 32px;
  }

  .intro__title {
    font-size: 24px;
    line-height: 28px;
  }

  .intro__description {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
