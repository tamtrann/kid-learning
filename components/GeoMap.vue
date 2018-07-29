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
      <geo-chart width="800px" height="600px" :data="currentData" :label="currentLabel"></geo-chart>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import NoteTaker from '~/components/NoteTaker'

export default {
  data () {
    return {
      showNav: false,
      currentLabel: '',
      currentData: [],
      stats: [{
        label: 'Diện tích',
        data: [['United States', 44], ['Germany', 23], ['Brazil', 22]]
      }, {
        label: 'Dân số',
        data: [['United States', 44], ['Germany', 23], ['Brazil', 22]]
      }, {
        label: 'Mật độ dân số',
        data: [['United States', 44], ['Germany', 23], ['Brazil', 22]]
      }, {
        label: 'GDP',
        data: [['United States', 40], ['Germany', 23], ['Brazil', 22]]
      }, {
        label: 'Lượng mưa',
        data: [['United States', 40], ['Germany', 23], ['Brazil', 22]]
      }, {
        label: 'Nhiệt độ trung bình',
        data: [['United States', 40], ['Germany', 23], ['Brazil', 22]]
      }]
    }
  },
  components: {
    NoteTaker
  },
  // mounted () {
  //   axios.get(`https://api.myjson.com/bins/mnsrm`).then(res => {
  //     this.stats = res.data.slice()
  //   })
  // },
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
    overflow: scroll;
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

.el-collapse {
  border: none;
  list-style: none;
  padding-left: 0;

  &-item {
    cursor: pointer;
    padding: rem(15) 0;

    &__arrow {
      line-height: inherit;
      margin-left: 4px;
    }

    &__content {
      margin-top: rem(10);
      padding-bottom: 0;
    }

    &__header {
      @extend %default-transition-style;

      background-color: transparent;
      border-bottom: none;
      color: $color-white;
      font-family: $font-primary;
      font-size: $font-size-p;
      font-weight: $font-weight-bold;
      height: auto;
      line-height: 1.5;
      opacity: 0.5;
      text-transform: uppercase;

      &:hover,
      &.is-active {
        opacity: 1;
      }

      &:focus {
        color: $color-white;
      }
    }

    &__wrap {
      background-color: transparent;
      border-bottom: none;
    }
  }
}
</style>
