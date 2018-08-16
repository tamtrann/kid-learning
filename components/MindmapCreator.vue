<template>
  <div class="mindmap-creator">
    <h2 class="mindmap-heading">Tạo sơ đồ tư duy</h2>
    <el-row :gutter="20">
      <el-col :sm="16">
        <div class="mindmap-wrapper">
          <mindmap :nodes="nodes" :connections="connections" :editable="true" v-if="show"/>
        </div>
      </el-col>
      <el-col :sm="8">
        <div class="mindmap-controller">
          <h4 class="mindmap-heading">Thêm node</h4>
          <el-input class="mindmap-controller__input" placeholder="Tên node" v-model="newNode.text"></el-input>
          <el-radio-group class="mindmap-controller__group" v-model="isChildNode">
            <el-radio :label="false">Không có node cha</el-radio>
            <el-radio :label="true">Có node cha</el-radio>
          </el-radio-group>
          <el-select class="mindmap-controller__select" :class="{'el--warning': isChildNode && !parentNode}" v-model="parentNode" placeholder="Node cha" :disabled="!isChildNode">
            <el-option v-for="item in nodes" :key="item.text" :label="item.text" :value="item.text"></el-option>
          </el-select>
          <el-radio-group class="mindmap-controller__group" v-model="isConnectedNode">
            <el-radio :label="false">Không có node liên kết</el-radio>
            <el-radio :label="true">Có node liên kết</el-radio>
          </el-radio-group>
          <el-select class="mindmap-controller__select" :class="{'el--warning': isConnectedNode && !targetNode}" v-model="targetNode" placeholder="Node liên kết" :disabled="!isConnectedNode">
            <el-option v-for="item in nodes" :key="item.text" :label="item.text" :value="item.text"></el-option>
          </el-select>
          <el-button type="primary" @click="addNode">Thêm</el-button>
          <el-button type="success" @click="complete">Hoàn tất</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      name: '',
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
  props: {
    id: {
      type: String,
      required: false
    },
    nodes: {
      type: Array,
      required: false
    },
    connections: {
      type: Array,
      required: false
    }
  },
  methods: {
    addNode () {
      if (this.isChildNode) {
        this.nodes.forEach(node => {
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
        if (this.nodes.length > 0) {
          this.row = Math.floor(Math.log2(this.nodes.length))
          this.col = this.nodes.length - Math.pow(2, this.row)

          this.newNode.fx = (this.col + 1) * this.delta
          this.newNode.fy = this.row * this.delta
        } else {
          this.newNode.fx = 1
          this.newNode.fy = 1
        }

        this.nodes.push(this.newNode)
      }

      if (this.targetNode) {
        this.newConnection.source = this.newNode
        this.newConnection.target = this.targetNode
        this.connections.push(this.newConnection)
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
      if (this.id) {
        this.$emit('UpdateMindmap', this.id, this.nodes, this.connections)
      } else {
        this.$emit('AddMindmap', this.id, this.nodes, this.connections)
      }
    }
  },
  watch: {
    id () {
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
  }
}
</script>
