<template>
  <div>
    <div class="conetnt">
      <div class="logo">
        <img :src="userInfo.user_img" v-if="userInfo.user_img" alt="" />
        <img v-else src="@/assets/images/default_img.jpg" />
      </div>
      <div class="content-right">
        <div class="content-items">
          <div>
            <span class="item">1</span>
            <span class="item item-text">粉丝</span>
          </div>
          <div>
            <span class="item">115</span>
            <span class="item item-text">关注</span>
          </div>
          <div>
            <span class="item">0</span>
            <span class="item item-text">获赞</span>
          </div>
        </div>
        <div @click="$router.push('/editDesc')">
          <div class="btn-text">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="user-desc">
      <div>
        <div class="name">{{ userInfo.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg style="position:relative; top:3px;" t="1597399774050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1055" width="26" height="26"><path d="M732.8 617.6h108.8V544h-108.8v73.6z m201.6-326.4h-291.2c-16 0-25.6 12.8-25.6 25.6v19.2H89.6c-16 0-25.6 12.8-25.6 25.6V704c0 16 12.8 25.6 25.6 25.6h841.6c16 0 25.6-12.8 25.6-25.6V316.8c3.2-12.8-9.6-25.6-22.4-25.6zM307.2 662.4c0 9.6-9.6 19.2-19.2 19.2H137.6c-9.6 0-19.2-9.6-19.2-19.2v-252.8c0-9.6 9.6-19.2 19.2-19.2h25.6c9.6 0 19.2 9.6 19.2 19.2v208h108.8c9.6 0 19.2 9.6 19.2 19.2v25.6z m272-99.2v6.4c0 6.4 0 12.8-3.2 16l-89.6 89.6c-6.4 6.4-22.4 6.4-22.4 6.4s-16 0-22.4-6.4L352 585.6c-6.4-3.2-6.4-12.8-3.2-19.2V409.6c0-9.6 9.6-19.2 19.2-19.2h25.6c9.6 0 19.2 9.6 19.2 19.2v147.2l54.4 54.4 54.4-54.4v-144c0-9.6 9.6-19.2 19.2-19.2h25.6c9.6 0 19.2 9.6 19.2 19.2v150.4z m326.4-172.8c0 9.6-9.6 19.2-19.2 19.2h-153.6V480h153.6c9.6 0 19.2 9.6 19.2 19.2v163.2c0 9.6-9.6 19.2-19.2 19.2h-198.4c-9.6 0-19.2-9.6-19.2-19.2v-297.6c0-9.6 9.6-19.2 19.2-19.2h198.4c9.6 0 19.2 9.6 19.2 19.2v25.6z" fill="#FF0000" p-id="1056"></path></svg></div>
        <div class="desc" v-if="userInfo.user_desc">
          {{ userInfo.user_desc }}
        </div>
        <div class="desc" v-else>这个人什么也没留下</div>
      </div>
      <div class="info">
        <span @click="changeClass" :class="{ active: isActive }"
          >动态&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
        <span @click="changeClass" :class="{ active: !isActive }">视频</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      isActive: true,
    };
  },
  props: ["userInfo"],
  methods: {
    changeClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.conetnt {
  height: 32.111vw;
  width: 100%;
  margin: 0;
  padding: 1.389vw;
  display: flex;
}
.conetnt .logo {
  height: 30.556vw;
}
.conetnt .logo img {
  width: 30.556vw;
  height: 30.556vw;
  border-radius: 15.278vw;
}
.conetnt div {
  flex: 1;
}
.content-right {
  margin-top: 6.944vw;
}
.content-items {
  display: flex;
}
.content-items div {
  flex: 1;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin-right: 20%;
}
.content-items div .item {
  display: block;
  font-size: 3.889vw;
}
.content-items div .item-text {
  font-size: 2.778vw;
  color: #999999;
}
.btn-text {
  flex: 1;
  margin-top: 5.556vw;
  width: 41.667vw;
  border: 0.139vw solid #fb7299;
  text-align: center;
  font-size: 3.333vw;
  height: 5.556vw;
  border-radius: 1.389vw;
  color: #fb7299;
}
.user-desc {
  margin-left: 5vw;
}
.name {
  font-size: 6.111vw;
}
.desc {
  color: #999999;
  font-size: 3.889vw;
  margin-top: 2.222vw;
}
.info {
  border-top: 0.139vw solid #e7e7e7;
  padding: 2.778vw;
  border-bottom: 0.139vw solid #e7e7e7;
  font-size: 4.444vw;
}
.active {
  color: #fb7299;
}
</style>
