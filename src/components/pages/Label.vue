<template>
	<div class="Label">
		<el-card>
			<p>标签</p>
			<router-link v-for="(label, index) in labelList" :to="'/articleList/label/' + label" class="labelStyle" :key="index"
				:style="{ background: color(index) }">{{ label }}
			</router-link>
		</el-card>
	</div>
</template>


<script>
export default {
	name: 'Label',
	data() {
		return {
			article: {},
			labelList: [],
			colorList: ['rgb(145, 159, 245)', 'rgb(171, 182, 245)',
				'rgb(93, 189, 231)', '#6b7ceb']
		}
	},
	props: {
		item: {
			type: Object,
			default: () => { }
		}
	},
	methods: {
		sepLabels() {
			this.labelList = this.item.label.split(',')
		},
		color(index) {
			if (index > this.colorList.length)
				index %= 4
			return this.colorList[index]
		}
	},
	watch: {
		item: function (newVal) {
			this.article = newVal
			this.sepLabels()
		}
	}
}
</script>


<style lang="scss" scoped>
.label {
	width: 20%;

	.labelStyle {
		font-size: 12px;
		border-radius: 12px;
		color: white;
		// background: rgb(145, 159, 245);
		padding: 3px 7px 3px 7px;
	}

	.el-card {
		p {
			margin-top: 0;
		}

		a {
			margin-right: 5px;
		}
	}
}
</style>