<script setup>
import Sidebar from '@/Components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';




</script>

<template>

	<!-- main div -->
	<div class="w-screen h-screen ">
		<div class="bg-gray-50 h-full w-full border flex    p-6  ">
		<!-- Sidebar -->
		<div class="h-full w-80 bg-white shadow rounded-lg ">
			<Sidebar />
		</div>
		<!-- NavBar and viewRouter -->
		<div class="w-full h-full ml-4  overflow-y-auto  ">
			<!-- Navbar -->
			<div class="bg-white shadow-md w-full h-16 rounded-lg mb   ">
				<NavBar class=" w-full  " />
			</div>
			<!-- RouterView -->
			<div class="">
				<router-view></router-view>
			</div>
			
		

		</div>
	</div>
	</div>

</template>

<style>
</style>