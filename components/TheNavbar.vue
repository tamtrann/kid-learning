<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <span class="navbar-brand">
        <nuxt-link to="/dashboard">E-School</nuxt-link>
      </span>
      <el-dropdown trigger="click" @click.native="showDropdown = !showDropdown" @visible-change="onDropdownChange($event)">
        <span class="el-dropdown-link">
          <div class="toggler" :class="{ cross: showDropdown }">
            <svg viewBox="0 0 800 600">
              <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="toggler__line top"></path>
              <path d="M300,320 L540,320" class="toggler__line middle"></path>
              <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="toggler__line bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
            </svg>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item @click.native="signIn">{{ user ? user.displayName : 'ĐĂNG KÍ' }}</el-dropdown-item> -->
          <el-dropdown-item @click.native="goToProfile">{{ user.name }}</el-dropdown-item>
          <!-- <el-dropdown-item divided v-if="user" @click.native="signOut">ĐĂNG XUẤT</el-dropdown-item> -->
          <el-dropdown-item divided @click.native="signOut">ĐĂNG XUẤT</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      showDropdown: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    goToProfile () {
      this.$router.push('/profile')
    },
    async signOut () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.error = e.message
      }
    },
    onDropdownChange (event) {
      this.showDropdown = event
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  z-index: 10;

  &.hidden {
    transform: translateY(-100%);
  }

  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-brand {
    @include flex-center;

    a {
      color: $color-theme;
      font-family: $font-secondary;
      font-size: rem(40);
      font-weight: $font-weight-bold;
      letter-spacing: 3px;

      &:hover {
        color: $color-theme;
      }
    }
  }
}

.toggler {
  svg {
    height: 60px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }

  &__line {
    fill: none;
    transition: stroke-dashoffset 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25), stroke-dasharray 0.3s cubic-bezier(0.25, -0.25, 0.75, 1.25);
    stroke-width: 20px;
    stroke-linecap: round;
    stroke: $color-theme;
    stroke-dashoffset: 0;

    &.top,
    &.bottom {
      stroke-dasharray: 240px 950px;

      .cross & {
        stroke-dashoffset: -650px;
      }
    }

    &.middle {
      stroke-dasharray: 240px 240px;

      .cross & {
        stroke-dashoffset: -115px;
        stroke-dasharray: 1px 220px;
      }
    }
  }
}

.el-dropdown {
  &-link {
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  &-menu {
    &__item {
      text-transform: uppercase;
    }
  }
}

.dashboard {
  @include flex-center;

  height: 100vh;
  min-height: 600px;
}
</style>
