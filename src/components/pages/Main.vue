<template>
	<div class="main">
		<NewArticalList />
		<!-- <router-view></router-view> -->
	</div>

</template>


<script>
import NewArticalList from "./NewArticalList.vue"
// import Me from "./Me.vue"
// import StudyNotes from "./StudyNotes.vue"
// import Recommend from "./Recommend.vue"
export default {
	name: 'Main',
	components: {
		NewArticalList,
		// Me,
		// StudyNotes,
		// Recommend,
	}
}
</script>


<style lang="scss" scoped>

</style>