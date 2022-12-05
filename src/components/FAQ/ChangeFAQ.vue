<template>
   <div class="Vue">

    <span v-if="id!==0">
    <div class=titleText>Редагувати Питання</div>

    <form class="registrationForm">
      <div class="group">
        <input type="text" v-model="newName" required>
        <span class="bar"></span>
        <label>Питання</label>
      </div>

      <textarea v-model="newShortName" name="textComment" class="textComment"
                placeholder="Відповідь"
                style="padding-bottom:250px ;
                background: rgba(134,137,180,0.16);
                  font-size:16px;
                  height: 50px;
                  width: 500px;"  >
        </textarea>

    <div class=greenButton>
      <div class=itemButton>
        <a @click=" editObject();" class="green-shine-button">Зберегти</a>
      </div>
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
        Питання не знайдено.<br> Перевірте правильність набору
    </div>
  </span>
  </div>

</template>

<script>
import axios from "axios";
import {InputValidation} from "@/components/Validation/InputValidation";
import {CheckExist} from "@/components/Validation/CheckExist";

export default {
  name: "ChangeFAQ",
  data: () => ({
    newName:'',
    newShortName:'',
    mistake:'',
    appearMistakes: '',
     }),

  mounted() {
    this.initialise();
  },

  methods: {

    async initialise() {
      //Вичислить id
      let res = new URL(location.href).searchParams.get('id');
      if (res === '' || !(await CheckExist.checkFAQById(res))) {
        return;
      }

      //Підгрузка даних
      this.id = res
      let data = (await (axios.get('http://localhost:8080/faq/view/' + this.id))).data;
      this.newName=data.question;
      this.newShortName=data.answer;
    },

    async editObject() {
      this.appearMistakes = ''
      if (!InputValidation.checkQnA(this.newName)){
        this.mistake='Невірно поставлене питання'
        return;
      }
      if (!InputValidation.checkQnA(this.newShortName)){
        this.mistake='Невірно введена відповідь'
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
        result = (await axios.post('http://localhost:8080/faq/edit',{
          id: this.id,
          question: this.newName, answer: this.newShortName
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

.greenButton{
  margin-left:-5vw;
}

.appearMistake {
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font: 1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size: 2vw;

}

.textComment{
  margin-left: -5vw;
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
  margin: 10px 6vw;
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

