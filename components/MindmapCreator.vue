<template>
  <div class="mindmap-creator">
    <h2 class="mindmap-heading">
      <button
        class="btn mindmap-back"
        @click="$emit('Back')"><i class="fas fa-chevron-left"/></button>
      {{ mindmap.name ? mindmap.name : 'Tạo sơ đồ tư duy' }}</h2>
    <el-row :gutter="20">
      <el-col :sm="16">
        <div class="mindmap-wrapper">
          <mindmap
            v-if="show"
            :nodes="mindmap.nodes"
            :connections="mindmap.connections"
            :editable="true"/>
        </div>
      </el-col>
      <el-col :sm="8">
        <div class="mindmap-controller">
          <el-input
            v-model="mindmap.name"
            placeholder="Tên mindmap"
            prefix-icon="el-icon-edit"
            type="text"
            class="mindmap-controller__input"/>
          <!-- <h4 class="mindmap-heading">Thêm nút</h4> -->
          <el-input
            v-model="newNode.text"
            placeholder="Thêm nút"
            prefix-icon="el-icon-plus"
            type="text"
            class="mindmap-controller__input"/>
          <el-radio-group
            v-model="isChildNode"
            class="mindmap-controller__group">
            <el-radio :label="false">Không có nút cha</el-radio>
            <el-radio :label="true">Có nút cha</el-radio>
          </el-radio-group>
          <el-select
            v-model="parentNode"
            :disabled="!isChildNode"
            :class="{'el--warning': isChildNode && !parentNode}"
            class="mindmap-controller__select"
            placeholder="Node cha">
            <el-option
              v-for="item in mindmap.nodes"
              :key="item.text"
              :label="item.text"
              :value="item.text"/>
          </el-select>
          <el-radio-group
            v-model="isConnectedNode"
            class="mindmap-controller__group">
            <el-radio :label="false">Không có nút liên kết</el-radio>
            <el-radio :label="true">Có nút liên kết</el-radio>
          </el-radio-group>
          <el-select
            v-model="targetNode"
            :disabled="!isConnectedNode"
            :class="{'el--warning': isConnectedNode && !targetNode}"
            class="mindmap-controller__select"
            placeholder="Node liên kết">
            <el-option
              v-for="item in mindmap.nodes"
              :key="item.text"
              :label="item.text"
              :value="item.text"/>
          </el-select>
          <button
            class="btn btn--default"
            @click="addNode">Thêm</button>
          <button
            class="btn btn--green"
            @click="complete"><i class="fas fa-check"/>Hoàn tất</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    mindmap: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: true,
      // name: '',
      newNode: {
        text: '',
        fx: 0,
        fy: 0,
        nodes: []
      },
      isChildNode: false,
      isConnectedNode: false,
      parentNode: '',
      targetNode: '',
      newConnection: {
        source: '',
        target: ''
      },
      delta: 500,
      row: 0,
      col: 0
    }
  },
  watch: {
    mindmap () {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    isChildNode () {
      if (this.isChildNode === false) {
        this.parentNode = ''
      }
    },
    isConnectedNode () {
      if (this.isConnectedNode === false) {
        this.targetNode = ''
      }
    }
  },
  methods: {
    addNode () {
      if (this.isChildNode) {
        this.mindmap.nodes.forEach(node => {
          if (node.text === this.parentNode) {
            node.nodes.push(this.newNode)
            this.newNode = {
              text: '',
              fx: 0,
              fy: 0,
              nodes: []
            }
          }
        })
      } else {
        if (this.mindmap.nodes.length > 0) {
          this.row = Math.floor(Math.log2(this.mindmap.nodes.length))
          this.col = this.mindmap.nodes.length - Math.pow(2, this.row)

          this.newNode.fx = (this.col + 1) * this.delta
          this.newNode.fy = this.row * this.delta
        } else {
          this.newNode.fx = 1
          this.newNode.fy = 1
        }

        this.mindmap.nodes.push(this.newNode)
      }

      if (this.targetNode) {
        this.newConnection.source = this.newNode
        this.newConnection.target = this.targetNode
        this.mindmap.connections.push(this.newConnection)
      }

      this.newNode = {
        text: '',
        fx: 0,
        fy: 0,
        nodes: []
      }

      this.newConnection = {
        source: '',
        target: ''
      }

      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    complete () {
      if (this.mindmap.id) {
        this.$emit('UpdateMindmap', this.mindmap)
      } else {
        this.$emit('AddMindmap', this.mindmap)
      }
    }
  },
}
</script>
