<template>
  <v-toolbar
    clipped-left
    fixed
    app
    dark
  >
    <v-toolbar-side-icon @click.stop="$store.dispatch('app/toggleAppDrawerAction')"></v-toolbar-side-icon>
    <v-toolbar-title >
      <img class="mt-2" src="../assets/isuzu-logo-compressor.png" height="32" alt="" >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          v-on="on"
        >
          <img src="../assets/dealer.png" height="35" alt="" >
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="logout"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      items: [
        { title: 'Logout' }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logoutAction')
    }
  }
}
</script>

