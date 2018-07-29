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
  },
  middleware: ['auth']
}
</script>

<style lang="scss">
.dashboard {
  @include flex-center;

  background-color: $color-dark-blue;
  height: 100vh;
  min-height: 600px;
}
</style>
