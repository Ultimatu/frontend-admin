<template>
  <!-- logo  & menu-->
  <div>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal">
        <div class>
          <div class=" mx-auto">
            <div class="bg-white rounded-lg p-1">
              <p class= " text-center text-sm text-gray-800  ">Ajouter un partie politique</p>
            
            </div>
            <div class=" rounded-b-lg py-2 px-4  w-full">
              <form class="mt-1">
                <div class="relative w-full">
                  <input
                    class="appearance-none w-full border pl-5 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md  py-6 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Nom du part politique"
                  />
           
                </div>
                <div class="relative mt-3">
                  <input
                    class="appearance-none border pl-5 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Description du parti politique"
                  />

                </div>
         
                <div class="flex items-center justify-between mt-8">
                  <button @click="showModal = false"
                    class="text-white py-2 px-4 uppercase rounded bg-red-500 hover:bg-red-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >anuler</button>
                  <button
                    class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >Ajouter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </modal>
    </Teleport>

    <div class="flex items-center justify-center">
      <img class="h-16" src="@/assets/logo.png" alt="logo" />
    </div>
    <!-- menu -->
    <div class="flex flex-col items-center justify-center">
      <!-- Dashbord button -->
      <div class="w-48 p-2 bg-green-800 mt-6 flex items-center justify-start rounded mb-2">
        <router-link to="/home" class="flex items-center justify-center">
          <svg
            class="ml-2"
            width="12"
            height="16"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0833 12.75V0.25H37.75V12.75H21.0833ZM0.25 21.0833V0.25H16.9167V21.0833H0.25ZM21.0833 37.75V16.9167H37.75V37.75H21.0833ZM0.25 37.75V25.25H16.9167V37.75H0.25Z"
              fill="white"
            />
          </svg>

          <span class="text-white text-xs ml-2">TABLEAUX DE BORD</span>
        </router-link>
      </div>
      <div
        class="w-48 p-2 mt-2 flex items-center justify-start rounded hover:bg-green-900 hover:text-white"
      >
        <Button class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>

          <span class="text-xs ml-2">
            <router-link to="/newCandidat">Ajouter un candidat</router-link>
          </span>
        </Button>
      </div>
      <div
        class="w-48 p-2 mt-1 flex items-center justify-start rounded hover:bg-green-900 hover:text-white"
      >
        <router-link to="/candidats" class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <span class="text-xs ml-2">Liste des candidats</span>
        </router-link>
      </div>

      <div
        class="w-48 p-2 mt-2 flex items-center justify-start rounded hover:bg-green-900 hover:text-white"
      >
        <Button class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <router-link to="/add-sondage">
            <span class="text-xs ml-2">Creer un sondage</span>
          </router-link>
        </Button>
      </div>

      <div
        class="w-48 p-2 mt-2 flex items-center justify-start rounded hover:bg-green-900 hover:text-white"
      >
        <Button class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <router-link to id="show-modal" @click="showModal = true">
            <span class="text-xs ml-2">Ajouter un partis politique</span>
          </router-link>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modal from "@/Components/Modal.vue";
const showModal = ref(false);
</script>

<style scoped>
.active-class {
  background: #011f01;
}
</style>