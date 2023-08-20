<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.btn {
  width: 236px;
  height: 48px;
  border-radius: 60px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
}
</style>
