<template>

  <span v-if="id!==0">
    {{ data.name }}
    {{ data.short_name }}
  </span>
  <span v-else>
    Немає такого користувача
  </span>




</template>

<script>
import axios from "axios";

let id = 0;
export default {
  name: "SeeFaculties",

  data: () => ({
    data: [],

  }),
  mounted() {
    this.initialise();


  },

  methods: {
    async initialise() {
      id = new URL(location.href).searchParams.get('id');
      console.log(id)
      if (id !== 0) {
        this.data = (await (axios.get('http://localhost:8080/faculties/viewALL'))).data;
      }
    },


  }
}


</script>

<style scoped>

</style>