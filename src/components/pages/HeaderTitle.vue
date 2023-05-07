<!-- @format -->

<template>
	<div class="main-header">
		<header>
			<router-link class="header-home-name" to="/main">
				<div class="iconfont icon-home2"></div>
				<h1>莫诺库洛的小屋</h1>
				<SearchBox />
			</router-link>
		</header>
	</div>
</template>
<script lang="ts" setup>
import SearchBox from '@/components/common/SearchBox.vue'

</script>

<style scoped lang="scss">
* {
	padding: 0;
	margin: 0;
}

.main-header {
	display: flex;
	position: relative;
	justify-content: space-between;
	.header-home-name {
		display: flex;
		align-items: center;
		.icon-home2 {
			position: relative;
			top: -5px;
			color: $main-color;
			font-size: 1.8em;
		}
	}
}
.main-header header {
	display: flex;
	position: relative;
	justify-content: center;
	padding: 0 20px;
	height: 50px;
}
.main-header h1 {
	position: relative;
	top: -5px;
	font-size: 24px;
	flex-basis: 58%;
	color: $main-color;
}
.headerTitle ~ .headerTitle {
	margin-left: 30px;
}

.headerTitle {
	transition: all 0.3s linear;
	border-bottom: 2px solid #f8f8fa;
}
.headerTitle:hover {
	border-bottom: 2px solid #1d73c9;
}
</style>
