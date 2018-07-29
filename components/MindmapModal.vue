<template>
  <modal name="mindmap" :classes="['v--modal', 'mindmap-modal']" :adaptive="true" width="100%" height="auto" :scrollable="true">
    <mindmap/>
  </modal>
</template>

<script>
import Mindmap from '~/components/Mindmap'

export default {
  components: {
    Mindmap
  }
}
</script>
