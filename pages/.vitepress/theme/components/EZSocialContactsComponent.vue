<script setup>
import { ref } from "vue";
import { useData } from "vitepress";
import { isActive } from "vitepress/dist/client/shared";
import VPNavBarMenuLink from "vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

const props = defineProps(["icon", "item"]);

const { page } = useData();
</script>

<template>
  <div class="flex flex-nowrap gap-2">
    <VPLink
      class="flex items-center ez-social-links"
      :class="{
        VPNavBarMenuLink: true,
        active: false,
      }"
      href="https://vk.com/zero2028"
      :noIcon="true"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'vk']" size="lg" />
    </VPLink>
    <VPLink
      class="flex items-center ez-social-links"
      :class="{
        VPNavBarMenuLink: true,
        active: false,
      }"
      href="https://t.me/Zero2028"
      :noIcon="true"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'telegram']" size="lg" />
    </VPLink>
  </div>
</template>
