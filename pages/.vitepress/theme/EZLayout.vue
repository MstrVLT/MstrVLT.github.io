<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
        <div class="EZInfo">
            <div style="margin: auto; max-width: 1152px; text-align: center;" class="tip custom-block mb-6"><p class="custom-block-title">Выберите интересующий Вас раздел</p><p></p></div>
        </div>
    </template>
  </Layout>
</template>

<style>
.VPHero {
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 8px) 24px 48px !important;
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 20px) 48px 64px !important;
  }
}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 20px) 64px 64px !important;
  }
}
  
.VPHero.VPHomeHero .container {
    justify-content: center;
}

@media (min-width: 960px) {
    .VPHero.VPHomeHero .container .main {
        flex-grow: 0 !important;
        width: auto !important;
    }
}

.VPHero.VPHomeHero .container .tagline {
    text-align: left;
}

@media (min-width: 960px) {
    .VPHero.VPHomeHero .container .tagline {
        text-align: center;
}
}
.EZInfo {
  position: relative;
  padding: 0 24px;
  
}

@media (min-width: 640px) {
  .EZInfo {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .EZInfo {
    padding: 0 64px;
    
  }
}

article img {
    aspect-ratio: auto 128 / 128;
    width: 128px;
}

</style>
