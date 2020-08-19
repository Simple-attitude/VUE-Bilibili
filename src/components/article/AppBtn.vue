<template>
  <div class="app-btn" @click="btnClick">
    App内打开，流畅又高清
  </div>
</template>

<script>
export default {
  name:'AppBtn',
  methods: {
    btnClick(){
      this.$msg.fail('此功能未实现，敬请期待！')
    }
  }
}
</script>

<style>
.app-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FB7299;
  padding:2.222vw  0;
  font-size: 4.444vw;
  border-radius: 5.556vw;
  margin: 2.778vw 4.167vw;
  color: white;
}
</style>