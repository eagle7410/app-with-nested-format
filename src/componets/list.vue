<template>
	<ul v-if="items.length">
		<li v-for="item in items">
			{{item.title}}
			<list v-if="item.childs.length" :items="item.childs"></list>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "list",
		props: {
			items: {
				type: Array,
				default: []
			}
		}
	}
</script>
