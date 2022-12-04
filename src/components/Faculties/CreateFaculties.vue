<template>
  <div class="Vue">
    <div class=titleText>Створити Факультет</div>

    <form class="registrationForm">
      <div class="group">
        <input type="text" required>
        <span class="bar"></span>
        <label>Назва Факультету</label>
      </div>
      <div class="group">
        <input type="text" required>
        <span class="bar"></span>
        <label>Абревіатура</label>
      </div>
    </form>


  </div>
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



.Vue {
  margin: 1vw auto;
  width: 100%;
  font-size: 2vw;
}


.titleText {
  margin: 0 auto;
  text-align: center;
  font-size: 3vw;
  padding-bottom: 2vw;
}

a {
  color: #3c5994;
  text-decoration: none;
}

.registrationForm{
  width: 60%;
  margin: 0 auto;

}



/*=========Інпути красиві==========*/
/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 30px;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
input{
  background: none;

}

label {
  color: #999;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 15px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label {
  top: -15px;
  font-size: 14px;
  color: #5264AE;
}


/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 320px;
}
.bar:before, .bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #5264AE;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
</style>

