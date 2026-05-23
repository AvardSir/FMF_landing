<script setup lang="ts">
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import IntroSection from './components/IntroSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import TargetAudienceSection from './components/TargetAudienceSection.vue'
import ComparisonSection from './components/ComparisonSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app">
    <HeaderSection />
    <HeroSection />
    <IntroSection />
    <BenefitsSection />
    <TargetAudienceSection />
    <ComparisonSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
}
</style>
