<template>
  <div>
    <van-field  
    :label="lable"
    :type="type"
    :placeholder='placeholder'
    v-model="content"
     />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content:''
    }
  },
  methods: {
    handlerulg(){     
      this.$emit('inputChange',this.content )
    }
  },
  name:'LoginText',
  props:['lable','type','placeholder','rule'],
  watch: {
    content(){
     this.handlerulg()
    }
  }
}
</script>

<style>
</style>