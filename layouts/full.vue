<template>
  <vk-offcanvas-content>
    <the-navbar/>
    <nuxt/>
  </vk-offcanvas-content>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
}
</script>
