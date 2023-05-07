<!-- @format -->

<template>
	<div class="searchbox__wrapper">
		<el-autocomplete
			v-model="searchKeyWord"
			placeholder="请输入关键词"
			popper-class="search-popper"
			:fetch-suggestions="querySearch"
			debounce="1000"
			fit-input-width>
			<template #suffix>
				<el-icon class="el-input__icon">
					<Search />
				</el-icon>
			</template>
			<template #default="{ item }">
				<div class="result-item">
					<div class="title" v-html="item.highlighted_fields[0]"></div>
					<p class="content" v-html="item.highlighted_fields[1]"></p>
				</div>
			</template>
		</el-autocomplete>
	</div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import api from '@/assets/ts/request/api'

const searchKeyWord = ref('')
const querySearch = (queryString: string, cb: Function) => {
	api.get('/article_search/', { q: queryString }).then((res) => {
		cb(res)
	})
}
</script>

<style lang="scss">
.searchbox__wrapper {
}
.search-popper {
	width: 350px;
	.highlighted {
		color: blue;
	}

	.content{
    height: 2em;
    text-overflow: ellipsis;
    overflow: hidden;
		line-height: 1.5em;
		margin: 0;
	}
}
</style>
