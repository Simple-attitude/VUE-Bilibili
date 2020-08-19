<template>
    <div class="LoginTop">
      <div></div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right" ></slot>
      </div>
    </div>
</template>

<script>
export default {
  name:'LoginTop',
  props:['middleTop']
}
</script>

<style>
  .LoginTop{
    height: 13.333vw;
    background-color: white;
    display: flex;
  }
  .LoginTop div{
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
</style>