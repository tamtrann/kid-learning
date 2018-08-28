<template>
  <div>
    <ul class="mindmap-list">
      <li
        v-for="item in mindmapList"
        :key="item.id"
        class="mindmap-list__item"
        @click="emitLoadMindmap(item)">
        <mindmap
          v-if="!listIsUpdated"
          :nodes="item.nodes"
          :connections="item.connections"
          :editable="false"/>
        <span class="mindmap-name">{{ item.name }}</span>
      </li>
      <li
        class="mindmap-list__item"
        @click="emitCreateMindmap">
        <span class="mindmap-list__item__inner">
          <i class="fas fa-plus"/>
        </span>
      </li>
    </ul>
  </div>
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
