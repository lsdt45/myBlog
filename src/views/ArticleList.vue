<template>
	<el-card class="main_lifeEssay_card">
		<template #header>
			<span>{{ title }} 下的文章:</span>
		</template>
		<article v-html="articleContent" class="markdown-body"></article>
		<div class="article-list-item" v-for="(article, index) in articleList" :key="article.id">
			<NewArticalListItem :item="article" />
			<!-- <ArticleListItem :item="article" :listType="listType" :listTitle="title" /> -->
			<!-- <el-divider v-if="showDiv(index)"></el-divider> -->
		</div>
		<div v-if="empty">
			<el-row justify="center">
				<el-empty description="这里空空如也"></el-empty>
			</el-row>
		</div>
	</el-card>
</template>


<script>
import ArticleListItem from "../components/pages/ArticleListItem.vue"
import NewArticalListItem from "@/components/pages/NewArticalListItem.vue"
export default {
	name: 'ArticleList',
	data() {
		return {
			key: '',
			articleContent: '',
			articleList: [],
			empty: false,
			url: '',
			title: '',
			titleList: {
				technology: { title: 'technology', text: '技术博文' },
				StudyNote: { title: 'StudyNote', text: '学习笔记' },
				LifeEssay: { title: 'LifeEssay', text: '生活随笔' },
				ResorceShare: { title: 'ResorceShare', text: '资源分享' }
			},
			listType: 'category'
		}
	},
	components: {
		ArticleListItem,
		NewArticalListItem
	},
	methods: {
		getArticleData(url) {
			this.axios.get(url)
				.then(res => {
					this.articleList = res.data
					// 列表为空时设置空状态图片
					if (this.articleList.length === 0) {
						this.empty = true
					} else {
						this.empty = false
					}
				})
				.catch(err => {
					console.error(err);
				})
		},
		showDiv(index) {
			return (index + 1) === this.articleList.length ? false : true
		},
		/**
		*   根据url中的title名转换成对应的标题名
		*/
		getTitle() {
			let index = this.url.lastIndexOf('/')
			let title_temp = this.url.substr(index + 1)
			switch (title_temp) {
				case this.titleList.technology.title:
					this.title = this.titleList.technology.text
					break;
				case this.titleList.StudyNote.title:
					this.title = this.titleList.StudyNote.text
					break;
				case this.titleList.LifeEssay.title:
					this.title = this.titleList.LifeEssay.text
					break;
				case this.titleList.ResorceShare.title:
					this.title = this.titleList.ResorceShare.text
					break;
				default:
					// 解决中文乱码问题
					this.title = decodeURI(title_temp)
			}
		},
		/**
		*   根据url判断list的类型
		*/
		getListType(url) {
			let arr = url.split('/').filter((str) => {
				return str.length != 0
			})
			if (arr[1] === 'search') {
				this.listType = 'search'
			} else {
				this.listType = 'category'
			}
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			vm.url = to.fullPath
			vm.getArticleData(vm.url)
			vm.getTitle()
			vm.getListType(vm.url)
		})
	},
	beforeRouteUpdate(to) {
		this.url = to.fullPath
		this.getArticleData(to.fullPath)
		this.getTitle()
	},
}
</script>


<style lang="scss">
.main_lifeEssay_card {
	position: relative;
	width: 100%;
	.article-list-item {
		margin-bottom: 7em;
	}
}

.cartHeader {
	display: flex;
	justify-content: space-between;
}
</style>