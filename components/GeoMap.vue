<template>
  <div class="geomap-container">
    <vk-offcanvas
      :show.sync="showNav"
      class="geomap-sidebar-offcanvas">
      <div class="geomap-sidebar">
        <div class="geomap-buttons">
          <nuxt-link
            to="/dashboard"
            class="btn">
            <i class="fas fa-arrow-left"/>
          </nuxt-link>
        </div>
        <div class="geomap-nav">
          <h6 class="geomap-nav__title">Bản đồ tương tác so sánh số liệu</h6>
          <button
            v-for="(stat, index) in stats"
            :key="index"
            class="geomap-nav__item"
            @click="loadData(stat)">{{ stat.label }}</button>
        </div>
      </div>
    </vk-offcanvas>
    <button
      class="geomap-btn"
      @click="showNav = !showNav">
      <i class="fas fa-arrow-right"/>
    </button>
    <div class="geomap-zoom">
      <button
        class="geomap-zoom__btn"
        @click="zoomIn">+</button>
      <button
        class="geomap-zoom__btn"
        @click="zoomOut">-</button>
    </div>
    <div class="geomap">
      <geo-chart
        v-if="show"
        :width="width + 'px'"
        :height="height + 'px'"
        :data="currentData"
        :label="currentLabel"
        :library="options"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    stats: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: true,
      showNav: false,
      currentLabel: '',
      currentData: [],
      width: 900,
      height: 700,
      options: {
        sizeAxis: {
          minValue: 0,
          maxValue: 100
        },
        colorAxis: {
          colors: ['#f56c6c', '#4278dc']
        },
        legend: {
          textStyle: {
            color: '#4278dc',
            fontName: 'Open Sans',
            fontSize: 14,
            bold: true
          }
        }
      }
    }
  },
  mounted () {
    this.showNav = true
  },
  methods: {
    loadData (stat) {
      this.currentLabel = stat.label
      this.currentData = stat.data.slice()
    },
    zoomIn () {
      this.width = this.width + this.width * 0.1
      this.height = this.width + this.width * 0.1
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    zoomOut () {
      this.width = this.width - this.width * 0.1
      this.height = this.width - this.width * 0.1
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
.geomap {
  @include flex-center;

  margin: 0 auto;
  padding-top: rem(30);
  position: relative;
  height: 100vh;
  min-height: 600px;
  width: 100%;

  &-btn {
    background-color: white;
    border: 0.5px solid darken($color: $color-white, $amount: 3%);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: $box-shadow-heavy;
    color: $color-text;
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
    background-color: $color-white;
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-size: cover;
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
      color: $color-text;
      display: block;
      margin-bottom: rem(16);
      opacity: 0.8;
      padding: 0;

      &:hover {
        padding-left: rem(15);
        opacity: 1;
      }
    }

    &__title {
      color: $color-text;
      text-transform: uppercase;
    }
  }

  &-sidebar {
    background-color: $color-white;
    box-shadow: $box-shadow-light;
    min-height: 400px;
    padding: 46px rem(25);

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
      color: $color-text;
      font-weight: $font-weight-semi;
      opacity: 0.7;
      padding: 0;

      &:hover {
        opacity: 1;
      }
    }
  }

  &-zoom {
    position: absolute;
    bottom: rem(30);
    right: rem(30);
    z-index: 2;

    &__btn {
      background-color: transparent;
      border: 2px solid $color-dark-gray;
      border-radius: 100%;
      color: $color-dark-blue;
      display: block;
      font-size: 2rem;
      font-weight: $font-weight-normal;
      opacity: 0.8;
      width: 50px;
      height: 50px;

      &:hover {
        opacity: 1;
      }

      & + & {
        margin-top: rem(15);
      }
    }
  }

  // rect {
  //   fill: $color-dark-blue !important;
  // }
}
</style>
