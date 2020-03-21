<template>
  <div class="puzzle" :style="{width: width + 'px', height: height + 'px'}">
    puzzle
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    }
  }
  
}
</script>

<style>
.puzzle {
  border: 2px solid #ccc;
}
</style>