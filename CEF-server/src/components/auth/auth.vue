<template>
  <div v-if="visible" class="h-100">
      <login />
  </div>
</template>

<script>
import Login from './login.vue';

export default {
  data: function () {
    return {
      visible: true,
    };
  },
  components: {
      Login,
  }
};
</script>