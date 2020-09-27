<template>
  <h1>
    Welcome
    <span class="msg">{{ msg }}</span>
  </h1>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.msg {
  color: purple;
}
</style>