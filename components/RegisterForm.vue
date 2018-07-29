<template>
  <form class="form form--register" action="#">
    <h5 class="form__title">ĐĂNG KÍ HỌC VIÊN</h5>
    <p class="form__lead">Etiam mollis risus et odio feugiat, sed iaculis mi pharetra. Vestibulum lorem risus, rhoncus at porta sed, elementum.</p>
    <div class="el-input-wrapper" :class="{ hidden: hasAccount}">
      <label for="name" class="form__label"><i class="fas fa-user"></i>Họ tên</label>
      <el-input v-model="name" id="name" type="text"></el-input>
    </div>
    <div class="el-input-wrapper">
      <label for="email" class="form__label"><i class="fas fa-envelope"></i>Email</label>
      <el-input v-model="email" id="email" type="email"></el-input>
    </div>
    <div class="el-input-wrapper">
      <label for="password" class="form__label"><i class="fas fa-lock"></i>Mật khẩu</label>
      <el-input v-model="password" id="password" type="password"></el-input>
    </div>
    <!-- <label for="confirmPassword" class="form__label">Confirm password</label>
    <el-input placeholder="Please input" v-model="input" id="confirmPassword" type="password"></el-input> -->
    <button class="btn btn--default btn--round form__btn" @click.prevent="login">ĐĂNG KÍ</button>
    <p class="form__note">Đã có tài khoản? <a class="text-semi" @click="hasAccount = !hasAccount">Đăng nhập ngay</a></p>
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
        await this.$store.dispatch('login', {
          identifier: this.email,
          password: this.password
        })
      } catch (e) {
        this.error = e.message
      }
    }
    // login: function () {
    //   this.$auth.login({ identifier: this.email, password: this.password }).then(function () {
    //     console.log('success')
    //   })
    // },

    // register: function () {
    //   this.$auth.register({ name: this.name, email: this.email, password: this.password }).then(function () {
    //     // Execute application logic after successful registration
    //   })
    // }
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
