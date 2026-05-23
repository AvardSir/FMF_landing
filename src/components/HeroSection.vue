<template>
  <section class="hero">
    <div class="hero__background"></div>
    <div class="hero__container">
      <h1 class="hero__title">Свобода движения</h1>
      <div class="hero__content">
        <div class="hero__image">
          <img src="@/assets/product.png" alt="Complex SW СУСТАВЫ" />
        </div>
        <div class="hero__info">
          <div class="hero__product">
            <h2 class="hero__product-name">
              «Complex SW СУСТАВЫ» порошок для опорно-двигательного аппарата
            </h2>
            <button class="hero__cta">
              <span>Купить в 1 клик</span>
            </button>
          </div>
          <div class="hero__features">
            <div class="hero__feature">
              <p class="hero__feature-title">420г. / 30 порций</p>
              <p class="hero__feature-subtitle">Месячный курс</p>
            </div>
            <div class="hero__feature">
              <p class="hero__feature-highlight">1 порция = 17 обычных капсул</p>
              <p class="hero__feature-description">
                Комплекс, который питает суставы изнутри и способствует обновлению хрящевой ткани
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 1053px;
  overflow: hidden;
  padding-top: 108px;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1053px;
  background: var(--color-primary);
  z-index: 0;
}

.hero__container {
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 80px 40px 0;
  z-index: 1;
}

.hero__title {
  font-size: 64px;
  font-weight: 400;
  line-height: 57.6px;
  color: var(--color-white);
  margin-bottom: 43px;
  max-width: 908px;
}

.hero__content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.hero__image {
  flex-shrink: 0;
  width: 588px;
  height: 744px;
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 191px;
}

.hero__product {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.hero__product-name {
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: var(--color-white);
  max-width: 516px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  background: var(--color-white);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-text-primary);
  max-width: 284px;
  transition: transform 0.2s ease;
}

.hero__cta:hover {
  transform: translateY(-2px);
}

.hero__features {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero__feature {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero__feature-title {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-white);
}

.hero__feature-subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-white);
}

.hero__feature-highlight {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-white);
}

.hero__feature-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: var(--color-white);
  max-width: 669px;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
  }

  .hero__background {
    height: 354px;
  }

  .hero__container {
    padding: 40px 20px;
  }

  .hero__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 24px;
  }

  .hero__content {
    flex-direction: column;
    gap: 24px;
  }

  .hero__image {
    width: 100%;
    height: auto;
    max-width: 303px;
    margin: 0 auto;
  }

  .hero__info {
    gap: 40px;
  }

  .hero__product-name {
    font-size: 14px;
    line-height: 17px;
  }

  .hero__cta {
    width: 100%;
    max-width: 100%;
  }

  .hero__feature-highlight {
    font-size: 18px;
  }

  .hero__feature-description {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
