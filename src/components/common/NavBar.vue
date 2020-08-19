<template>
  <div class="NavBar">
    <div class="left">
      <img src="@/assets/images/logo.png" @click="backMain()"  alt="" />
    </div>
    <div class="center">
      <van-icon name="search" @click="$msg.fail('此功能未实现，敬请期待')" />
    </div>
    <div class="right">
      <div @click="backUserInfo()">
        <img :src="urlImg" v-if="urlImg" alt="" />
        <img src="@/assets/images/default_img.jpg" v-else alt="" />
      </div>
      <div class="app">
        <span>下载APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      urlImg: "",
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      if(localStorage.getItem('token')){
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.urlImg = res.data[0].user_img;
      }
    },
    backMain(){
     if(this.$route.path!=`/home`){
       this.$router.push('/home')
     }
    },
    backUserInfo(){
      if(this.$route.path!='/editDesc'){
        this.$router.push('/editDesc')
      }
    }
  },
};
</script>

<style>
.NavBar {
  height: 14.444vw;
  background-color: white;
  display: flex;
}
.left {
  flex: 1;
}
.left img {
  height: 12.222vw;
}
.center {
  display: flex;
  flex: 0.3;
  margin-left: 30%;
  font-size: 6.944vw;
  justify-items: center;
  align-items: center;
}
.right {
  flex: 1;
  display: flex;
  justify-items: center;
  align-items: center;
}
.right img {
  width: 6.944vw;
  height: 6.944vw;
  border-radius: 3.472vw;
}
.right .app {
  background-color: #fb7299;
  height: 6.667vw;
  width: 19.444vw;
  color: white;
  font-size: 3.333vw;
  border-radius: 0.833vw;
  margin-left: 5%;
  text-align: center;
  line-height: 6.667vw;
}
</style>
