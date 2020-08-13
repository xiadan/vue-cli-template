<template lang="pug">
	.hello {{msg}}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	computed: mapGetters({
		version: 'getVersion',
		testVal: 'getTestVal'
	}),
	created() {
		this.$store.dispatch('setTestVal', true)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h3
	margin: 40px 0 0

ul
	list-style-type: none
	padding: 0

li
	display: inline-block
	margin: 0 10px

a
	color: #42b983

</style>
