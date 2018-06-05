<template>
  <div class="note__new">
    <el-input placeholder="Add note" v-model="newNote" @keyup.native.enter="addNote"></el-input>
    <!-- <el-button @click.prevent="addNote">Enter</el-button> -->
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    data() {
      return {
        newNote: ""
      };
    },
    methods: {
      ...mapMutations({
        add: "note/add"
      }),
      addNote() {
        if (this.newNote.trim()) {
          this.add({ note: this.newNote });
          this.newNote = "";
        }
      }
    }
  };
</script>
