<template>
  <div class="thread">
    <div class="thread__topic">
      <img :src="thread.topic.avatar" :alt="thread.topic.name" class="thread__avatar">
        <div class="thread__responses__item__body">
        <span class="thread__user">{{ thread.topic.name }}</span>
        <p class="thread__content">{{ thread.topic.content }}</p>
        <span>{{ thread.topic.timestamp | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
      </div>
    </div>
    <ul class="thread__responses">
      <li v-for="(item, index) in thread.responses" :key="index" class="thread__responses__item">
        <img :src="item.avatar" :alt="item.name" class="thread__avatar">
        <div class="thread__responses__item__body">
          <span class="thread__user">{{ item.name }}</span>
          <p class="thread__content">{{ item.content }}</p>
          <span class="thread__time">{{ item.timestamp | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
        </div>
      </li>
      <li class="thread__responses__item thread__responses__item--new">
        <img :src="user.avatar" :alt="user.name" class="thread__avatar">
        <!-- <span class="thread__user">{{ user.name }}</span> -->
        <el-input v-model="newContent" id="newContent" type="text" @keyup.enter.native="submitResponse"></el-input>
        <!-- <p class="thread__content">{{ item.content }}</p>
        <span>{{ item.timestamp }}</span> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      newContent: ''
    }
  },
  props: [
    'thread'
  ],
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    submitResponse () {
      let newResponse = {
        name: this.user.name,
        avatar: this.user.avatar,
        content: this.newContent,
        timestamp: Date.now()
      }

      this.$emit('addResponse', newResponse)

      // this.responses.push(newResponse)
      this.newContent = ''
    }
  }
}
</script>

<style lang="scss">
.thread {
  margin-bottom: rem(20);

  &__avatar {
    border: 2px solid $color-white;
    border-radius: 100%;
    margin-right: rem(20);
  }

  &__btn {
    display: flex;
    margin: 0 auto;
  }

  &__content {
    color: $color-white;
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
      border-bottom: 1px solid rgba($color: $color-gray, $alpha: 0.5);
      // border-radius: 4px;
      // box-shadow: $box-shadow-light;
      display: flex;
      align-items: flex-start;
      padding: rem(15);
      position: relative;

      &__body {
        flex-grow: 1;
      }

      &--new {
        border-bottom: none;
        display: flex;
        align-items: center;
      }
    }
  }

  &__time {
    color: $color-white;
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
    color: $color-white;
    font-weight: $font-weight-bold;
  }

  &-modal {
    min-height: 100vh;
  }

  .el-input__inner {
    background-color: rgba($color: $color-dark-gray, $alpha: 0.8);
    border: 1px solid rgba($color: $color-white, $alpha: 0.2);
    color: $color-white;
  }

  .el-input.is-disabled .el-input__inner {
    background-color: $color-gray;
  }
}
</style>
