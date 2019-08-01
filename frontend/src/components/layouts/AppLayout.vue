<template>
  <div>
    <AppNavigation />

    <div class="container">
      <router-view class="mt-3" />
    </div>
  </div>
</template>

<script>
import AppNavigation from './AppNavigation'

export default {
  name: 'AppLayout',
  components: {
    AppNavigation
  }
}
</script>
