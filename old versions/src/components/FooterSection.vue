<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <p class="footer__text">© 2026 Complex SW. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  width: 100%;
  background: var(--color-text-primary);
  padding: 75px 40px;
}

.footer__container {
  max-width: 1920px;
  margin: 0 auto;
}

.footer__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__text {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-white);
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px;
  }

  .footer__text {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
}
</style>
