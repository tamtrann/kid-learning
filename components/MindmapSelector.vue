<template>
  <ul class="mindmap-list">
    <li class="mindmap-list__item" v-for="(item, index) in mindmapList" :key="index" @click="emitLoadMindmap(item)">
      <mindmap :nodes="item.nodes" :connections="item.connections" :editable="false" v-if="!listIsUpdated"/>
    </li>
    <li class="mindmap-list__item" @click="emitCreateMindmap">
      <i class="fas fa-plus"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    mindmapList: Array,
    listIsUpdated: Boolean
  },
  methods: {
    emitCreateMindmap () {
      this.$emit('OpenCreator')
    },
    emitLoadMindmap (mindmap) {
      this.$emit('LoadMindmap', mindmap)
    }
  }
}
</script>
