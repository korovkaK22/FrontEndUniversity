<template>
 no connection

  {{res}}




</template>

<script>
//import axios from "axios";
import {CheckExist} from "@/components/Validation/CheckExist";

export default {
  name: "NoConnection",

  data: () => ({
    res:'',

  }),
  created() {
   //this.checkConnection();

  },

  methods:{
    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}},


     },


}
</script>

<style scoped>

</style>