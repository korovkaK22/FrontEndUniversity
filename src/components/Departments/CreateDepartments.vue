<template>
  <div class="Vue">
    <div class=titleText>Створити Факультет</div>

    <form class="registrationForm">

      <div class="group">
        <input type="text" v-model="newName" required>
        <span class="bar"></span>
        <label>Назва Відділу</label>
      </div>

      <div class="group">
        <input type="text" v-model="newShortName" required>
        <span class="bar"></span>
        <label>Абревіатура</label>
      </div>


      <div class="selectBox">
        <select v-model="newOption" >
          <option value="" disabled selected >Факультет</option>
          <option v-for="o in options" :key="o.id"
             v-bind:value=o.id>{{o.name}}</option>
        </select>
      </div>



      <div class=itemButton>
        <a @click=" createNew();" class="green-shine-button">Створити</a>
      </div>

      <div class=mistake>
        {{mistake}}
      </div>
    </form>




  </div>
</template>

<script>
import axios from "axios";

import {InputValidation} from "@/components/Validation/InputValidation";
import {CheckExist} from "@/components/Validation/CheckExist";

export default {

  name: "CreateDepartments", //===========
  data: () => ({
    BType:'Departments', //====================
    type:'departments', //====================
    newName:'',
    newShortName:'',
    options:[],
    newOption:'',
    mistake:'',

  }),

  mounted() {
    this.initialise();
  },

  methods: {


    async initialise() {
      this.options=(await (axios.get('http://localhost:8080/faculties/viewALL'))).data;
    },

    async createNew() {                                                     //===================

      if (!InputValidation.checkName(this.newName)){
        this.mistake='Невірно введене ім\'я'
        return;
      }
      if (!InputValidation.checkShortName(this.newShortName)){
        this.mistake='Невірно введена Абревіатура'
        return;
      }
      if (this.newOption==='' || !(await(CheckExist.checkFacultyById(this.newOption)))){ //===============
        this.mistake='Такого факультету не існує!'
        return;
      }


      this.mistake='';

      await axios.post('http://localhost:8080/'+this.type+'/create',{
        name: this.newName, shortName: this.newShortName,
        facultyId:this.newOption
      })

      window.location.href = '/view'+this.BType;
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

.mistake{
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font:1.0em "Fira Sans", sans-serif;
  color: #9d0000;
}



/*=========Інпути красиві==========*/
/* form starting stylings */
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
  border-bottom: 1px solid #eaeaea;
}
input:focus {
  outline: none;
}

/* LABEL */
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


/* BOTTOM BARS  */
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




/*=======Кнопочки красиві========== */

.red-shine-button {
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #fe6637;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #fe6637;
  transition: .2s ease-in-out;
}

.red-shine-button:before {
  content: "";
  background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}

.red-shine-button:hover {
  background: #fe6637;
  color: #fff;
}

.red-shine-button:hover:before {
  left: 150px;
  transition: .5s ease-in-out;
}



.green-shine-button {

  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 2vw auto;
  position: relative;
  overflow: hidden;
  border: 2px solid #53b43b;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #52b33c;
  transition: .2s ease-in-out;
}

.green-shine-button:before {
  content: "";
  background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}

.green-shine-button:hover {
  background: #51b23d;
  color: #fff;
}

.green-shine-button:hover:before {
  left: 150px;
  transition: .5s ease-in-out;
}



/*================Селект бокс================*/

.selectBox{

  font-size: 18px;
  color: #1c87c9;
  border-radius: 5px;
  box-shadow: 4px 4px #ccc;
  margin: 0 auto;
  background: none;
  border:none;

}

.selectBox select{
  padding-left: 1vw;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #999;
  width: 100%;
  height: 4vw;
  background: none;
  font-size: 120%;


  border-top: rgba(104, 12, 154, 0.09);
  border-left: rgba(104, 12, 154, 0.09);
  border-right: rgba(104, 12, 154, 0.09);
  border-bottom: #e8e8e9 ;
  border-width: 1vw;
}

.selectBox option{
  background: none;

  border-top: rgba(104, 12, 154, 0.09);
  border-left: rgba(104, 12, 154, 0.09);
  border-right: rgba(104, 12, 154, 0.09);
  border-bottom: #e8e8e9 ;
  border-width: 1vw;
}


</style>

