<template>
  <main>
    <header class="hero">
      <div class="container">
        <el-row :gutter="20">
          <el-col :sm="10">
            <div class="hero__main">
              <h1 class="hero__heading">E-School</h1>
              <p class="hero__lead">Nulla aliquam volutpat nisi, et blandit est gravida non. In vel tempus mauris. In hendrerit, leo et molestie iaculis, turpis sem pharetra erat, a vestibulum nibh metus eu eros.</p>
              <div class="btn-wrapper">
                <nuxt-link
                  to="/dashboard"
                  class="btn btn--white btn--round mb-4">BẮT ĐẦU</nuxt-link>
              </div>
            </div>
          </el-col>
          <el-col :sm="{ span: 12, offset: 2 }">
            <register-form/>
          </el-col>
        </el-row>
      </div>
    </header>
    <section class="section section--intro">
      <div class="container">
        <div class="subsection subsection--narrow">
          <el-row :gutter="20">
            <el-col :sm="14">
              <h2 class="section__heading">Tại sao chọn Kid Learning?</h2>
              <p class="section__text">Mauris fermentum rutrum erat eget dapibus. Aliquam erat volutpat. Maecenas ut neque odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
            </el-col>
            <el-col :sm="10"/>
          </el-row>
        </div>
        <div class="subsection">
          <el-row :gutter="120">
            <el-col :sm="10">
              <div
                v-scroll-reveal="{ origin: 'left' }"
                class="section__img-wrapper">
                <div
                  class="section__img__underlay section__img__underlay--left"
                  style="background: linear-gradient(to right, #43cea2, #185a9d);"/>
                <img
                  src="~/assets/images/intro/study-1.jpg"
                  alt="Study"
                  class="section__img">
              </div>
            </el-col>
            <el-col :sm="{ span: 13, offset: 1 }">
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-green">
                  <i class="fas fa-book"/>
                </span>
                Mô phỏng thực tế giáo trình</h4>
              <p
                v-scroll-reveal
                class="section__text">Mauris fermentum rutrum erat eget dapibus. Aliquam erat volutpat. Maecenas ut neque odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-blue">
                  <i class="fas fa-hand-point-up"/>
                </span>
                Lớp học tương tác</h4>
              <p
                v-scroll-reveal
                class="section__text" >Mauris fermentum rutrum erat eget dapibus. Aliquam erat volutpat. Maecenas ut neque odio.</p>
            </el-col>
          </el-row>
        </div>
        <div class="subsection">
          <el-row :gutter="120">
            <el-col :sm="{ span: 13, offset: 1 }">
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-orange">
                  <i class="fas fa-file-alt"/>
                </span>
                Hệ thống bài tập phong phú</h4>
              <p
                v-scroll-reveal
                class="section__text">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris auctor vestibulum tortor eu tincidunt.</p>
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-yellow">
                  <i class="fas fa-users"/>
                </span>
                Hỗ trợ trực tiếp từ giáo viên</h4>
              <p
                v-scroll-reveal
                class="section__text">Integer dapibus metus ac dignissim suscipit. Ut eu lorem vel nisi tincidunt varius. Mauris libero ipsum, lacinia quis pellentesque id, volutpat sit amet ante.</p>
            </el-col>
            <el-col :sm="10">
              <div
                v-scroll-reveal="{ origin: 'right' }"
                class="section__img-wrapper">
                <div
                  class="section__img__underlay section__img__underlay--right"
                  style="background: linear-gradient(to right, #fdc830, #f37335);"/>
                <img
                  src="~/assets/images/intro/study-3.jpg"
                  alt="Study"
                  class="section__img">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import RegisterForm from '~/components/RegisterForm'

export default {
  components: {
    RegisterForm
  },
  middleware: ['auth-home']
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("~/assets/images/background/morphing-mobile.png");

  @include media(">=sm") {
    background-image: url("~/assets/images/background/morphing-desktop.png");
  }
}
</style>
