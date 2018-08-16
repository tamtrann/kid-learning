<template>
  <modal name="thread" :classes="['v--modal', 'thread-modal']" :adaptive="true" width="100%" height="auto" :scrollable="true">
    <div slot="top-right">
      <button class="btn" @click="$modal.hide('thread')">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewbox="0 0 17 17">
          <path fill="#939393" fill-rule="evenodd" d="M11.736 8.5l4.83 4.829c.29.29.434.644.434 1.063 0 .419-.144.788-.435 1.111l-1.062 1.062c-.321.29-.692.435-1.11.435-.419 0-.773-.145-1.063-.435L8.5 11.736l-4.829 4.83c-.29.289-.644.434-1.062.434-.42 0-.79-.145-1.112-.435L.435 15.503A1.614 1.614 0 0 1 0 14.393c0-.42.145-.773.435-1.064L5.265 8.5.435 3.671A1.448 1.448 0 0 1 0 2.608c0-.419.145-.788.435-1.111L1.497.435C1.82.145 2.189 0 2.609 0c.418 0 .772.145 1.062.435L8.5 5.264l4.83-4.83C13.62.146 13.974 0 14.392 0c.419 0 .79.145 1.111.435l1.062 1.062c.29.323.435.692.435 1.11 0 .42-.144.773-.435 1.064L11.736 8.5z"></path>
        </svg>
      </button>
    </div>
    <thread-new/>
    <thread v-for="item in threads" :key="item.id" :thread="item" @addResponse="onAddResponse($event, index)"/>
  </modal>
</template>

<script>
import Thread from '~/components/Thread'
import ThreadNew from '~/components/ThreadNew'

export default {
  components: {
    Thread,
    ThreadNew
  },
  props: {
    threads: Array
  },
  methods: {
    onAddResponse (response, index) {
      this.threads[index].responses.push(response)
    }
  }
}
</script>
