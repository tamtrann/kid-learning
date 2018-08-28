<template>
  <div class="mindmap">
    <el-input
      v-if="!creatorIsShown"
      v-model="searchString"
      placeholder="Nhập từ khoá tìm kiếm"
      prefix-icon="el-icon-search"
      type="text"
      class="mindmap-controller__input"/>
    <mindmap-selector
      v-if="!creatorIsShown"
      :mindmap-list="mindmapList(searchString)"
      :list-is-updated="listIsUpdated"
      @OpenCreator="onOpenCreator"
      @LoadMindmap="onLoad"/>
    <mindmap-creator
      v-if="creatorIsShown"
      :mindmap="selectedMindmap"
      @Back="creatorIsShown = false"
      @AddMindmap="add"
      @UpdateMindmap="update"/>
  </div>
</template>

<script>
// :id="selectedMindmap.id"
//       :nodes="selectedMindmap.nodes"
//       :connections="selectedMindmap.connections"
//       :name="selectedMindmap.name"
import { mapGetters, mapMutations } from 'vuex'

import MindmapCreator from '~/components/MindmapCreator'
import MindmapSelector from '~/components/MindmapSelector'

export default {
  components: {
    MindmapCreator,
    MindmapSelector
  },
  data () {
    return {
      searchString: '',
      creatorIsShown: false,
      listIsUpdated: false,
      selectedMindmap: {
        id: '',
        name: '',
        nodes: [
        ],
        connections: [
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      mindmapList: 'mindmap/mindmapList'
    })
  },
  methods: {
    ...mapMutations({
      addMindmap: 'mindmap/ADD_MINDMAP',
      updateMindmap: 'mindmap/UPDATE_MINDMAP'
    }),
    onOpenCreator () {
      this.creatorIsShown = true
      this.selectedMindmap = {
        id: '',
        name: '',
        nodes: [
        ],
        connections: [
        ]
      }
    },
    onLoad (mindmap) {
      this.selectedMindmap = JSON.parse(JSON.stringify(mindmap))
      this.creatorIsShown = true
    },
    add (mindmap) {
      mindmap.id = this.mindmapList.length + 1
      this.addMindmap(mindmap)
      this.selectedMindmap = {
        id: '',
        name: '',
        nodes: [
        ],
        connections: [
        ]
      }
      this.listIsUpdated = true
      this.$nextTick(() => {
        this.listIsUpdated = false
      })
    },
    update (mindmap) {
      this.updateMindmap(mindmap)
      this.listIsUpdated = true
      this.$nextTick(() => {
        this.listIsUpdated = false
      })
    }
  }
}
</script>

<style lang="scss">
.mindmap {
  position: relative;

  &-back {
    background-color: transparent;
    box-shadow: none;

    &:hover {
      color: $color-text;
      box-shadow: none;
    }
  }

  &-close {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &-connection {
    fill: transparent;
    stroke: #9e9e9e;
    stroke-dasharray: 10px 4px;
    stroke-width: 3px;
  }

  &-controller {
    margin-top: rem(30);

    @include media(">=sm") {
      margin-top: 0;
    }

    &__group {
      margin-bottom: rem(12);
    }

    &__input {
      display: block;
      margin-bottom: rem(20);
      margin-left: auto;
      margin-right: auto;
      max-width: 800px;
    }

    &__select {
      display: block;
      margin-bottom: rem(20);
    }

    .el-radio {
      display: block;
    }
  }

  &-emoji {
    vertical-align: bottom;
    width: 24px;
    height: 24px;
  }

  &-heading {
    color: $color-text;
    display: flex;
    align-items: center;
    margin-top: rem(20);
    text-transform: uppercase;
  }

  &-svg {
    height: 100%;
    width: 100%;

    &:focus {
      outline: none;
    }

    * {
      transition: none;
    }
  }

  &-list {
    display: flex;
    align-items: flex-start;
    list-style: none;
    margin: 0 -15px rem(50);
    padding-left: 0;

    &__item {
      background-color: darken($color: $color-white, $amount: 1%);
      border-radius: 10px;
      box-shadow: $box-shadow-normal;
      cursor: pointer;
      margin: 0 15px;
      width: 200px;
      height: 200px;

      &:hover {
        box-shadow: $box-shadow-light;
      }

      &__inner {
        @include flex-center;

        width: 100%;
        height: 100%;
      }

      .mindmap-svg {
        pointer-events: none;
      }

      & > div {
        width: 100%;
        height: 100%;
      }

      i {
        font-size: rem(60);
      }
    }
  }

  &-modal {
    min-height: 100vh;
  }

  &-name {
    font-weight: $font-weight-bold;
    margin-top: rem(10);
    text-align: center;
    width: 100%;
  }

  &-node {
    & > a {
      background: #f5f5f5;
      border-radius: 10px;
      box-shadow: $box-shadow-light;
      color: $color-black;
      display: inline-block;
      font-size: $font-size-4;
      margin: 0 auto;
      padding: 15px;
      text-align: center;
      text-decoration: none;

      &[href]:hover {
        background-color: $color-theme;
        color: $color-white;
        cursor: pointer;
      }
    }

    &--editable {
      cursor: all-scroll;
    }
  }

  &-subnode-group {
    align-items: center;
    border-left: 4px solid #9e9e9e;
    display: flex;
    margin-left: 15px;
    padding: 5px;

    a {
      color: $color-text;
      font-size: $font-size-p;
      padding: 2px 5px;
    }
  }

  &-wrapper {
    @include block-center;

    background-color: $color-white;
    border-radius: 10px;
    box-shadow: $box-shadow-normal;
    width: 100%;
    height: 500px;
    overflow: hidden;

    & > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
