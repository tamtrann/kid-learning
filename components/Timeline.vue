<template>
  <div class="timeline-container">
    <vk-offcanvas
      :show.sync="showNav"
      class="timeline-sidebar-offcanvas">
      <div class="timeline-sidebar">
        <div class="timeline-buttons">
          <nuxt-link
            to="/dashboard"
            class="btn">
            <i class="fas fa-arrow-left"/>
          </nuxt-link>
        </div>
        <div class="timeline-nav">
          <h6 class="timeline-nav__title">Dòng sự kiện lịch sử</h6>
          <el-collapse
            v-model="activeMilestone"
            accordion>
            <el-collapse-item
              v-for="milestone in milestones"
              :key="milestone.id"
              :title="milestone.name"
              :name="milestone.name">
              <el-collapse
                v-model="activeTimeline"
                accordion>
                <button
                  v-for="timeline in milestone.timelines"
                  :key="timeline.id"
                  class="timeline-nav__item"
                  @click="goTo(timeline.id)">{{ timeline.name }}</button>
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </vk-offcanvas>
    <button
      class="timeline-btn"
      @click="showNav = !showNav">
      <i class="fas fa-arrow-right"/>
    </button>
    <div class="timeline">
      <template v-for="milestone in milestones">
        <timeline-item
          v-for="timeline in milestone.timelines"
          ref="timeline"
          :key="timeline.id"
          :timeline="timeline"
          :id="timeline.id"/>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TimelineItem from '~/components/TimelineItem'
import NoteTaker from '~/components/NoteTaker'

export default {
  components: {
    TimelineItem,
    NoteTaker
  },
  props: {
    milestones: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showNav: false,
      activeMilestone: '',
      activeTimeline: ''
    }
  },
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
      color: $color-dark-gray;
      font-family: $font-secondary;
      font-size: 66px;
      margin: -10px 0 0 0;
      transition: 0.4s;
      padding: 0 10px;
      text-shadow: 0px 4px 3px rgba($color-black, 0.4),
                   0px 8px 13px rgba($color-black, 0.1),
                   0px 18px 23px rgba($color-black, 0.1);
      // text-shadow: 2px 4px 3px rgba($color-black, 0.3);

      .timeline__content-wrapper & {
        color: $color-white;
        position: absolute;
        z-index: 1;
      }
    }

    &-desc {
      margin: 0;
      font-size: 15px;
      box-sizing: border-box;
      color: rgba($color-text, 0.7);
      font-family: $font-primary;
      font-weight: normal;
      line-height: 25px;
    }

    &-wrapper {
      border-radius: 8px;
      box-shadow: 0 10px 15px rgba($color-dark-gray, 0.2);
      overflow: hidden;
      position: relative;
    }
  }

  &__img {
    max-width: 100%;
  }

  &::before {
    content: "";
    // background: rgba(255, 255, 255, 0.07);
    background-color: rgba($color: $color-theme, $alpha: 0.1);
    margin-left: -1px;
    position: absolute;
    left: 40px;
    width: 1px;
    height: 100%;

    @include media(">=sm") {
      left: 50%;
    }
  }

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
    // background-color: lighten($color: $color-dark-blue, $amount: 15%);
    background-color: $color-white;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
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
        border-left: 3px solid rgba($color-text, 0.8);
        color: rgba($color-text, 0.8);
        font-size: $font-size-p;
        font-family: $font-primary;
        font-weight: $font-weight-bold;
        letter-spacing: 3px;
        position: absolute;
        text-transform: uppercase;
        top: 70%;
        right: calc(-100% - 38px);
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
          border-right: 3px solid rgba($color-dark-gray, 0.8);
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
      color: $color-text;
      display: block;
      font-weight: $font-weight-normal;
      margin-bottom: rem(16);
      opacity: 0.8;
      padding: 0;
      text-align: left;
      width: 100%;

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
      background-color: transparent;
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
}
</style>
