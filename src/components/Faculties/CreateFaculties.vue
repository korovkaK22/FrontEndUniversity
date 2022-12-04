<template>
ствоирть факультет
</template>

<script>
import axios from "axios";


export default {
  name: "CreateFaculties",
  data: () => ({
    lists: [],

  }),
  mounted() {
    this.initialise();


  },

  methods: {
    async initialise() {


      this.lists = (await (axios.get('http://localhost:8080/faculties/viewALL'))).data;

    },
  }
}
</script>

<style scoped>

</style>

