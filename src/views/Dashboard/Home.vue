<script setup>
import AllData from '@/Components/AllData.vue'
import ProvisorList from'@/Components/ProvisorList.vue'
import BarChart from '@/Components/ChartBar.vue';

</script>

<template>
  <div>
    			<div class="h-full">
				<AllData />

				<div class="flex  h-2/3 w-full ">
						<div class="h-1/3 w-2/3 bg-white rounded-lg mr-4">
							<BarChart />
						</div>

						<div class="h-full w-2/3 bg-white rounded-lg">
							<ProvisorList />
						</div>
				</div>
			</div>
  </div>
</template>

<script setup>

</script>