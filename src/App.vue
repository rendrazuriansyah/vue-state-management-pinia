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

function generateColor() {
	// akses dengan ref
	// red.value = Math.floor(Math.random() * 255);
	// green.value = Math.floor(Math.random() * 255);
	// blue.value = Math.floor(Math.random() * 255);

	// akses dengan reactive
	color.red = Math.floor(Math.random() * 255);
	color.green = Math.floor(Math.random() * 255);
	color.blue = Math.floor(Math.random() * 255);
}

const refValue = ref("Hello, refValue!"); // klo si ref dijadiin objek maka gabisa diganti valuenya
const reactiveValue = reactive({
	greeting: "Hello, reactiveValue!",
});

refValue.value = true;
reactiveValue.greeting = false;

console.log("ref value", refValue);
console.log("reactive value", reactiveValue);
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
			<button @click="generateColor()">Generate</button>
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
