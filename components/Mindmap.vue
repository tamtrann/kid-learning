<template>
  <div class="mindmap">
    <button class="mindmap-close" @click="$modal.hide('mindmap')">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewbox="0 0 17 17">
        <path fill="#939393" fill-rule="evenodd" d="M11.736 8.5l4.83 4.829c.29.29.434.644.434 1.063 0 .419-.144.788-.435 1.111l-1.062 1.062c-.321.29-.692.435-1.11.435-.419 0-.773-.145-1.063-.435L8.5 11.736l-4.829 4.83c-.29.289-.644.434-1.062.434-.42 0-.79-.145-1.112-.435L.435 15.503A1.614 1.614 0 0 1 0 14.393c0-.42.145-.773.435-1.064L5.265 8.5.435 3.671A1.448 1.448 0 0 1 0 2.608c0-.419.145-.788.435-1.111L1.497.435C1.82.145 2.189 0 2.609 0c.418 0 .772.145 1.062.435L8.5 5.264l4.83-4.83C13.62.146 13.974 0 14.392 0c.419 0 .79.145 1.111.435l1.062 1.062c.29.323.435.692.435 1.11 0 .42-.144.773-.435 1.064L11.736 8.5z"></path>
      </svg>
    </button>
    <mindmap-selector
      :mindmapList="mindmapList" :listIsUpdated="listIsUpdated"
      @OpenCreator="openCreator" @LoadMindmap="load"/>
    <mindmap-creator
      v-if="creatorIsShown"
      :id="selectedMindmap.id" :nodes="selectedMindmap.nodes" :connections="selectedMindmap.connections"
      @AddMindmap="add(...arguments)" @UpdateMindmap="update(...arguments)"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import MindmapCreator from '~/components/MindmapCreator'
import MindmapSelector from '~/components/MindmapSelector'

export default {
  data () {
    return {
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
  components: {
    MindmapCreator,
    MindmapSelector
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
    openCreator () {
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
    add (id, nodes, connections) {
      this.selectedMindmap.id = this.mindmapList.length + 1
      this.selectedMindmap.nodes = nodes.slice()
      this.selectedMindmap.connections = connections.slice()
      this.addMindmap(this.selectedMindmap)
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
    load (mindmap) {
      this.selectedMindmap = JSON.parse(JSON.stringify(mindmap))
      this.creatorIsShown = true
    },
    update (id, nodes, connections) {
      this.updateMindmap({id, nodes, connections})
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

  &-close {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &-heading {
    color: $color-white;
  }

  &-wrapper {
    @include block-center;

    background-color: $color-dark-gray;
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
      color: $color-white;
      font-size: $font-size-p;
      padding: 2px 5px;
    }
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
      margin-bottom: rem(20);
    }

    &__select {
      display: block;
      margin-bottom: rem(20);
    }
  }

  &-emoji {
    vertical-align: bottom;
    width: 24px;
    height: 24px;
  }

  &-list {
    display: flex;
    align-items: flex-start;
    // justify-content: space-between;
    list-style: none;
    margin: 0 -15px rem(30);
    padding-left: 0;

    &__item {
      @include flex-center;

      background-color: rgba($color-dark-gray, 0.8);
      border-radius: 10px;
      box-shadow: $box-shadow-light;
      cursor: pointer;
      margin: 0 15px;
      width: 200px;
      height: 200px;

      &:hover {
        background-color: $color-dark-gray;
        box-shadow: 0 2px 8px 0 rgba(46, 61, 73, 0.2);
      }

      .mindmap-svg {
        pointer-events: none;
      }

      i {
        font-size: rem(60);
      }
    }
  }

  &-modal {
    min-height: 100vh;
  }

  .el-radio__label {
    color: $color-white;
  }

  .el-input__inner {
    background-color: rgba($color: $color-dark-gray, $alpha: 0.8);
    border: 1px solid rgba($color: $color-white, $alpha: 0.2);
    color: $color-white;
  }

  .el-input.is-disabled .el-input__inner {
    background-color: $color-gray;
  }
}
</style>
