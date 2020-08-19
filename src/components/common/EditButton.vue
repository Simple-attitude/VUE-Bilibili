<template>
  <div class="edit-btn">
    <span>
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name:'EditButton'
}
</script>

<style>
.edit-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10.556vw;
  color: #505050;
  background-color: white;
  font-size: 3.889vw;
}
</style>