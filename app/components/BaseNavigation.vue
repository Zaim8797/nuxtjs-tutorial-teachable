<script setup lang="ts">
import ColorModeBtn from './ColorModeBtn.vue';
</script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" src="/icon-green.png" format="webp" alt="" />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>

      <!-- Navigation Links -->
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize items-center">
        <li>
          <NuxtLink to="/" class="flex gap-2 items-center">
            <UIcon name="line-md:home-twotone"/>
            <span>Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="flex gap-2 items-center">
            <UIcon name="line-md:alert-circle-twotone-loop"/>
            <span>About</span>
          </NuxtLink>
        </li>
        <!-- Color Mode Button -->
        <li>
          <ColorModeBtn />
        </li>
      </ul>
    </nav>
  </header>
</template>
