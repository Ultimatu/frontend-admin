<script setup>
import {ref,watch,onMounted} from 'vue';
import axios from 'axios'
import { useAuthStore } from '@/store/auth';
const store = useAuthStore();


const nom = ref('');
const prenom = ref('');
const bio = ref('');
const commune = ref('');
const phone = ref('');
const email = ref('');
const photo_url = ref('');
const testSelect = ref('');
const partisPolitiques = ref([]);
let selectedFileName = ref(null);
const CommuneList = ["Adjame","Bingerville","Anyama","Abobo","Koumassi","Yopougon","Cocody","Marcory","Port-Bouet","Attecoube","Songon","Treichville","Plateau"];
let fileInput =ref(null);
const partiePolitiques = ref([]);
const pt_id = ref('');

const widget = window.cloudinary.createUploadWidget({
  cloud_name:"dmxpzyrnz",upload_preset:"mavoix"},
  (error,result)=>{
    if (!error && result && result.event === "success") {
      console.log("Done uploading ...",result.info);
      photo_url.value =result.info.url;
      selectedFileName = result.info.original_filename;
    }
  }
  )

  function OpenUploadWidget(){
  widget.open()
};


async function  getAllPartis(){
  let response = await axios.get('https://lesinnovateurs.me/api/public/parti-politiques');
  partiePolitiques.value= response.data.data;
  console.log(response.data.data);
}



function handleFileChange (event) {
      const selectedFile = event.target.files[0];
      console.log(selectedFile);
    
     if (selectedFile) {
        selectedFileName.value = selectedFile;
       photo_url.value = URL.createObjectURL(selectedFile);
       }
     };

    // Cleanup the URL when the component is unmounted
    watch(photo_url, (newUrl, oldUrl) => {
      if (oldUrl) {
        URL.revokeObjectURL(oldUrl);
      }
    });

  async  function AddCandidat(){
  // console.log('hello')
  // if (selectedFileName.value) {
        let data = new FormData();
        
          data.append('nom', nom.value);
          data.append('prenom',prenom.value);
          data.append('bio',bio.value);
          data.append('commune',commune.value);
          data.append('phone',phone.value);
          data.append('email',email.value);
          data.append('photo_url',photo_url.value);
          data.append('pt_id',pt_id.value.id);
          
          //  afficher les donnés de formData
          // for (let pair of data.entries()) {
          // console.log(pair[0] + ': ' + pair[1]);
          // }
     
       
        try {
          console.log(localStorage.getItem('userToken'));
          const response = await axios.post('https://lesinnovateurs.me/api/admin/add-candidat', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Accept:"application/json",
              Authorization:`Bearer ${localStorage.getItem("userToken")}`
            },
          });
          console.log('Image uploaded successfully!', response.data);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      

    }
    onMounted(() => {
      getAllPartis();
      // AddCandidat();
    }),
  




watch(photo_url, (newUrl, oldUrl) => {
      if (oldUrl) {
        URL.revokeObjectURL(oldUrl);
      }
    });
</script>

<template>
  <div>
    <!-- component -->
<div class="min-h-screen p-6 bg-gray-50 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <form @submit.prevent="AddCandidat()" enctype="multipart/form-data">
      <div>
        <h1 class="p-4 font-primary font-bold text-xl">Ajouter un Candidat</h1>

      <div   class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg mb-2">Photo du candidat</p>
            <div @click="OpenUploadWidget" v-if="!photo_url" class="flex items-center justify-center w-full">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">choissisez</span> ou glissez depossez</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
        </label>
    </div> 
    <img class="h-56 w-56" v-if="photo_url" :src="photo_url" alt="Selected Image" /> 
    

          </div>
          
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Nom </label>
                <input  
                v-model="nom"
                type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Prénom </label>
                <input  
                v-model="prenom"
                type="text" 
                  name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input   type="text"  v-model="email" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Image url </label>
                <input  
                disabled
                type="text" 
                  name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" :value="photo_url"  placeholder="Veillez selectionner une image "  />
              </div>

              <div class="md:col-span-5">
                <label for="address">Biographie</label>
                <!-- <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" /> -->
                <textarea v-model="bio" class="border mt-1 rounded px-4 w-full bg-gray-50 " name="" id="address" cols="15" rows="5"></textarea>
              </div>

              <div class="md:col-span-2">
                <label for="phone">Téléphone</label>
                <input  type="tel"  v-model="phone" name="phone" id="phone" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"   />
              </div>

              <div class="md:col-span-2">
                <label for="country">Commune</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select v-model="commune" class="w-full h-full " name="country" id="country">
                    <option v-for="(commune, index) in CommuneList" :key="index" >{{ commune }}</option>
                  </select>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="country">Partis politiques</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select v-model="pt_id"  class="w-full h-full ">
                    <option v-for="(partipolitique,index) in partiePolitiques" :value="{ id: partipolitique.id, text: partipolitique.name }" :key="index" > {{ partipolitique.nom }} </option>
                  </select>
                </div>
              </div>




              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input  type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">Accept les termes de condition.</label>
                </div>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button   class="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Ajouter</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    </form>

  </div>
</div>
  </div>
</template>

