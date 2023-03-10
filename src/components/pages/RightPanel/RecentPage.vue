<template>
  <div class="recent-page__wrapper">
    <el-tabs v-model="activeName" :stretch="true">
      <el-tab-pane name="hotArticle">
        <template #label>
          <span class="iconfont icon-zuixinwenzhang_huaban"></span>
        </template>
        <section class="article-section" v-for="item in articleList" :key="item.id">
          <div class="article-icon">
            <img class="title-icon" src="@/assets/image/橙子.png">
          </div>
          <div class="article-section-right">
            <header class="article_header">
              <h4 @click="toSpecifyArticle(item)">{{ item.title }}</h4>
            </header>
            <footer class="article_footer">
            <div class="read-container">
              <span class="iconfont icon-yuedu"></span>
              <span class="read-text"> {{ item.readNum }}</span>
            </div>
            <div class="comment-container">
              <span class="iconfont icon-pinglun1"></span>
              <span class="comment-text">{{ item.commentNum }}</span>
            </div>
            </footer>
          </div>
        </section>
      </el-tab-pane>
      <el-tab-pane name="recentComment">
        <template #label>
          <span class="iconfont icon-pinglun1"></span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router';
import { Article } from '@/types/common'
const activeName = ref('hotArticle')
let articleList = ref<Article[]>([])

function getHotArticle() {
  axios.get('/getHotArticle').then(resp => {
    articleList.value = resp.data
  })
}

/**
 * description: 跳转至指定的文章页面
 * @param item - 文章对象.
 * @createTime: 2022-11-27 12:18:53
 */
function toSpecifyArticle(item: Article) {
  router.push('/article/' + item.id)
}

onMounted(() => {
  getHotArticle()
})

</script>


<style lang="scss">
.recent-page__wrapper {

  .icon-zuixinwenzhang_huaban,
  .icon-pinglun1 {
    font-size: 32px;
  }

  #tab-hotArticle {
    padding-left: 20px;
  }

  .article-section {
    // display: grid;
    // grid-template-columns: auto auto auto;
    display: flex;
    height: 48px;
    padding: 15px 10px;
    .article_header {
      // grid-column: 2 / 4;
    }
    .article-section-right {
      margin-left: 10px;
    }
    .iconfont {
      position: relative;
      top: 10px;      
      font-size: 16px;
    }
    .read-text, .comment-text {
      position: relative;
      top: 10px;
      margin-left: 5px;
    }
    .icon-pinglun1 {
      margin-left: 10px;
    }
    .article_footer {
      display: flex;
    }
    .title-icon {
      // grid-row: 1/3;
    }

    h4 {
      margin: 0;
      color: #777;
      cursor: pointer;
    }
  }
  .el-tabs__active-bar {
    // width: 50px !important;
    // left: 38px;
  }
}
</style>