<template>
  <router-view>
    <Core/>
  </router-view>
</template>


<script lang="ts">
import Vue from 'vue'
import Core from './Core.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Core
  }
});
</script>
