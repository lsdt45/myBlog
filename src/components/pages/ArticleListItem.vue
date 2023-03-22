<template>
	<div class="article-list-item__wrapper">
		<!-- 这里是分类的显示列表 -->
		<article class="articleItem" v-if="getListType">
			<el-row :gutter="50">
				<el-col :span="7">
					<div class="itemImg"></div>
				</el-col>
				<el-col :span="17" class="articleDescription">
					<header>
						<router-link :to="'/article/' + item.id">
							<h3>{{ item.title }}</h3>
						</router-link>
					</header>
					<p>{{ item.Introduction }}</p>
				</el-col>
			</el-row>
		</article>
		<!-- 这里是搜索结果的显示列表 -->
		<article class="articleItem" v-if="!getListType">
			<el-row :gutter="50">
				<el-col :span="7">
					<div class="itemImg"></div>
				</el-col>
				<el-col :span="17" class="articleDescription">
					<header>
						<router-link :to="'/article/' + item.id" v-html="getKeyTitle()"></router-link>
					</header>
					<p>
						<span v-text="preParagraph"></span>
						<span v-html="middleParagraph"></span>
						<span v-text="postParagraph"></span>
					</p>
				</el-col>
			</el-row>
		</article>
	</div>
</template>


<script>
export default {
	name: 'ArticleListItem',
	data() {
		return {
			isEmpty: false,
			keyTitle: '',
			keyParagraph: '',
			sub_listTitle: this.listTitle,
			preParagraph: '',
			postParagraph: '',
			middleParagraph: ''
		}
	},
	props: {
		item: {
			type: Object,
			default: () => { }
		},
		listTitle: {
			type: String,
			default: ''
		},
		listType: {
			type: String,
			default: ''
		}
	},
	computed: {
		/**
		*   判断list的类型
		*/
		getListType() {
			return this.listType === 'category' ? true : false
		},

	},
	methods: {
		/**
		*   在文章的标题中,将搜索的关键字着重显示,然后渲染到页面中。
		*/
		getKeyTitle() {
			let index = this.item.title.indexOf(this.listTitle);
			let preTitle, postTitle = '';
			// 如果title存在
			if (index != -1) {
				let startPos = index;
				let endPos = this.listTitle.length;
				// 若匹配的关键字从0开始
				if (startPos === 0) {
					postTitle = this.item.title.slice(endPos,);
					this.keyTitle = `<h3><span style="background: yellow">${this.listTitle}</span>${postTitle}</h3>`;
				}
				// 若匹配的关键字从非0开始
				else {
					preTitle = this.item.title.slice(0, startPos);
					postTitle = this.item.title.slice(startPos + endPos,);
					this.keyTitle = `<h3>${preTitle}<span style="background: yellow">${this.listTitle}</span>${postTitle}</h3>`;
				}
			}
			// 如果title不存在,则直接使用原title
			else {
				this.keyTitle = `<h3>${this.item.title}</h3>`;
			}
			return this.keyTitle
		},
		/**
		*   在文章的内容中,将搜索的关键字着重显示,然后渲染到页面中。
		*   只显示第一段匹配的内容。
		*/
		getkeyParagraph() {
			let index = this.item.content.indexOf(this.sub_listTitle);
			let startPos = 0, endPos = 0;
			let proOffset = 0, postOffset = 0;
			// let preParagraph = '', postParagraph = '';
			for (let i = index; i > 0; i--, proOffset++) {
				if (this.item.content[i - 1] === '\n' || this.item.content[i - 1] === '') {
					startPos = i;
					console.log('startPos=' + startPos);
					break;
				}
			}
			for (let j = index; j < this.item.content.length; j++, postOffset++) {
				// console.log(this.item.content[j]);
				if (this.item.content[j] === '\n' || this.item.content[j] === '') {
					endPos = j;
					// console.log('endPos=' + endPos);
					break;
				}
			}
			this.preParagraph = this.item.content.slice(startPos, startPos + proOffset);
			// console.log(preParagraph);
			this.postParagraph = this.item.content.slice(index + this.sub_listTitle.length, endPos);
			this.middleParagraph = `<b style="background: yellow">${this.sub_listTitle}</b>`
			// this.keyParagraph = `${preParagraph}<b style="background: yellow">${this.sub_listTitle}</b>${postParagraph}`;
			// this.keyParagraph = `<option  value="<b style="background: yellow">${this.sub_listTitle}</b>${postParagraph}`;
			// return this.keyParagraph;
		},

	},
	beforeRouteEnter() {
		this.getkeyParagraph();
	},
	beforeRouteUpdate() {
		this.getkeyParagraph();
	},
}
</script>


<style lang="scss">
.article-list-item__wrapper {
	.articleItem {
		// * {
		// 	padding: 0;
		// 	margin: 0;
		// }
	
		width: 95%;
		height: 140px;
		margin-bottom: 10px;
	
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
			height: 160px;
		}
	
		h3 {
			margin: 0;
			color: #3a76bf;
		}
	}
}
</style>