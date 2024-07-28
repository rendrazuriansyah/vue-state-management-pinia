import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
	state: () => ({
		numbers: [11, 12, 13, 14, 15],
	}),
});
