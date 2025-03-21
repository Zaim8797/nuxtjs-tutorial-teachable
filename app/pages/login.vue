<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { apiBase } = useRuntimeConfig().public;
const { auth } = useSupabaseClient();
const toast = useToast();

const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof formSchema>;

const formState = reactive({
  email: "",
});

const otpLoading = ref(false);
async function formSubmission(event: FormSubmitEvent<Schema>) {
  try {
    otpLoading.value = true;
    const { error } = await auth.signInWithOtp({
      email: event.data.email,
      options: {
        emailRedirectTo: `${apiBase}/confirm`,
      },
    });
    if (error) throw error;
    formState.email = "";
    toast.add({
      color: "green",
      title: "Please check your email for your magic link",
    });
  } catch (error: any) {
    toast.add({
      color: "red",
      title: error.message,
    });
  } finally {
    otpLoading.value = false;
  }
}

const oAuthLoading = ref(false);
async function loginWithOAuth() {
  try {
    console.log("Google login button clicked");
    oAuthLoading.value = true;
    const { error } = await auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${apiBase}/confirm`,
      },
    });
    if (error) throw error;
  } catch (error:  any) {
    oAuthLoading.value = false;
    toast.add({
      color: "red",
      title: error.message,
    });
  }
}
</script>

<template>
  <div
    class="bg-[#f1f1f1] max-w-screen-sm mx-auto mt-10 space-y-6 rounded-md p-8 text-xs shadow-md"
  >
    <h1 class="text-xl sm:text-2xl">Login</h1>
    <UButton
      icon="logos:google-icon"
      label="Login With Google"
      color="white"
      block
      :loading="oAuthLoading"
      @click="loginWithOAuth"
    />
    <UDivider label="or" />
    <UForm
      :state="formState"
      :schema="formSchema"
      @submit="formSubmission"
      class="space-y-4"
    >
      <UFormGroup label="Email" name="email" size="lg">
        <UInput v-model="formState.email" />
      </UFormGroup>
      <UButton type="submit" label="Sign in" :loading="otpLoading" block />
    </UForm>
  </div>
</template>