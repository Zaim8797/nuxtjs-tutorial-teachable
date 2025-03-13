<script setup lang="ts">
import ColorModeBtn from './ColorModeBtn.vue';
import type { DropdownItem } from "#ui/types";

const user = useSupabaseUser();
const { auth } = useSupabaseClient();
const toast = useToast();

const items: DropdownItem[][] = [
  [
    {
      label: user.value?.email || "",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-mdi-logout",
      click: logout,
    },
  ],
];

async function logout() {
  try {
    const { error } = await auth.signOut();
    if (error) throw error;
    navigateTo("/login");
  } catch (error: any) {
    toast.add({
      color: "red",
      title: error.message,
    });
  }
}
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
            <UIcon name="line-md:home-twotone" width="24" height="24"/>
            <span>Home</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="flex gap-2 items-center">
            <UIcon name="line-md:alert-circle-twotone-loop" width="24" height="24"/>
            <span>About</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin" class="flex gap-2 items-center">
            <UIcon name="line-md:account" width="24" height="24"/>
            <span>Admin</span>
          </NuxtLink>
        </li>
        <li v-if="!user">
          <NuxtLink to="/login" class="flex gap-2 items-center">
            <UIcon name="line-md:login" width="24" height="24"/>
            <span>Login</span>
          </NuxtLink>
        </li>
        <UDropdown
          v-if="user"
          :items="items"
          :popper="{ placement: 'bottom-start', arrow: true }"
        >
          <UAvatar size="md" :alt="user.email" />
          <template #account="{ item }">
            <div class="truncate text-left">
              <p>Signed in as</p>
              <p class="truncate font-medium">
                {{ item.label }}
              </p>
            </div>
          </template>
        </UDropdown>
        <!-- Color Mode Button -->
        <li>
          <ColorModeBtn />
        </li>
      </ul>
    </nav>
  </header>
</template>
