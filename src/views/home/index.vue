<template>
  <div class="home">
    <v-app>
      <v-app-bar
        app
        dark
      >
        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/ggdream"
          target="_blank"
          text
        >
          <span class="mr-2">have a look</span>
          <v-icon>mdi-subway</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home'
})
</script>
