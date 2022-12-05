<template>
  <div class="Vue">

    <span v-if="id!==0">
    <div class=titleText>Редагувати Розклад</div>

     <form class="registrationForm">

      <div class="group">
        <input type="text" v-model="newTime" required>
        <span class="bar"></span>
        <label>Час</label>
      </div>

      <div class="group">
        <input type="text" v-model="newClassroom" required>
        <span class="bar"></span>
        <label>Аудиторія</label>
      </div>

      <div class="selectBox">
        <select v-model="newTeachers" >
          <option value="" disabled selected >Викладач</option>
          <option v-for="o in teachers" :key="o.id"
                  v-bind:value=o.id>{{o.name}}</option>
        </select>
      </div>

      <div class="selectBox">
        <select v-model="newDisciplines" >
          <option value="" disabled selected >Дисципліна</option>
          <option v-for="o in disciplines" :key="o.id"
                  v-bind:value=o.id>{{o.name}}</option>
        </select>
      </div>

      <div class="selectBox">
        <select v-model="newGroups" >
          <option value="" disabled selected >Група</option>
          <option v-for="o in groups" :key="o.id"
                  v-bind:value=o.id>{{o.name}}</option>
        </select>
      </div>



      <div class=itemButton>
        <a @click=" editItem();" class="green-shine-button">Зберегти</a>
      </div>
      </form>

      <!--  Помилка при Редагуванні-->
    <div class=appearMistake>
      {{ appearMistakes }}
    </div>
    <div class=mistake>
      {{ mistake }}
    </div>

  </span>
    <!--    По айдішніку не найшли-->
    <span v-else>
    <div class="dontFound">
        Розклад не знайдено.<br> Перевірте правильність набору
    </div>
  </span>
  </div>

</template>

<script>
import axios from "axios";

import {InputValidation} from "@/components/Validation/InputValidation";
import {CheckExist} from "@/components/Validation/CheckExist";

export default {

  name: "ChangeSchedules", //===========
  data: () => ({
    BType:'Schedules', //====================
    type:'schedules', //====================

    newTime:'',
    newClassroom:'',
    groups:[],
    newGroups:'',
    teachers:[],
    newTeachers:'',
    disciplines:[],
    newDisciplines:'',

    mistake:'',
    appearMistakes: '',
    id: 0,
  }),

  mounted() {
    this.initialise();
  },

  methods: {


    async initialise() {
      let res = new URL(location.href).searchParams.get('id');
      if (res === '' || !(await CheckExist.checkSchedulesById(res))) {  //===============
        return;
      }

      //Підгрузка даних
      this.id = res
      let data = (await (axios.get('http://localhost:8080/'+this.type+'/view/' + this.id))).data;
      this.groups=(await (axios.get('http://localhost:8080/groups/viewALL'))).data;
      this.teachers=(await (axios.get('http://localhost:8080/teachers/viewALL'))).data;
      this.disciplines=(await (axios.get('http://localhost:8080/disciplines/viewALL'))).data;

      this.newGroups=data.group_id;
      this.newTeachers=data.teacher_id;
      this.newDisciplines=data.discipline_id;
      this.newClassroom=data.classroom;
      this.newTime=data.time;
    },

    async editItem() {                                                     //===================
      this.appearMistakes = ''
      if (!InputValidation.checkTime(this.newTime)){
        this.mistake='Невірно введений час'
        return;
      }
      if (!InputValidation.checkClassroom(this.newClassroom)){
        this.mistake='Невірно введена аудиторія'
        return;
      }
      if (this.newTeachers==='' ){ //===============
        this.mistake='Такого викладача не існує!'
        return;
      }
      if (this.newDisciplines==='' ){ //===============
        this.mistake='Такої дисципліни не існує!'
        return;
      }
      if (this.newGroups==='' ){ //===============
        this.mistake='Такої групи не існує!'
        return;
      }
      try{
        if ( !(await(CheckExist.checkTeachersById(this.newTeachers)))){
          this.mistake='Такого викладача не існує!'
          return;
        }}catch (error){
        this.appearMistakes = "Виникла помилка при створенні..."
        this.mistake=error;
        return;
      }

      try{
        if ( !(await(CheckExist.checkDisciplinesById(this.newDisciplines)))){
          this.mistake='Такої дисципліни не існує!'
          return;
        }}catch (error){
        this.appearMistakes = "Виникла помилка при створенні..."
        this.mistake=error;
        return;
      }

      try{
        if (!(await(CheckExist.checkGroupsById(this.newGroups))) ){
          this.mistake='Такої групи не існує!'
          return;
        }}catch (error){
        this.appearMistakes = "Виникла помилка при створенні..."
        this.mistake=error;
        return;
      }


      //Додавання і чек на помилку
      this.mistake = await this.tryToCreate()
      if (this.mistake === '') {
        window.location.href = '/view' + this.BType + ''
      } else {
        this.appearMistakes = "Виникла помилка при створенні..."
      }
    },

    async tryToCreate() {
      let result = ''
      try {
        result = (await axios.post('http://localhost:8080/'+this.type+'/edit',{
          id:this.id,
          time: this.newTime, classroom: this.newClassroom,
          groupId:this.newGroups, disciplineId:this.newDisciplines, teacherId:this.newTeachers
        })).data;
      } catch (error) {
        result = error;
      }
      return result;
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
  padding-bottom: 3vw;
}

a {
  color: #3c5994;
  text-decoration: none;
}


.mistake{
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font:1.0em "Fira Sans", sans-serif;
  color: #9d0000;
}

.appearMistake {
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font: 1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size: 2vw;
}

.registrationForm{
  width: 15vw;
  margin: 0 auto;

}

.itemButton{
  margin-left:2vw;
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
  background: none;
  border:none;
  margin-top:2vw;

}

.selectBox select{
  padding-left: 1vw;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #999;
  width: 100%;
  height: 2.5vw;
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

