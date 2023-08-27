<template>
  <div class="p-4">
    <!-- Title -->
    <div class="flex justify-between mb-4">
      <h1 class="">Liste des candidats 2023</h1>
      <button class="flex items-center justify-center border  rounded-full mx-2">
        <span class="ml-2">Trier par:</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2 ml-2 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>

    <!-- candidats lisit -->
    <div  class=" ">
      <!-- items -->
      <div v-for="(candidat,index) in candidatsList" key="index"  class="w-full  p-2 flex items-center justify-between">
     <div class="flex items-center justify-center">
         <!-- Avatar -->
         <div :class="candidat.background" class="h-8 w-8  flex items-center justify-center rounded-full">
          {{ candidat.letter }}
        </div>
        <!-- FullName -->
        <h1 class="ml-4">{{candidat.fullName}}</h1>
     </div>
        <!-- point -->
        <span class="mr-2">{{candidat.point}} pts</span>
      </div>
    </div>
    
  </div>
</template>


<script setup>
  import {ref,onMounted} from 'vue';
  const candidatsList = ref([
    
{      letter:'A',fullName:"Adama Bictojgo",point:'120',"background":"bg-red-500",},
     {   letter:'B',fullName:"Jean Marc Yacé",point:'200',"background":"bg-red-500",},
    {  letter:'J',fullName:"Jasmina Ouen",point:'300',"background":"bg-green-500",},
    {  letter:'C',fullName:"Cissé Bacongo",point:'400',"background":"bg-blue-500",}
    
  ]);

  onMounted(() => {
    console.log(candidatsList.value);
  });


</script>
