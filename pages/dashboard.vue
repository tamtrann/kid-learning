<template>
  <main>
    <div class="dashboard">
      <div class="container">
        <syllabus/>
      </div>
    </div>
  </main>
</template>

<script>
import Syllabus from '~/components/Syllabus'

export default {
  layout: 'full',
  components: {
    Syllabus
  }
}
</script>

<style lang="scss">
.dashboard {
  @include flex-center;

  background-image: url("~/assets/images/background/le-hong-phong-high-school.jpg");
  background-size: cover;
  height: 100vh;
  min-height: 600px;
}
</style>
