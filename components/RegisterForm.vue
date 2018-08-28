<template>
  <form
    class="form form--register"
    action="#">
    <h5 class="form__title">{{ hasAccount ? 'HỌC VIÊN ĐĂNG NHẬP' : 'ĐĂNG KÍ HỌC VIÊN' }}</h5>
    <p class="form__lead">{{ hasAccount ? 'Giờ học đến rồi! Đăng nhập để cùng nhau học tập nhé!' : 'Đăng ký ngay vào hệ thống của e - school để trải nghiệm những tính năng tuyệt vời cùng chúng mình nhé!' }}</p>
    <div
      :class="{ hidden: hasAccount}"
      class="el-input-wrapper">
      <label
        for="name"
        class="form__label"><i class="fas fa-user"/>Họ tên</label>
      <el-input
        id="name"
        v-model="name"
        type="text"/>
    </div>
    <div class="el-input-wrapper">
      <label
        for="email"
        class="form__label"><i class="fas fa-envelope"/>Email</label>
      <el-input
        id="email"
        v-model="email"
        type="email"/>
    </div>
    <div class="el-input-wrapper">
      <label
        for="password"
        class="form__label"><i class="fas fa-lock"/>Mật khẩu</label>
      <el-input
        id="password"
        v-model="password"
        type="password"/>
    </div>
    <button
      class="btn btn--default btn--round form__btn"
      @click.prevent="login">{{ hasAccount ? 'ĐĂNG NHẬP' : 'ĐĂNG KÍ' }}</button>
    <p class="form__note">{{ hasAccount ? 'Chưa' : 'Đã' }} có tài khoản?
      <a
        class="text-semi"
        @click="hasAccount = !hasAccount">{{ !hasAccount ? 'Đăng nhập ngay' : 'Đăng kí ngay' }}</a>
    </p>
  </form>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      hasAccount: false,
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('LOGIN', {
          identifier: this.email,
          password: this.password
        })
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style lang="scss">
.form--register {
  padding: rem(40);
  background-color: $color-white;
  box-shadow: $box-shadow-light;
  border-radius: 10px;
}
</style>
