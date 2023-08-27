
<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
import { useAuthStore } from '@/store/auth';

const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref(false);
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const type = ref('password') ;
function setPasswordShow(){
  showPassword.value = !showPassword.value;
    if (showPassword.value) {
      type.value ='text';
    }else{
      return type.value = 'password' ;
    }
}



const login = async () => {
  isLoading.value = true;
  const credentials = {
    email: email.value,
    password:password.value,
  };

  const loginSuccessful = await authStore.login(credentials);

  if (loginSuccessful) {
    console.log('Login successful');
    console.log(authStore.userToken);
    router.push('/home');
  } else {
    console.log('Login failed');
  }
  isLoading.value = false;
}
</script>

<template>
<div>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
		<img src="@/assets/logo.png" alt="logo" >
    <h1 class="text-sm font-bold  text-gray-500">NB: Ceci est la page d'administration de Mavoix</h1>
      <span class="text-red-500"> {{ message }} </span>
  </div>

  <form @submit.prevent="login()"  class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
        v-model="email"
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Entrez votre email"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>

      <div class="relative">
        <input
        v-model="password"
          :type="type"
          class="w-full rounded-lg border border-2 border-gray-100 p-4 pe-12 text-sm shadow-sm"
          placeholder="Entrez votre  mot de passe"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer ">
          <svg v-if="!showPassword" @click="setPasswordShow"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400 hover:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg v-if="showPassword" @click="setPasswordShow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400 hover:text-black">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        <a class="underline" href="">Mot de passe oublié</a>
      </p>

      <button

        type="submit"
        class="flex items-center justify-center  rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white" > Se connecter
        <div v-if="isconnecting" class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-200 ml-2"></div>

      </button>
    </div>
  </form>
</div>
	</div>
</template>