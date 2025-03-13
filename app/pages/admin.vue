<script setup lang="ts">
import admin from '~/middleware/admin';

const user = useCookie("user");

definePageMeta({
  middleware: ["admin"],
});
</script>

<template>
  <main>
    <section class="container py-20">
      <h1 class="text-3xl mb-6 text-balance">
        Welcome back, {{ user }}
      </h1>
    </section>
  </main>
</template>