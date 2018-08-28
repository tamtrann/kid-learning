<template>
  <div class="thread">
    <div
      v-if="thread.user"
      class="thread__topic" >
      <img
        :src="thread.user.avatar.url"
        :alt="thread.user.name"
        class="thread__avatar">
      <div class="thread__responses__item__body">
        <span class="thread__user">{{ thread.user.name }}</span>
        <p class="thread__content">{{ thread.content }}</p>
        <span class="thread__time">{{ thread.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
      </div>
    </div>
    <ul class="thread__responses">
      <li
        v-for="item in thread.answers"
        :key="item.id"
        class="thread__responses__item">
        <img
          :src="item.user.avatar.url"
          :alt="item.user.name"
          class="thread__avatar">
        <div class="thread__responses__item__body">
          <span class="thread__user">{{ item.user.name }}</span>
          <p class="thread__content">{{ item.content }}</p>
          <span class="thread__time">{{ item.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
        </div>
      </li>
      <li class="thread__responses__item thread__responses__item--new">
        <img
          :src="user.avatar.url"
          :alt="user.name"
          class="thread__avatar">
        <el-input
          id="newContent"
          v-model="newContent"
          type="text"
          @keyup.enter.native="submitResponse"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    thread: Object,
    required: true
  },
  data () {
    return {
      newContent: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    submitResponse () {
      this.$emit('addAnswer', this.newContent)
      this.newContent = ''
    }
  }
}
</script>

<style lang="scss">
.thread {
  margin-bottom: rem(20);

  &__avatar {
    border: 2px solid $color-dark-blue;
    border-radius: 100%;
    margin-right: rem(20);
    width: rem(54);
    height: rem(54);
  }

  &__btn {
    display: flex;
    margin: 0 auto;
  }

  &__content {
    color: $color-text;
    letter-spacing: 0.5px;
  }

  &__new {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }

  &__responses {
    list-style: none;
    padding-left: rem(80);

    &__item {
      display: flex;
      align-items: flex-start;
      padding: rem(15);
      position: relative;

      &__body {
        // background-color: darken($color: $color-white, $amount: 1%);
        border-radius: 20px;
        box-shadow: $box-shadow-normal;
        flex-grow: 1;
        padding: rem(20);
      }

      &--new {
        border-bottom: none;
        display: flex;
        align-items: center;
      }
    }
  }

  &__time {
    color: $color-text;
    display: block;
    font-size: $font-size-sm;
    text-align: right;
  }

  &__topic {
    border-radius: 4px;
    display: flex;
    align-items: flex-start;
    padding: rem(15);
  }

  &__user {
    color: $color-text;
    font-weight: $font-weight-bold;
  }

  &-modal {
    min-height: 100vh;
  }
}
</style>
