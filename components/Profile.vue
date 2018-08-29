<template>
  <div class="profile">
    <nuxt-link
      to="/dashboard"
      class="btn btn--back">
      <i class="fas fa-arrow-left"/>
    </nuxt-link>
    <div
      v-if="user"
      class="container">
      <h1 class="profile__name">{{ user.name }}</h1>
      <img
        :src="user.avatar.url"
        :alt="user.name"
        class="profile__avatar">
      <h2 class="profile__heading">Thông tin cá nhân</h2>
      <el-row :gutter="20">
        <el-col :sm="12">
          <el-input
            v-model="user.username"
            placeholder="">
            <template slot="prepend">Tên người dùng</template>
          </el-input>
          <el-input
            v-model="user.name"
            placeholder="">
            <template slot="prepend">Họ &amp; tên</template>
          </el-input>
        </el-col>
        <el-col :sm="12">
          <el-input
            v-model="user.address"
            placeholder="">
            <template slot="prepend">Địa chỉ</template>
          </el-input>
          <el-input
            v-model="user.email"
            placeholder="">
            <template slot="prepend">Email</template>
          </el-input>
        </el-col>
      </el-row>
      <button class="btn btn--default profile__submit">Cập nhật</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style lang="scss">
.profile {
  @include flex-center;

  min-height: 100vh;
  position: relative;

  &__avatar {
    border: 4px solid darken($color: $color-white, $amount: 10%);
    border-radius: 100%;
    box-shadow: $box-shadow-light;
    display: block;
    margin: 0 auto;
    width: 120px;
    height: 120px;
  }

  &__name {
    color: $color-text;
    text-align: center;
  }

  &__heading {
    color: $color-text;
  }

  &__submit {
    display: flex;
    margin: 0 auto;
  }
}

.el-input {
  margin-bottom: rem(20);

  &-group {
    &__prepend {
      border: 1px solid rgba($color: $color-white, $alpha: 0.2);
      border-right: none;
      width: 150px;
    }
  }
}
</style>
