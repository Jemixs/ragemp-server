<template>
  <div id="app">
    <router-view />
    <auth />
  </div>
</template>

<script>
import Auth from "./components/auth/auth.vue";

export default {
  components: {
    Auth,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: transparent !important;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>