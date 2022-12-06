<template>
  <div class="Vue">

    <div class=titleText>Таблиця онлайн</div>


    <div class="row">

      Вибрати

        <div class="item">
          <div class="selectBox">
            <select v-model="newFirst"  @change="firstChange()">
              <option value="" disabled  >Вибрати</option>
              <option v-for="(o, index) in firstList" :key="o.name"
                      v-bind:value=index>{{o}}</option>
            </select>
          </div>
        </div>

        :

        <div class="item">
          <div class="selectBox">
            <select v-model="newSecond" @change="secondChange()">
              <option value="-1" disabled selected  >Вибрати</option>
              <option v-for="o in secondList" :key="o.id"
                      v-bind:value=o.id>
                {{ getName(o.id, secondList) }}
              </option>
            </select>
          </div>
        </div>

    </div>

    <!--================Таблиці================-->
      <div class=list v-if="this.lists!==null">
        <!--=======Розклад для групи======-->

        <div v-if="newFirst===0">
          <div v-if="lists.length!==0">Розклад Для групи</div>
          <table class="styled-table"  v-if="lists.length!==0">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Викладач</th>
              <th scope="col">Дисципліна</th>
              <th scope="col">Група</th>
              <th scope="col">Час</th>
              <th scope="col">Аудиторія</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="l in lists" :key="l.id">
              <td>
                <router-link v-bind:to="('/seeSchedules/?id='+l.id)">{{ l.id }}</router-link> <br>
              </td>

              <td>
                <router-link v-bind:to="('/seeTeachers/?id='+l.teacher_id)">
                  {{ getName(l.teacher_id, teachers) }}
                </router-link>
              </td>

              <td>
                <router-link v-bind:to="('/seeDisciplines/?id='+l.discipline_id)">
                  {{    getName(l.discipline_id, disciplines) }}
                </router-link>
              </td>

              <td>
                <router-link v-bind:to="('/seeGroups/?id='+l.group_id)">
                  {{ getName(l.group_id, groups) }}
                </router-link>
              </td>

              <td>
                {{ l.time }}
              </td>

              <td>
                {{ l.classroom }}
              </td>

            </tr>
            </tbody>
          </table>

          <div class = noTable v-else>
            Ще не додано розкладу для цієї групи.
            <router-link v-bind:to="('/createSchedules')">Додати розклад</router-link>
          </div>
        </div>

      <!--  ===========Студенти в групі==================-->
        <div v-if="newFirst===1">
          <div v-if="lists.length!==0">Список студентів в групі</div>
          <table class="styled-table"  v-if="lists.length!==0">
            <thead>
            <tr>
              <th scope="col">Ім'я</th>
              <th scope="col">Почта</th>
              <th scope="col">Номер телефону</th>
              <th scope="col">Група</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="l in lists" :key="l.id">
              <td>
                <router-link v-bind:to="('/seeStudents/?id='+l.id)">{{ l.name }}</router-link> <br>
              </td>
              <td> {{ l.email }} </td>
              <td> {{ l.phone }} </td>
              <td>
                <router-link v-bind:to="('/seeGroups/?id='+l.group_id)">
                  {{ getName(l.group_id, this.groups) }}
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>

          <div class = noTable v-else>
            Ще не додано студентів для цієї групи.
            <router-link v-bind:to="('/createStudents')">Додати студента</router-link>
          </div>
        </div>

<!--       =========== Розклад для викладача===========-->

        <div v-if="newFirst===2">
             <div v-if="lists.length!==0">Розклад Для Викладача</div>
          <table class="styled-table"  v-if="lists.length!==0">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Викладач</th>
              <th scope="col">Дисципліна</th>
              <th scope="col">Група</th>
              <th scope="col">Час</th>
              <th scope="col">Аудиторія</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="l in lists" :key="l.id">
              <td>
                <router-link v-bind:to="('/seeSchedules/?id='+l.id)">{{ l.id }}</router-link> <br>
              </td>

              <td>
                <router-link v-bind:to="('/seeTeachers/?id='+l.teacher_id)">
                  {{ getName(l.teacher_id, teachers) }}
                </router-link>
              </td>

              <td>
                <router-link v-bind:to="('/seeDisciplines/?id='+l.discipline_id)">
                  {{    getName(l.discipline_id, disciplines) }}
                </router-link>
              </td>

              <td>
                <router-link v-bind:to="('/seeGroups/?id='+l.group_id)">
                  {{ getName(l.group_id, groups) }}
                </router-link>
              </td>

              <td>
                {{ l.time }}
              </td>

              <td>
                {{ l.classroom }}
              </td>

            </tr>
            </tbody>
          </table>

          <div class = noTable v-else>
            Ще не додано розкладу для цієї групи.
            <router-link v-bind:to="('/createSchedules')">Додати розклад</router-link>
          </div>
        </div>

<!-- =========== Відділи факультету===========-->

        <div v-if="newFirst===3">
          <div v-if="lists.length!==0">Відділи факультету</div>
          <table class="styled-table" v-if="lists.length!==0" >
            <thead>
            <tr>
              <th scope="col">Ім'я</th>
              <th scope="col">Абревіатура</th>
              <th scope="col">Факультет</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="l in lists" :key="l.id">
              <td>
                <router-link v-bind:to="('/seeDepartments/?id='+l.id)">{{ l.name }}</router-link> <br>
              </td>
              <td>
                {{ l.short_name }}
              </td>
              <td>
                <router-link v-bind:to="('/seeFaculties/?id='+l.faculty_id)">
                  {{getName(l.faculty_id, faculties)}}
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
          <div class = noTable v-else>
            Ще не додано відділів для цього факультету.
            <router-link v-bind:to="('/createDepartments')">Додати відділ</router-link>
          </div>
        </div>



    </div>

    <!--======== Помилка===========-->
    <div class=appearMistake>
      {{ appearMistakes }}
    </div>
    <div class=mistake>
      {{ mistake }}
    </div>

  </div>


</template>

<script>
import {CheckExist} from "@/components/Validation/CheckExist";
import axios from "axios";
import {GetListForTable} from "@/components/Validation/GetListForTable";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",

  data: () => ({
    firstList:[],
    secondList:[],
    newFirst:'',
    newSecond:-1,

    lists:null,
    teachers:[],
    disciplines:[],
    groups:[],
    students:[],
    schedules:[],
    faculties:[],

    mistake:'',
    appearMistakes: '',
  }),

  mounted() {
    this.initialise();
    this.checkConnection();
  },

  methods: {
    async initialise(){
      this.firstList=['Розклад для групи','Студенти з групи','Розклад для вчителя','Відділи для факультету'];
      this.teachers = (await (axios.get('http://localhost:8080/teachers/viewALL'))).data;
      this.disciplines = (await (axios.get('http://localhost:8080/disciplines/viewALL'))).data;
      this.groups = (await (axios.get('http://localhost:8080/groups/viewALL'))).data;
      this.students = (await (axios.get('http://localhost:8080/students/viewALL'))).data;
      this.schedules = (await (axios.get('http://localhost:8080/schedules/viewALL'))).data;
      this.faculties = (await (axios.get('http://localhost:8080/faculties/viewALL'))).data;
      this.departments = (await (axios.get('http://localhost:8080/departments/viewALL'))).data;

    },

    async firstChange(){
      this.newSecond=-1;
      this.lists=null;
        switch (this.newFirst) {
          case 0:
            await this.initSecondList('groups');
            break;
          case 1:
            await this.initSecondList('groups');
            break;
          case 2:
            await this.initSecondList('teachers');
            break;
          case 3:
            await this.initSecondList('faculties');
            break;
        }

    },

    async initSecondList(path){
      try {
        this.secondList = (await (axios.get('http://localhost:8080/' + path + '/viewALL'))).data;
      }catch (error){
        this.appearMistakes = "Виникла помилка при створенні..."
        this.mistake= error.name;
      }
    },

    async secondChange(){
      switch (this.newFirst) {
        case 0:
          this.lists= GetListForTable.getSchedulesForGroup(this.schedules, this.newSecond);
          break;
        case 1:
          this.lists= GetListForTable.getStudentsForGroup(this.students, this.newSecond);
          break;
        case 2:
          this.lists= GetListForTable.getSchedulesForTeachers(this.schedules, this.newSecond);
          break;
        case 3:
          this.lists= GetListForTable.getDepartmentsForFaculties(this.departments, this.newSecond);
          break;
      }

    },

    getName(id, array){
      let result = null;
      for (const element of array) {
        if (element.id ===id){
          result=element;}
      }
      return result!==null ?  result.name: null;
    },


    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}}, }

}
</script>

<style scoped>
.Vue{
  text-align: center;
  margin: 1vw auto;
  width: 100%;
  font-size: 2vw;
}

.titleText{
  font-size: 3vw;
}



.row{
  margin: 1vw auto;
  display: flex;
  width: 60vw;
  justify-content:space-around;
  font-size: 3vw;
}

.item{
width:20vw;
  margin-left: 2vw;
  margin-right: 2vw;
}

.mistake{
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font:1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size: 2vw;
}

.appearMistake {
  text-align: center;
  font-style: italic;
  font-weight: lighter;
  font: 1.0em "Fira Sans", sans-serif;
  color: #9d0000;
  font-size: 3vw;
}

a {
  color: #3c5994;
  text-decoration: none;
}



/*=======Табличка красива======*/

.styled-table {
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #7880c9;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
  text-align: center;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #777fc8;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
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