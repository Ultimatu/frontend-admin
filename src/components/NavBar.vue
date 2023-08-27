<template>
  <div class="flex justify-between  items-center  w-full">
    <!-- user Name -->
    <div class="ml-6 m-2">
      <h1 class="text-sm">Hello Monsieur,</h1>
      <h2>yacou</h2>
    </div>

    <!-- searchbar -->
    
    <div class="relative w-1/3 flex items-center  ">
          <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
            <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>

    <!-- notification & user avatar -->
    <div class="flex items-center   mr-6 space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>

      <div class="h-6 w-6 ml-4 rounded-full flex items-center justify-center bg-green-800">
        <img class="h-full w-full rounded-full" src="../assets/user.jpg" alt="user">
      </div>
      <div @click="logout" class="p-1 bg-red-500 text-white rounded-full ml-4 cursor-pointer ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>

      </div>
 
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import {useRouter} from 'vue-router'
import {ref,onMounted} from 'vue'
const store = useAuthStore();
const route = useRouter();

function userInfo(){
  store.userInfo = localStorage.getItem('userInfo');
  console.log(JSON.stringify(store.userInfo));
}
function logout(){
  localStorage.removeItem('userToken');
  route.push('/');
}


onMounted(() => {
  userInfo();
});
</script>