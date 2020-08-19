<template>
  <div class="swipe">
    <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/images/swipe_1.jpg" alt="" height="100%" width="100%" srcset="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/swipe_2.jpg" alt="" height="100%" width="100%" srcset="">
      </van-swipe-item>
      <van-swipe-item> 
        <img src="@/assets/images/swipe_3.jpg" alt="" height="100%" width="100%" srcset="">
        </van-swipe-item>
      <van-swipe-item>
         <img src="@/assets/images/swipe_4.jpg" alt="" height="100%" width="100%" srcset="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {

  name:'swipe'
}
</script>

<style>
.swipe{
  margin: 2.778vw 5.556vw;
  width: auto;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 5.556vw;
    line-height: 41.667vw;
    text-align: center;
    background-color: #39a9ed;
    height: 41.667vw;

  }
</style>