<template>
  <div class="benefit-card">
    <div class="benefit-card__icon">
      <div class="benefit-card__icon-bg"></div>
      <div class="benefit-card__icon-inner">
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="benefit-card__content">
      <h3 class="benefit-card__title">{{ title }}</h3>
      <p class="benefit-card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
.benefit-card {
  position: relative;
  width: 597px;
  min-height: 320px;
  background: var(--color-white);
  border-radius: 16px;
  padding: 80px 58px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefit-card__icon {
  position: absolute;
  top: -60px;
  left: 58px;
}

.benefit-card__icon-bg {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--color-primary);
  top: 0;
  left: 0;
}

.benefit-card__icon-inner {
  position: absolute;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: var(--color-white);
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-card__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefit-card__title {
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: var(--color-text-primary);
}

.benefit-card__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .benefit-card {
    width: 100%;
    padding: 60px 24px 32px;
  }

  .benefit-card__icon {
    top: -40px;
    left: 24px;
  }

  .benefit-card__icon-bg {
    width: 80px;
    height: 80px;
  }

  .benefit-card__icon-inner {
    width: 68px;
    height: 68px;
    top: 6px;
    left: 6px;
  }

  .benefit-card__title {
    font-size: 18px;
  }

  .benefit-card__description {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
