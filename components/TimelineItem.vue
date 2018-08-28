<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 0.5
    }"
    :data-text="timeline.name"
    :class="{'timeline-item--active': isVisible}"
    class="timeline-item">
    <div class="timeline__content">
      <div class="timeline__content-wrapper">
        <img
          v-if="timeline.image"
          :src="timeline.image.url"
          class="timeline__img">
        <h2 class="timeline__content-title">{{ timeline.year || '&nbsp;' }}</h2>
      </div>
      <h2 class="timeline__content-title">{{ timeline.year || '&nbsp;' }}</h2>
      <p
        class="timeline__content-desc"
        v-html="timeline.content"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'timeline': Object
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>
