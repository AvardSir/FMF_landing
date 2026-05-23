<template>
  <section class="target-audience">
    <div class="target-audience__container">
      <div class="target-audience__background"></div>
      <div class="target-audience__content">
        <h2 class="target-audience__title">
          Подходит для всех, кто заботиться о своем здоровье и думает о своем будущем заранее.
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.target-audience {
  width: 100%;
  position: relative;
}

.target-audience__container {
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  min-height: 809px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
}

.target-audience__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  z-index: 0;
}

.target-audience__content {
  position: relative;
  z-index: 1;
  max-width: 908px;
  text-align: center;
}

.target-audience__title {
  font-size: 48px;
  font-weight: 500;
  line-height: 52.8px;
  color: var(--color-white);
}

@media (max-width: 768px) {
  .target-audience__container {
    min-height: auto;
    padding: 80px 20px;
  }

  .target-audience__title {
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
