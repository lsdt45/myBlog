<!-- @format -->

<template>
	<el-container class="articleContentWrapper">
		<el-header class="header">
			<Header></Header>
		</el-header>
		<div class="article-content-body">
			<div class="label">
				<el-aside>
					<Label :item="article" />
				</el-aside>
			</div>
			<div class="articleContent">
				<el-main>
					<el-card class="mainContent">
						<template #header>
							<el-row>
								<el-page-header title="首页" content="技术分享" @back="goback()" />
							</el-row>
							<el-row>
								<h3>{{ article.title }}</h3>
							</el-row>
							<el-row>
								<div class="articleInfo">
									<img src="../../assets/avatar.png" alt="myAvatar" class="myAvatar" />
									<span class="author">莫诺库洛</span>
									<span>发表时间: {{ getNewPostDate }}</span>
									<span>点赞数: {{ article.likeNum }}</span>
									<span>评论数: {{ article.commentNum }}</span>
								</div>
							</el-row>
							<el-row>
								<el-card shadow="never">简介:{{ article.Introduction }}</el-card>
							</el-row>
						</template>
						<el-main>
							<article id="content" v-html="articleContent" class="markdown-body"></article>
						</el-main>
						<el-divider border-style="dashed"></el-divider>
						<el-card shadow="hover">
							<p>注：本文作者：莫诺库洛 发表，其版权均为作者所有，如需转载请注明文章出处及作者。</p>
						</el-card>
						<div class="likeBtn__wrapper">
							<div class="like-btn">
								<span :class="{ numUp: clicked }">+1</span>
								<el-button type="primary" @click="giveLike()" :disabled="clicked">{{ btnText }}</el-button>
							</div>
						</div>
					</el-card>
				</el-main>
			</div>
			<div class="aside">
				<el-aside>
					<VueSideDir :container="ContainerProps" />
				</el-aside>
			</div>
		</div>
	</el-container>
	<el-backtop></el-backtop>
</template>

<script lang="ts">
import 'highlight.js/styles/vs2015.css';
import 'github-markdown-css';
import { marked } from 'marked';
import hljs from 'highlight.js';
import VueSideDir from './VueSideDir.vue';
import Label from './Label.vue';
import Header from '@/components/pages/Header.vue';
export default {
	name: 'ArticleContent',
	data() {
		return {
			key: 'value',
			article: {},
			articleContent: '',
			defaultOpen: 'preview',
			ContainerProps: 'content',
			postDate: '',
			clicked: false,
			btnText: '点赞',
			// toolbars: {
			//     bold: true, // 粗体
			//     italic: true, // 斜体
			//     header: true, // 标题
			//     underline: true, // 下划线
			//     mark: true, // 标记
			//     superscript: true, // 上角标
			//     quote: true, // 引用
			//     ol: true, // 有序列表
			//     link: true, // 链接
			//     imagelink: true, // 图片链接
			//     help: true, // 帮助
			//     code: true, // code
			//     subfield: false, // 是否需要分栏
			//     fullscreen: false, // 全屏编辑
			//     readmodel: true, // 沉浸式阅读
			//     /* 1.3.5 */
			//     undo: true, // 上一步
			//     trash: true, // 清空
			//     save: true, // 保存（触发events中的save事件）
			//     /* 1.4.2 */
			//     navigation: true, // 导航目录
			//     defaultOpen: 'preview'
			// }
		};
	},
	components: {
		VueSideDir,
		Label,
		Header,
		// Footer
	},
	methods: {
		/**
		 * description: 获取文章内容
		 * @param {string} url - 目标文章的地址.
		 * @createTime:
		 */
		getArticle(url) {
			let index = url.lastIndexOf('/');
			let articleId = url.slice(index + 1);
			this.axios
				.get(url)
				.then((res) => {
					if (res.status === 200) {
						this.article = res.data;
						marked.use({
							renderer: new marked.Renderer(),
							highlight: function (articleContent) {
								return hljs.highlight(articleContent, { language: 'javascript' }).value;
							},
							pedantic: false,
							gfm: true,
							tables: true,
							breaks: false,
							sanitize: false,
							smartLists: true,
							smartypants: false,
							xhtml: false,
						});
						this.articleContent = marked.parse(this.article.content);
						this.postDate = this.article.addDate;
						this.updateReadNum(articleId);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		updateReadNum(id: number) {
			this.axios.put('/article/updateNum/', { id, type: 'read' }).then((resp) => {});
		},
		/**
		 *   返回主页面
		 */
		goback() {
			this.$router.push('/');
		},
		/**
		 *   获得点赞
		 */
		giveLike() {
			let param = {
				id: this.$route.params.id,
				type: 'like',
			};
			this.axios.put('/article/updateNum/', param).then((resp) => {
				this.article.likeNum++;
				this.clicked = true;
				this.btnText = '感谢';
			});
		},
	},
	computed: {
		getNewPostDate() {
			let index = this.postDate.indexOf('T');
			return this.postDate.slice(0, index);
		},
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			let url = to.fullPath;
			vm.getArticle(url);
		});
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/articleContentWrapper.scss';
</style>
