<script setup>
import { reactive, ref } from "vue";

// penggunaan ref yang direkomendasikan
// const red = ref(0);
// const green = ref(0);
// const blue = ref(0);

// refuntuk membuat nilai reaktif untuk tipe data primitif
// Mengakses nilai:
// console.log(color.value.red);
// Mengubah nilai:
// color.value.red = 255;
// inisiasi objek dalam ref:
// const color = ref({
// 	red: 0,
// 	green: 0,
// 	blue: 0,
// });

// reactive untuk menangani reaktivitas pada objek dan array
// Mengakses nilai:
// console.log(color.red);
// Mengubah nilai:
// color.red = 255
// inisiasi objek dalam reactive:
const color = reactive({
	red: 0,
	green: 0,
	blue: 0,
});
</script>

<template>
	<main
		:style="{
			backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
		}"
	>
		<div>
			<input
				type="number"
				placeholder="red"
				v-model="color.red"
				id=""
			/>
			<input
				type="number"
				placeholder="green"
				v-model="color.green"
				id=""
			/>
			<input
				type="number"
				placeholder="blue"
				v-model="color.blue"
				id=""
			/>
		</div>
	</main>
</template>

<style scoped>
main {
	background-color: rgb(122, 50, 255);
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

div {
	display: flex;
	flex-direction: column;
}
</style>
