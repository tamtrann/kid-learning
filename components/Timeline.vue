<template>
  <div class="timeline-container">
    <vk-offcanvas class="timeline-sidebar-offcanvas" :show.sync="showNav">
      <div class="timeline-sidebar">
        <div class="timeline-buttons">
          <nuxt-link to="/dashboard" class="btn">
            <i class="fas fa-arrow-left"></i>
          </nuxt-link>
        </div>
        <div class="timeline-nav">
          <h5 class="timeline-nav__title">Dòng sự kiện lịch sử</h5>
          <el-collapse v-model="activeMilestone" accordion>
            <el-collapse-item v-for="milestone in milestones" :key="milestone.id" :title="milestone.name" :name="milestone.name">
              <el-collapse v-model="activeTimeline" accordion>
                <button class="timeline-nav__item" v-for="timeline in milestone.timelines" :key="timeline.id" @click="goTo(timeline.id)">{{ timeline.name }}</button>
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </vk-offcanvas>
    <button class="timeline-btn" @click="showNav = !showNav">
      <i class="fas fa-arrow-right"></i>
    </button>
    <div class="timeline">
      <template v-for="milestone in milestones">
        <timeline-item v-for="timeline in milestone.timelines" :key="timeline.id" :timeline="timeline" :id="timeline.id" ref="timeline"/>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TimelineItem from '~/components/TimelineItem'
import NoteTaker from '~/components/NoteTaker'

export default {
  data () {
    return {
      showNav: false,
      activeMilestone: '',
      activeTimeline: ''
    }
  },
  components: {
    TimelineItem,
    NoteTaker
  },
  props: [
    'milestones'
  ],
  mounted () {
    this.showNav = true
  },
  methods: {
    goTo (id) {
      let target = this.$refs.timeline.find(item => item.$el.id === id)
      target.$el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'})
    }
  }
}
</script>

<style lang="scss">
$timeline-width: 700px;
$timeline-container-width: 100%;

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: $timeline-width;
  padding-top: rem(30);
  position: relative;

  @include media(">=sm") {
    margin-left: auto;
    margin-right: 10%;
  }

  &__content {
    &-title {
      color: $color-white;
      font-family: $font-secondary;
      font-size: 66px;
      margin: -10px 0 0 0;
      transition: 0.4s;
      padding: 0 10px;
    }

    &-desc {
      margin: 0;
      font-size: 15px;
      box-sizing: border-box;
      color: rgba($color-white, 0.7);
      font-family: $font-primary;
      font-weight: normal;
      line-height: 25px;
    }
  }

  &__img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba($color-black, 0.4);
  }

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.07);
    margin-left: -1px;
    position: absolute;
    left: 40px;
    width: 2px;
    height: 100%;

    @include media(">=sm") {
      left: 50%;
    }
  }

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
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    overflow: hidden;
    position: relative; 

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

  &-header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;

    &__title {
      color: $color-white;
      font-size: 46px;
      font-family: $font-primary;
      font-weight: normal;
      margin: 0;
      text-transform: uppercase;
    }

    &__subtitle {
      color: rgba($color-black, 0.5);
      font-family: $font-secondary;
      font-size: 16px;
      letter-spacing: 5px;
      margin: 10px 0 0 0;
      font-weight: normal;
    }
  }

  &-item {
    display: flex;
    align-self: baseline;
    filter: blur(2px);
    opacity: 0.3;
    padding: 0 30px 150px 80px;
    position: relative;
    transform: translateY(-80px);
    transition-duration: 0.6s;
    width: 100%;

    &::before {
      border: none;
      padding: 0;
      top: 50px;
      left: 10px;
      text-align: center;
      width: 60px;
    }

    &:nth-child(even) {
      align-self: flex-end;
    }

    &:last-child {
      padding-bottom: 40px;
    }

    @include media(">=sm") {
      align-self: flex-start;
      padding: 40px 0;
      width: calc(50% - 40px);

      &::before {
        content: attr(data-text);
        border-left: 2px solid rgba($color-white, 0.5);
        color: rgba($color-white, 0.5);
        font-size: $font-size-p;
        font-family: $font-primary;
        letter-spacing: 3px;
        position: absolute;
        top: 70%;
        right: calc(-100% - 39px);
        left: inherit;
        margin-top: -5px;
        padding-left: 15px;
        opacity: 0;
        width: 100%;
      }

      &:nth-child(even) {
        align-self: flex-end;

        &::before {
          border-left: none;
          border-right: 2px solid rgba($color-white, 0.5);
          right: auto;
          left: calc(-100% - 39px);
          padding-left: 0;
          padding-right: 15px;
          text-align: right;
        }
      }
    }

    &--active {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);

      &::before {
        top: 50%;
        opacity: 1;
      }

      .timeline__content-title {
        margin: -50px 0 20px 0;
      }
    }
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
      text-align: left;
      width: 100%;

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
    min-height: 400px;
    padding: 46px rem(25);

    &-offcanvas {
      .uk-offcanvas-bar {
        overflow: hidden;
        padding: 0;
      }
    }

    .btn {
      background-color: transparent;
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
}
</style>
