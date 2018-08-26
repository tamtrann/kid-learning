<template>
  <div class="timeline-item" :class="{'timeline-item--active': isVisible}"
      :data-text="timeline.name" v-observe-visibility="{
        callback: this.visibilityChanged,
        threshold: 0.5
      }">
      <div class="timeline__content">
        <div class="timeline__content-wrapper">
          <img v-if="timeline.image" class="timeline__img" :src="timeline.image.url"/>
          <h2 class="timeline__content-title">{{ timeline.year || '&nbsp;' }}</h2>
        </div>
        <!-- <img v-if="timeline.image" class="timeline__img" :src="timeline.image.url"/> -->
        <h2 class="timeline__content-title">{{ timeline.year || '&nbsp;' }}</h2>
        <p class="timeline__content-desc" v-html="timeline.content"></p>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false
    }
  },
  props: {
    'timeline': Object
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>
