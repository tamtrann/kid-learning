<template>
  <div class="geomap-container">
    <vk-offcanvas class="geomap-sidebar-offcanvas" :show.sync="showNav">
      <div class="geomap-sidebar">
        <div class="geomap-buttons">
          <nuxt-link to="/dashboard" class="btn">
            <i class="fas fa-arrow-left"></i>
          </nuxt-link>
        </div>
        <div class="geomap-nav">
          <h5 class="geomap-nav__title">Bản đồ tương tác so sánh số liệu</h5>
          <button class="geomap-nav__item" v-for="(stat, index) in stats" :key="index" @click="loadData(stat)">{{ stat.label }}</button>
        </div>
      </div>
    </vk-offcanvas>
    <button class="geomap-btn" @click="showNav = !showNav">
      <i class="fas fa-arrow-right"></i>
    </button>
    <div class="geomap">
      <geo-chart width="800px" height="600px" :data="currentData" :label="currentLabel" :colors="colors"></geo-chart>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showNav: false,
      currentLabel: '',
      currentData: [],
      colors: [
        '#3366CC',
        '#DC3912',
        '#FF9900',
        '#109618',
        '#990099',
        '#3B3EAC',
        '#0099C6',
        '#DD4477',
        '#66AA00',
        '#B82E2E',
        '#316395',
        '#994499',
        '#22AA99',
        '#AAAA11',
        '#6633CC',
        '#E67300',
        '#8B0707',
        '#329262',
        '#5574A6',
        '#3B3EAC',
      ]
    }
  },
  props: [
    'stats'
  ],
  methods: {
    loadData (stat) {
      this.currentLabel = stat.label
      this.currentData = stat.data.slice()
    }
  }
}
</script>

<style lang="scss">
.geomap {
  @include flex-center;

  margin: 0 auto;
  // max-width: $geomap-width;
  padding-top: rem(30);
  position: relative;
  height: 100vh;
  min-height: 600px;
  width: 100%;

  &-btn {
    background-color: $color-dark-gray;
    border: none;
    color: $color-white;
    padding: rem(10);
    position: fixed;
    left: 0;
    top: 50%;
    z-index: 1;
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(20);
  }

  &-container {
    background-color: $color-dark-blue;
    display: flex;
    align-items: flex-start;
    // width: $geomap-container-width;
    min-height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-size: cover;

    // &::before {
    //   content: "";
    //   background: rgba(99, 99, 99, 0.8);
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    // }
  }

  &-nav {
    padding-top: rem(15);
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    height: -webkit-fill-available;

    &__item {
      background-color: transparent;
      border: none;
      color: $color-white;
      display: block;
      margin-bottom: rem(16);
      opacity: 0.5;
      padding: 0;

      &:hover {
        padding-left: rem(15);
        opacity: 1;
      }
    }

    &__title {
      color: $color-white;
    }
  }

  &-sidebar {
    background-color: $color-dark-gray;
    box-shadow: $box-shadow-light;
    // height: 100vh;
    min-height: 400px;
    padding: 46px rem(25);
    // position: sticky;
    // top: 0;
    // bottom: 0;

    &-offcanvas {
      .uk-offcanvas-bar {
        overflow: hidden;
        padding: 0;
      }
    }

    .btn {
      background-color: none;
      border: none;
      box-shadow: none;
      color: $color-white;
      font-weight: $font-weight-semi;
      opacity: 0.7;
      padding: 0;

      &:hover {
        opacity: 1;
      }
    }
  }

  rect {
    fill: $color-dark-blue !important;
  }
}
</style>
