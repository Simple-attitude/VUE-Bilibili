<template>
  <div class="article" v-if="model">
    <nav-bar></nav-bar>
    <div class="video">
      <video controls :src="model.content"></video>
    </div>
    <app-btn></app-btn>
    <article-detail :date='model.date' :username="model.username" :name='model.name' :title="model.title"></article-detail>
    <small-btn></small-btn>
    <commend></commend>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import AppBtn from '@/components/article/AppBtn'
import ArticleDetail from '@/components/article/ArticleDetail'
import SmallBtn from '@/components/article/SmallBtn'
import Commend from '@/components/article/Commend'

import {articleInfo} from '../network/articleInfo'

export default {
  name:'Article',
  components: {
    NavBar,
    AppBtn,
    ArticleDetail,
    SmallBtn,
    Commend
  },
  data() {
    return {
      model:{}
    }
  },
  created() {
    this.getVideo()
  },
  methods: {
    async getVideo(){
      const res=await this.$http.get(`/article/${this.$route.params.id}`)
      this.model=new articleInfo(res.data[0])
    }
  },
  watch: {
    $route(){
      this.getVideo()
    }
  },
}
</script>

<style>
.article{
  background-color: white;
}
.video{
  width: 100%;
}
.video video{
  width: 100%;
}
</style>