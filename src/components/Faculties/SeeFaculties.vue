<template>
  <div class="Vue">


  <div v-if="id!==0">

    <div class=titleText>Факультет <span class=italic><br>" {{ data.name }} "  </span></div>

    <div class=description>
      Назва: <span class=italic> {{ data.name }}; </span><br>
      Абревіатура:  <span class=italic> {{ data.short_name }};  </span> <br>
    </div>

    <!--Кнопочки-->
   <div class=rowButton>
     <div class=itemButton>
    <a @click=" deleteObject();" class="red-shine-button">Видалити</a>
     </div>
     <div class=itemButton>
        <router-link v-bind:to="'/change'+BType+'/?id='+id"> <a  class="green-shine-button">Редагувати</a></router-link>
     </div>
   </div>

  </div>

<!--    Факультет не найшли-->
    <div v-else>
    <div class="dontFound">
        Факультет не знайдено.<br> Перевірте правильність набору
    </div>
  </div>

  </div>

    <div>
      <div>

  </div>
  </div>


  <!--  Помилка при видаленні-->
  <div class=appearMistake>
    {{appearMistakes}}
  </div>
  <div class=mistake>
    {{mistake}}
  </div>



</template>

<script>
import axios from "axios";
import {CheckExist} from "@/components/Validation/CheckExist";


export default {
  name: "SeeFaculties", //=================
  data: () => ({
    BType:'Faculties', //====================
    type:'faculties', //====================
    data: [],
    id: 0,
    mistake:'',
    appearMistakes:'',
  }),

  mounted() {
    this.checkConnection();
    this.initialise();
  },

  methods: {

    async initialise() {
      //Вичислить id
      let res = new URL(location.href).searchParams.get('id');
      if (res === '' || !(await CheckExist.checkFacultyById(res))) { //=================
        return;
      }

      //Підгрузка даних
      this.id = res
      this.data = (await (axios.get('http://localhost:8080/'+this.type+'/view/' + this.id))).data;
    },


    async deleteObject(){
      this.mistake= (await (axios.delete('http://localhost:8080/'+this.type+'/delete?id=' + this.id))).data;
      if (this.mistake===''){
      window.location.href = '/view'+this.BType+''}
      else{
        //Помилка пішла
        this.appearMistakes="Виникла помилка при видаленні..."
      }
    },
    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}},
  }
}


</script>

<style scoped>


.Vue {
  font-size: 2vw;
  margin: 1vw auto;
  width: 100%;
}

.dontFound {
  text-align: center;
}

.italic {
  font-style: italic;
}

.description {
  text-align: center;
  margin-bottom: 2vw;
}

.titleText {
  margin: 0 auto;
  text-align: center;
  font-size: 4vw;
  padding-bottom: 2vw;
}
/*===flex для кнопок==== */
.rowButton{
  margin: 1vw auto;
  display: flex;
  width: 30vw;
}

.itemButton{
  margin:0 auto;
  align-self:center;

}

.mistake{
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font:1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size:1vw;
  margin:1vw auto;
  width: 80%;
}

.appearMistake{
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font:1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size:2vw;
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
  margin: 10px 20px;
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



</style>