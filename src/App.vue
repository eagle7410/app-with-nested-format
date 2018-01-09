<template>
	<nested-store :items="items"></nested-store>
</template>

<script>
	import api from './api/items';
	import NestedStore from "./componets/nestedStore.vue";

	export default {
		components: {
			NestedStore,
		},

		data: function () {
			return {
				items: []
			}
		},

		created: function () {
			const that = this;

			api.get()
				.then(items => that.items = items)
				.catch(err => console.error('Api get items error', err));
		}
	}
</script>
