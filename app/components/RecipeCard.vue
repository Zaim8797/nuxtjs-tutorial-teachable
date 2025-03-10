<script setup lang="ts">
import { type Recipe } from "../../types/types";

// Terima data sebagai prop dari parent
defineProps<{ recipe: Recipe }>();
</script>

<template>
  <div class="border rounded-lg p-4 shadow-md">
    <NuxtImg
      :src="recipe.image"
      class="w-full h-48 object-cover rounded-md mb-4"
      alt="Recipe image"
    />
    <h3 class="text-xl font-bold mb-2">{{ recipe.name }}</h3>
    <p class="text-gray-600">{{ recipe.cookTimeMinutes }} mins | {{ recipe.caloriesPerServing }} cal</p>
    <NuxtLink :to="`/recipes/${recipe.id}`" class="text-blue-600 hover:underline">View Recipe</NuxtLink>
  </div>
</template>
