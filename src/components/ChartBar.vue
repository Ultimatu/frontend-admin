<template>
  <canvas class="w-full h-full" id="myChart"></canvas>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import {Chart} from "chart.js"

onMounted(() => {
let myChart = new Chart("myChart",
{
  type:"bar",
  data:{
    labels:["Adama","Yasmine","Yacé","hemil"],
    datasets:[{
          type:"bar",
          backgroundColor:["blue","red"],
          data:[4,3]
        },
        //Second Bar (Optional)
        {
          type:"bar",
          data:[4,1],
          backgroundColor:["green","pink","orange"]
        }]
      },
      options:{
          responsive:false,
          maintainAspectRatio:false,
          plugins:{
            legend:{
                display:false
              },
              title:{
                display:false
              }
          }
      }
});

//Udate Chart
myChart.data.datasets[0].data[0] = 10;
myChart.update();
})
</script>