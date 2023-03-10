<template>
	<div class="new-article-list__wrapper">
		<div class="new-article-list__header">
			<span>最新文章</span>
			<el-button class="more" type="text">更多></el-button>
		</div>
		<div class="new-article-list__body">
			<div class="new-article-list-item" v-for="(article, index) in articleList" :key="article.id">
				<NewArticalListItem :item="article" />
				<!-- <el-divider v-if="showDiv(index)"></el-divider> -->
			</div>
		</div>
	</div>
</template>


<script>
import NewArticalListItem from "./NewArticalListItem.vue";
export default {
	name: 'NewArticalList',
	components: {
		NewArticalListItem
	},
	data() {
		return {
			key: '',
			articleContent: '',
			articleList: []
		}
	},
	methods: {
		showDiv(index) {
			return (index + 1) === this.articleList.length ? false : true
		}
	},
	created() {
		this.axios.get('/getArticle')
			.then(res => {
				this.articleList = res.data
			})
			.catch(err => {
				console.error(err);
			})
	},
}
</script>


<style lang="scss">
.new-article-list__wrapper {
	padding: $page-padding;
	background-color: white;
}
.new-article-list__header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	.more {
		position: relative;
    top: -3px;
	}
}

.cartHeader {
	display: flex;
	justify-content: space-between;
}
</style>