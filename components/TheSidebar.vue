<template>
  <aside>
    <el-menu default-active="1" class="menu" @open="handleOpen" @close="handleClose" collapse>
      <el-submenu index="1">
        <template slot="title">
          <img src="~/assets/images/object/trongdong.png" alt="Lịch sử">
          <!-- <i class="el-icon-location"></i> -->
          <span>Lịch sử</span>
        </template>
        <el-submenu index="1-1">
          <span slot="title">Lịch sử 6</span>
          <el-submenu index="1-1-1">
            <span slot="title">Chương 1</span>
            <el-menu-item index="1-1-1-1">Bài 1</el-menu-item>
            <el-menu-item index="1-1-1-2">Bài 2</el-menu-item>
            <el-menu-item index="1-1-1-3">Bài 3</el-menu-item>
            <el-menu-item index="1-1-1-4">Bài 4</el-menu-item>
          </el-submenu>
          <el-submenu index="1-1-2">
            <span slot="title">Chương 2</span>
            <el-menu-item index="1-1-2-1">Bài 5</el-menu-item>
            <el-menu-item index="1-1-2-2">Bài 6</el-menu-item>
            <el-menu-item index="1-1-2-3">Bài 7</el-menu-item>
            <el-menu-item index="1-1-2-4">Bài 8</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <img src="~/assets/images/object/globe.png" alt="Địa lí">
          <!-- <i class="el-icon-location"></i> -->
          <span>Địa Lí</span>
        </template>
        <el-submenu index="2-1">
          <span slot="title">Địa Lí 6</span>
          <el-submenu index="2-1-1">
            <span slot="title">Chương 1</span>
            <el-menu-item index="2-1-1-1">Bài 1</el-menu-item>
            <el-menu-item index="2-1-1-2">Bài 2</el-menu-item>
            <el-menu-item index="2-1-1-3">Bài 3</el-menu-item>
            <el-menu-item index="2-1-1-4">Bài 4</el-menu-item>
          </el-submenu>
          <el-submenu index="2-1-2">
            <span slot="title">Chương 2</span>
            <el-menu-item index="2-1-2-1">Bài 5</el-menu-item>
            <el-menu-item index="2-1-2-2">Bài 6</el-menu-item>
            <el-menu-item index="2-1-2-3">Bài 7</el-menu-item>
            <el-menu-item index="2-1-2-4">Bài 8</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click="showNote = true">
        <i class="material-icons">notes</i>
        <span slot="title">Ghi chú</span>
      </el-menu-item>
    </el-menu>
    <vk-offcanvas flipped overlay :show.sync="showNote">
      <note-taker/>
    </vk-offcanvas>
  </aside>
</template>

<script>
import NoteTaker from '~/components/NoteTaker'

export default {
  data () {
    return {
      showNote: false
    }
  },
  components: {
    NoteTaker
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1050;
}
</style>
