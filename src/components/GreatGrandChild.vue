<script setup>
// import { inject } from "vue";
// const numbers = inject("numbers");
import { useNumbers } from "../stores/numbers.js";
const { numbers } = useNumbers();
</script>

<template>
	<div>
		<h1>Great Grand Child</h1>
		{{ numbers }}
	</div>
</template>
