<template>
  <div class="Vue">

    <div class=titleText>Таблиця онлайн</div>


    <div class="row">

    Вибрати

      <div class="item">
        <div class="selectBox">
          <select v-model="newFirst" >
            <option value="" disabled selected >Вибрати</option>
            <option v-for="(o, index) in firstList" :key="o.name"
                    v-bind:value=index>{{o}}</option>
          </select>
        </div>
      </div>

      з

      <div class="item">
        <div class="selectBox">
          <select v-model="newSecond" >
            <option value="" disabled selected >Вибрати</option>
            <option v-for="o in secondList" :key="o.id"
                    v-bind:value=o.id>{{o.name}}</option>
          </select>
        </div>
      </div>

    </div>

    <div class=itemButton>
      <a @click=" createTable();" class="green-shine-button">Вибрати</a>
    </div>


  </div>


</template>

<script>
import {CheckExist} from "@/components/Validation/CheckExist";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",

  data: () => ({
    firstList:[],
    secondList:[],
    newFirst:'',
    newSecond:'',

  }),

  mounted() {
    this.initialise();
    this.checkConnection();
  },

  methods: {
    async initialise(){
      this.firstList=['Розклад для групи','Студенти з групи','Розклад для вчителя','Відділи для факультету'];


    },


    async createTable(){

      console.log(this.newFirst)
    },

    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}}, }

}
</script>

<style scoped>
.Vue{
  text-align: center;
}

.titleText{
  font-size: 3vw;
}

.row{
  margin: 1vw auto;
  display: flex;
  width: 50vw;
  justify-content:space-around;
  font-size: 3vw;
}

.item{
width:15vw;
}

.itemButton{
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
  padding: 3px 20px;
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