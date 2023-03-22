<template>
  <div class="leftnavigation__wrapper">
    <div class="leftnavigation__container">
      <div class="heads-area">
        <img src="../../../assets/avatar.png" alt="avatar" class="header-img" />
        <span class="name">莫诺库洛</span>
        <span class="sign">临渊羡鱼不如退而结网</span>
      </div>
      <div class="leftnavigation__navigation">
        <span class="title">导航</span>
        <ul class="navigatio-list">
          <li>
            <router-link to="/main">
              <span class="iconfont icon-wode"></span> 首页
            </router-link>
          </li>
          <li>
            <router-link to="/articleList/technology">
              <span class="iconfont icon-jishufuwu"></span> 技术博文
            </router-link>
          </li>
          <li>
            <router-link to="/articleList/StudyNote">
              <span class="iconfont icon-register"></span> 学习笔记
            </router-link>
          </li>
          <li>
            <router-link to="/articleList/LifeEssay">
              <span class="iconfont icon-wode"></span> 生活随笔
            </router-link>
          </li>
          <li>
            <router-link to="/articleList/ResorceShare">
              <span class="iconfont icon-ziyuan"></span> 资源分享
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="iconfont icon-wode"></span> 关于我
            </router-link>
          </li>
        </ul>
      </div>
      <div class="leftnavigation__composition">
        <span class="title">组成</span>
        <el-menu class="composition-menu" background-color="#F9F9F9">
          <el-sub-menu index="1">
            <template #title>
              <span>标签分类</span>
            </template>
            <el-menu-item v-for="(item, index) in labelList" :key="index">
              <router-link :to="'/articleList/label/' + item"> {{ item }}
              </router-link>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>页面</span>
            </template>
            <el-menu-item>
              时光机
            </el-menu-item>
            <el-menu-item>
              文章归档
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/assets/ts/request/api'
import { ref, onMounted } from 'vue'
let labelList = ref([])

/**
 * description: 获取标签列表
 * @createTime: 2023-3-10
 */
function getLabelList() {
  api.get('/getAllArticleLabel').then(resp => {
    labelList.value = resp.data
  })
}
onMounted(() => {
  getLabelList()
})
</script>

<style lang="scss">
.leftnavigation__wrapper {
  grid-area: 2 / 1 / span 1 / span 1;
  background-color: $component-bgcolor;

  // margin-top: 10px;
  .heads-area {
    .header-img {
      display: block;
      margin: 0 auto;
      width: 96px;
      height: 96px;
      border-radius: 50%;
    }

    .sign,
    .name {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      text-align: center;
      color: #999;
    }

    .name {
      font-weight: bold;
      color: #333;
    }
  }

  .leftnavigation__container {
    position: sticky;
    top: 5.2em;
  }

  .leftnavigation__navigation {
    margin-top: 1em;

    a {
      color: #666;

      &:visited {
        color: #666;
      }
    }

    .navigatio-list {
      margin-top: 5px;

      li {
        padding: 10px 0;
      }
    }

    .title {
      margin-left: 1em;
      font-size: 12px;
      color: #999;
    }
  }

  .leftnavigation__composition {
    .title {
      margin-left: 1em;
      font-size: 12px;
      color: #999;
    }

    .el-menu-item {
      background-color: #fff;
    }

    a {
      color: #666;

      &:visited {
        color: #666;
      }
    }
  }

  .iconfont {
    color: $main-color-icon;
  }
}
</style>
