<template>
  <div class="profile">
    <nuxt-link to="/dashboard" class="btn btn--back">
      <i class="fas fa-arrow-left"></i>
    </nuxt-link>
    <div class="container">
      <h1 class="profile__name">{{ user.name }}</h1>
      <h2 class="profile__heading">Thông tin cá nhân</h2>
      <el-row :gutter="20">
        <el-col :sm="12">
          <el-input placeholder="" v-model="user.username">
            <template slot="prepend">Tên người dùng</template>
          </el-input>
          <el-input placeholder="" v-model="user.name">
            <template slot="prepend">Họ &amp; tên</template>
          </el-input>
          <el-input placeholder="" v-model="user.email">
            <template slot="prepend">Email</template>
          </el-input>
        </el-col>
        <el-col :sm="12">
          <el-input placeholder="" v-model="user.address">
            <template slot="prepend">Địa chỉ</template>
          </el-input>
          <el-input placeholder="" v-model="user.type" disabled>
            <template slot="prepend">Loại người dùng</template>
          </el-input>
        </el-col>
      </el-row>
      <button class="btn btn--dark-gray profile__submit">Cập nhật</button>
      <!-- <h2 class="profile__heading">Thành tích</h2> -->
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
        username: 'LyCao',
        name: 'Cao Ý Ly',
        email: 'test@123',
        address: '',
        type: 'student'
      }
    }
  }
  // computed: {
  //   ...mapGetters({
  //     user: 'user'
  //   })
  // }
}
</script>

<style lang="scss">
.profile {
  @include flex-center;

  background-color: $color-dark-blue;
  min-height: 100vh;
  position: relative;

  &__name {
    color: lighten($color: $color-gray, $amount: 40%);
    text-align: center;
  }

  &__heading {
    color: lighten($color: $color-gray, $amount: 40%);
  }

  &__submit {
    display: flex;
    margin: 0 auto;
  }
}

.el-input-group__prepend {
  background-color: $color-dark-gray;
  border: 1px solid rgba($color: $color-white, $alpha: 0.2);
  border-right: none;
  color: rgba($color: $color-white, $alpha: 0.8);
  width: 150px;
}

.el-input {
  margin-bottom: rem(20);

  &__inner {
    background-color: rgba($color: $color-dark-gray, $alpha: 0.8);
    border: 1px solid rgba($color: $color-white, $alpha: 0.2);
    color: $color-white;
  }
}

.el-input.is-disabled .el-input__inner {
  background-color: $color-gray;
}
</style>
