<script setup>
// import { inject } from "vue";
// const numbers = inject("numbers");
import { useNumbers } from "../stores/numbers.js";
const { numbers, filterNumber } = useNumbers();
</script>

<template>
	<div>
		<h1>Great Grand Child</h1>
		{{ filterNumber(13) }}
	</div>
</template>
