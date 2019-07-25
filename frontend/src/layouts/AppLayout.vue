<template>
  <div>
    <AppNavigation />

    <div class="page-content">
      <AppSideBar />

      <div class="content-wrapper" style="min-height: calc(100vh - 48px);">
        <AppSubHeader />

        <div class="content pt-0">
          <router-view />
        </div>

        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigation from '../layouts/AppNavigation'
import AppSideBar from '../layouts/AppSideBar'
import AppSubHeader from '../layouts/AppSubHeader'
import AppFooter from '../layouts/AppFooter'

export default {
  components: {
    AppNavigation,
    AppSideBar,
    AppSubHeader,
    AppFooter
  }
}
</script>

