<template>
  <div class="edit-text" @click="changeDesc">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  name:'EditBanner',
  props:['left'],
  methods: {
    changeDesc(){
      this.$emit('changeDesc')
    }
  },
}
</script>

<style>
.edit-text{
  padding: 3.889vw 2.778vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.278vw solid #eeeeee;
  border-top: 0.278vw solid #eeeeee;
  color: #505050;
  font-size: 3.889vw;
}
</style>