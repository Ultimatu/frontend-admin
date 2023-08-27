<script setup>
import {ref} from 'vue'
import axios from 'axios'
const titre = ref('') ;
const description= ref('') ;
const commune = ref('');
const CommuneList = ["Adjame","Bingerville","Anyama","Abobo","Koumassi","Yopougon","Cocody","Marcory","Port-Bouet","Attecoube","Songon","Treichville","Plateau"];


async function AddSondage(){
  const data = {
    "titre":titre.value,
    "description":description.value,
    "commune":commune.value
  }

 await axios.post('https://lesinnovateurs.me/api/admin/add-sondage',data,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept:"application/json",
      Authorization:`Bearer ${localStorage.getItem("userToken")}`
      },
  })
 .then((response)=>{
   console.log(response.data);
 })
 .catch((err)=>{
    console.log(err);
 })


  
}


</script>

<template>
  <div>
    <div class="p-8 rounded border border-gray-200">
      <h1 class="font-medium text-3xl">Ajouter un sondage</h1>

      <form @submit.prevent="AddSondage">
        <div class="mt-8 space-y-6">
          <div>
            <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Titre</label>
            <input
            v-model="titre"
              type="text"
              name="name"
              id="name"
              class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Description</label>
              <textarea v-model="description" class="h-full w-full bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div>
            <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Commune</label>
                <select v-model="commune" class="w-52" name="" id="">
                  <option v-for="(commune,index) in CommuneList" :key="index">{{ commune  }}</option>
                </select>
          </div>
        </div>
        <div class="space-x-4 mt-8">
          <button
            type="submit"
            class="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-800 active:bg-blue-700 disabled:opacity-50"
          >Ajouter</button>
          <!-- Secondary -->
          <!-- <button
            class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
          >Sortie</button> -->
        </div>
      </form>
    </div>
  </div>
</template>

