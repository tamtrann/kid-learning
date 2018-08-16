<template>
  <main>
    <div class="dashboard">
      <!-- <div class="dashboard__overlay"></div> -->
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

  background-color: $color-dark-blue;
  // background-image: url("~/assets/images/background/le-hong-phong-high-school.jpg");
  background-size: cover;
  height: 100vh;
  min-height: 600px;

  // &__overlay {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   background-image: linear-gradient(to top, rgba($color-dark-gray, 0) , rgba($color-dark-gray, 1));
  //   opacity: 0.5;
  // }
}
</style>
