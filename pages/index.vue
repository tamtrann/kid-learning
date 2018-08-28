<template>
  <main>
    <header class="hero">
      <div class="container">
        <el-row :gutter="20">
          <el-col :sm="10">
            <div class="hero__main">
              <h1 class="hero__heading">E-SCHOOL</h1>
              <p class="hero__lead">E-school là một hệ thống học tập mới với nhiều công cụ bổ ích giúp cho bạn tiếp thu kiến thức rất nhanh và hiệu qủa. Hãy trải nghiệm cùng e - School phát triển tương lai bạn nhé!</p>
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
              <h2 class="section__heading">Tại sao chọn E-School?</h2>
              <p class="section__text">E - school có những tính năng tuyệt vời giúp cho bạn thay đổi phương pháp học tập và nâng cao khả năng tự học một cách rất hiệu quả. Bạn có thể mang e - school đi khắp mọi nơi, học tập ở mọi chỗ mà bạn muốn. Không phải cuốn sách giáo khoa khô khan mà bạn đang sử dụng, thay vào đó, e-school gửi bạn những cuốn sách với nhiều hiệu ứng mới lạ và độc đáo. Bên cạnh đó, những công cụ hỗ trợ cùng với những dòng sự kiện lịch sử và bản đồ địa lý thế giới trực quan của e-school cũng sẽ là nơi giúp cho bạn mở mang kiến thức và tầm hiểu biết của mình.</p>
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
                class="section__text">Với cách mô tả sách giáo khoá mới lạ và độc đáo cùng với những công cụ hay ho sẽ giúp bạn cảm thấy việc học thú vị hơn bao giờ hết.</p>
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-blue">
                  <i class="fas fa-hand-point-up"/>
                </span>
                Lớp học tương tác</h4>
              <p
                v-scroll-reveal
                class="section__text">E - school cung cấp cho bạn kênh giải đáp mắc mắc để chúng hơn. có thể cùng nhau học tập hiệu quả hơn.</p>
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
                class="section__text">Hệ thống bài tập đa dạng và phong phú thuộc các chương và các bài học cùng với bộ câu hỏi gồm nhiều dạng câu hỏi khác nhau sẽ giúp cho bạn củng cố kiến thức và kiểm tra lại trình độ của bản thân.</p>
              <h4
                v-scroll-reveal
                class="section__heading section__heading--icon">
                <span class="section__heading__icon text-neon-yellow">
                  <i class="fas fa-users"/>
                </span>
                Hỗ trợ trực tiếp từ giáo viên</h4>
              <p
                v-scroll-reveal
                class="section__text">Khi bạn gặp vấn đề khó hiểu trong bài học, bạn có thể gửi câu hỏi ngay đến kênh hỏi đáp của e - school để giáo viên có thể hỗ trợ nhanh chóng giải đáp hết những khúc mắc cho bạn.</p>
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
