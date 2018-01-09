<template>
	<list :items="tree"></list>
</template>

<script>
	import List from './list.vue'
	import nested2tree from '../utils/nested2tree'

	export default {
		name: "nested-store",
		props: {
			items: {
				type: Array,
				default: []
			}
		},
		components: {
			List
		},

		computed : {
			tree : function () {
				return nested2tree(this.items)
			}
		}
	}
</script>

<style scoped>

</style>
