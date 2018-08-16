<template>
  <div>
    <div class="class">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="6">
          <div class="class__card" @click="show('6')">
            <span class="class__card__name text-neon-green">6</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <div class="class__card" @click="show('7')">
            <span class="class__card__name text-neon-yellow">7</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <div class="class__card" @click="show('8')">
            <span class="class__card__name text-neon-pink">8</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6">
          <div class="class__card" @click="show('9')">
            <span class="class__card__name text-neon-purple">9</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="syllabus">
      <!-- <modal name="6" :adaptive="true" width="80%" height="auto" :scrollable="true" :resizable="true">
        <div class="syllabus__card">
          <div class="syllabus__copy">
            <h6 class="syllabus__badge syllabus__badge--brown">Giáo trình</h6>
            <h2 class="syllabus__name text-brown">Lịch sử</h2>
            <p class="syllabus__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.</p>
            <button class="btn btn--brown btn--round" data-url="/course/history-6" data-modal="6" @click=goTo($event)>HỌC NGAY</button>
            <button class="btn btn--brown btn--round" data-url="/timeline" data-modal="6" @click=goTo($event)>DÒNG SỰ KIỆN LỊCH SỬ</button>
          </div>
          <img src="~/assets/images/intro/history-1.jpg" alt="Lịch sử" class="syllabus__img">
        </div>
        <div class="syllabus__card">
          <div class="syllabus__copy">
            <h6 class="syllabus__badge syllabus__badge--green">Giáo trình</h6>
            <h2 class="syllabus__name text-green">Địa lí</h2>
            <p class="syllabus__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.</p>
            <nuxt-link to="/course/geography-6" class="btn btn--green btn--round" type="submit">HỌC NGAY</nuxt-link>
          </div>
          <img src="~/assets/images/intro/geography-1.jpg" alt="Địa lí" class="syllabus__img">
        </div>
      </modal> -->
      <modal
        width="80%" height="auto"
        :adaptive="true" :scrollable="true" :resizable="true"
        v-for="(item, index) in syllabus" :key="index" :name="item.grade">
        <div class="syllabus__card"
          v-for="(book, index) in item.books" :key="index">
          <div class="syllabus__copy">
            <h2 class="syllabus__name" :class="['text-' + book.theme]">{{ book.title }}</h2>
            <p class="syllabus__description">{{ book.description }}</p>
            <button class="btn btn--round" :class="['btn--' + book.theme]" v-for="(url, index) in book.urls" :key="index" :data-url="url.link" :data-modal="item.grade" @click="goTo($event)">{{ url.name }}</button>
          </div>
          <img :src="require(`~/assets/images/intro/${book.img}`)" :alt="book.title" class="syllabus__img">
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      syllabus: [{
        grade: '6',
        books: [{
          id: '5b15e581e8db3027119530bc',
          title: 'Lịch sử',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Học ngay',
            link: 'course/history-6'
          }, {
            name: 'Dòng sự kiện lịch sử',
            link: '/timeline'
          }],
          img: 'history-1.jpg',
          theme: 'brown'
        }, {
          id: '5b2dbbc07a45863cf280ef50',
          title: 'Địa lí',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Học ngay',
            link: 'course/geography-6'
          }, {
            name: 'Bản đồ địa lí tương tác',
            link: '/geomap'
          }],
          img: 'geography-1.jpg',
          theme: 'green'
        }]
      }, {
        grade: '7',
        books: [{
          id: '5b15e588e8db3027119530bd',
          title: 'Lịch sử',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Phần 1',
            link: 'course/history-7-p1'
          }, {
            name: 'Phần 2',
            link: 'course/history-7-p2'
          }, {
            name: 'Dòng sự kiện lịch sử',
            link: '/timeline'
          }],
          img: 'history-1.jpg',
          theme: 'brown'
        }, {
          id: '5b2dbc027a45863cf280ef51',
          title: 'Địa lí',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Phần 1',
            link: 'course/geography-7-p1'
          }, {
            name: 'Phần 2',
            link: 'course/geography-7-p2'
          }, {
            name: 'Bản đồ địa lí tương tác',
            link: '/geomap'
          }],
          img: 'geography-1.jpg',
          theme: 'green'
        }]
      }, {
        grade: '8',
        books: [{
          id: '5b15e58ee8db3027119530be',
          title: 'Lịch sử',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Phần 1',
            link: 'course/history-8-p1'
          }, {
            name: 'Phần 2',
            link: 'course/history-8-p2'
          }, {
            name: 'Dòng sự kiện lịch sử',
            link: '/timeline'
          }],
          img: 'history-1.jpg',
          theme: 'brown'
        }, {
          id: '5b2dbc157a45863cf280ef52',
          title: 'Địa lí',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum justo ut nibh interdum, sit amet molestie ex lacinia. Suspendisse sagittis nunc quis lorem ornare, et varius purus vulputate. Aenean vitae tempus tellus. Nam et mattis quam, vitae molestie mi. Proin ac orci orci.',
          urls: [{
            name: 'Phần 1',
            link: 'course/geography-8-p1'
          }, {
            name: 'Phần 2',
            link: 'course/geography-8-p2'
          }, {
            name: 'Bản đồ địa lí tương tác',
            link: '/geomap'
          }],
          img: 'geography-1.jpg',
          theme: 'green'
        }]
      }]
    }
  },
  methods: {
    show (modal) {
      this.$modal.show(modal)
    },
    goTo (event) {
      this.$modal.hide(event.target.dataset.modal)
      this.$router.push({ path: event.target.dataset.url })
    }
  }
}
</script>

<style lang="scss">
.class {
  margin-bottom: rem(20);

  &__card {
    @include flex-center;

    background-color: $color-dark-gray;
    border-radius: 8px;
    box-shadow: $box-shadow-heavy;
    cursor: pointer;
    height: 200px;
    margin-bottom: rem(20);
    opacity: 0.8;

    &:hover {
      box-shadow: $box-shadow-normal;
      opacity: 1;
    }

    &__name {
      font-size: rem(100);
      font-weight: $font-weight-bold;
    }
  }
}

.syllabus {
  &__badge {
    color: $color-white;
    font-weight: $font-weight-normal;
    line-height: rem(30);
    padding-right: rem(12);
    position: absolute;
    top: rem(12);
    left: 0;
    text-indent: rem(25);

    &::after {
      content: "";
      border-width: 1.75rem 1rem 0 0;
      border-style: solid;
      position: absolute;
      top: 0;
      right: -1rem;
      transform: rotate(1turn);
      width: 0;
      height: 0;
    }

    &--brown {
      background-image: linear-gradient(to right, #605c3c, #a9761b);

      &::after {
        border-color: #a9761b transparent transparent transparent;
      }
    }

    &--green {
      background-image: linear-gradient(90deg, #02b3e4 0, #02ccba);

      &::after {
        border-color: #02ccba transparent transparent transparent;
      }
    }
  }

  &__card {
    // background-color: $color-white;
    // border-radius: 6px;
    padding: 0 rem(30);
    position: relative;

    @include media(">=sm") {
      display: flex;
      align-items: flex-start;
      height: 300px;
    }

    & + & {
      // border-top: 0.5px solid rgba($color: $color-gray, $alpha: 0.2);
      margin-top: rem(20);
    }
  }

  &__copy {
    padding: rem(40) rem(15);
    position: relative;

    @include media(">=sm") {
      flex-grow: 9999;
      width: 50%;
    }
  }

  &__cta {
    font-size: $font-size-6;
    font-weight: $font-weight-semi;
    text-transform: uppercase;
  }

  &__description {
    color: rgba($color: $color-white, $alpha: 0.6);
    margin-bottom: rem(20);
  }

  &__img {
    display: none;

    @include media(">=sm") {
      border-radius: 4px;  
      box-shadow: $box-shadow-normal;
      display: block;
      flex-grow: 1;
      max-width: 50%;
      height: 100%;
    }
  }

  &__name {
    font-size: $font-size-3;
    font-weight: $font-weight-bold;
    letter-spacing: 2px;
    margin-top: rem(20);
    margin-bottom: rem(10);
  }
}
</style>
