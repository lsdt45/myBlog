<template>
	<div class="article-list-item__wrapper">
		<div class="articleItem">
			<el-card>
				<img class="itemImg" :src="imgUrl">
				<!-- <img class="itemImg" :src="`public/static/image/background/${props.item.coverPath}`"> -->
				<!-- <img class="itemImg" src="@/assets/image/background/背景图1.jpeg"> -->
				<header>
					<router-link :to="'/article/' + props.item.id">
						<h3>{{ props.item.title }}</h3>
					</router-link>
				</header>
				<p>{{ props.item.Introduction }}</p>
			</el-card>
		</div>
	</div>
</template>


<script lang="ts" setup>
import { defineProps } from 'vue';
import { ref, Ref, onMounted } from 'vue'
const props = defineProps({
	item: {
		type: Object,
		default: () => { }
	}
})

let imgUrl = ref('')
onMounted(() => {
	// imgUrl.value = `@/assets/image/background/${props.item.coverPath}`
	imgUrl.value = new URL(`../../assets/image/background/${props.item.coverPath}`, import.meta.url).href
})

</script>


<style lang="scss" scoped>
.articleItem {
	* {
		padding: 0;
		margin: 0;
	}
	.articleItem {
		display: flex;
	}
	width: 100%;
	height: 300px;
	margin-bottom: 4em;

	p {
		width: 100%;
		margin-top: 10px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 6;
		overflow: hidden;
	}

	.itemImg {
		width: 100%;
		height: 250px;
		// border: 1px solid gray;
	}

	h3 {
		color: #3a76bf;
	}
}
</style>