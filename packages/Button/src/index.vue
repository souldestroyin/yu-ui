<template>
  <div class="yu-button">
    <slot />
  </div>
</template>

<script>
export default {
name: 'yu-button',
props: {
    type: String
  }
}
</script>

<style scoped>
.yu-button {
  border: 1px solid red;
  display: inline-block;
}
</style>