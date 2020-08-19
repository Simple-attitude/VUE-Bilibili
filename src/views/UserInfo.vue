<template>
  <div class="UserInfo">
    <nav-bar></nav-bar>
    <img src="../assets/images/bannerTop_new.png" class="backImg">
    <user-detail :userInfo='model'></user-detail>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import userDetail from "@/components/userInfo/userDetail"
export default {
  name: "UserInfo",
  components: {
    NavBar,
    userDetail,
  },
  data () {
    return {
      model:{}
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo(){
      const res= await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model=res.data[0]
    }
  },
};
</script>

<style>
.UserInfo {
  background-color:white;
}
.backImg{
    height: 27.778vw;
    width: 100%;
}
</style>
