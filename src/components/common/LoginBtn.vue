<template>
  <div class="btnparent">
    <div class="loginbtn" @click="btnSubmit">
      {{btntext}}
    </div>
  </div>

</template>

<script>
export default {
  name:'LoginBtn',
  props:['btntext'],
  methods: {
    btnSubmit(){
      this.$emit('btnSubmit')
    }
  }
}
</script>

<style>
  .btnparent{
    margin: 4.167vw 1.667vw;
  }
  .loginbtn{
    height: 12.5vw;
    background-color:#FF9DB5;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.25vw;
    font-size: 15.998px;
  }
</style>