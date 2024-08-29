<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
        <div class="EZInfo">
            <div style="margin: auto; max-width: 1152px; text-align: center;" class="tip custom-block !mb-6"><p class="custom-block-title">Выберите интересующий Вас раздел</p><p></p></div>
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
    aspect-ratio: auto 256 / 256;
    width: 256px;
}

.VPFeature article .title {
  overflow: hidden;
  text-align: center;
}

.VPFeature article .title::before,
.VPFeature article .title::after {
  background-color: var(--vp-c-text-2);
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
  opacity: 0.4;
}

.VPFeature article .title::before {
  right: 0.5em;
  margin-left: -50%;
}

.VPFeature article .title::after {
  left: 0.5em;
  margin-right: -50%;
}

</style>
