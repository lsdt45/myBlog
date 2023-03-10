<template>
  <div id="blogHeader">
	<header>
		<router-link to="/main"><h1>莫诺库洛的小屋</h1></router-link>
		<router-link to="/articleList/technology" class="headerTitle">
		技术博文
		</router-link>
		<router-link to="/articleList/StudyNote" class="headerTitle">
		学习笔记
		</router-link>
		<router-link to="/articleList/LifeEssay" class="headerTitle">
		生活随笔
		</router-link>
		<router-link to="/articleList/ResorceShare" class="headerTitle">
		资源分享
		</router-link>
		<router-link to="/articleList/MessageBoard" class="headerTitle">
		留言板
		</router-link>
		<router-link to="/" class="headerTitle">
		关于我
		</router-link>
	</header>
  </div>
</template>
<script>
export default {
  name: "HeaderTitle",
  components: {
	
  },
  data() {
	return {
		
	};
  }
};
</script>
<style scoped>
	* {padding: 0; margin: 0;}
	
	#blogHeader {
		
	}
	#blogHeader header {
		display: flex;
		position: relative;
		justify-content: center;
		padding: 20px;
	}
	#blogHeader h1 {
		position: relative;
		top: -5px;
		margin-right: 60px;
		font-size: 24px;
		color: rgb(56, 138, 170);
	}
	.headerTitle~.headerTitle {
		margin-left: 30px;
	}
	

	.headerTitle {
		transition: all .3s linear;
		border-bottom: 2px solid #f8f8fa;
	}
	.headerTitle:hover {
		border-bottom: 2px solid #1d73c9;
	}
	
</style>
