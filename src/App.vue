<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
        <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<style lang="scss">
  body{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #F4F4F4;
  }
</style>