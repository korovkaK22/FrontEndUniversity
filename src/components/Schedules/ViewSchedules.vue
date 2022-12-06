<template>
  <div class="Vue">

    <div class=titleText>Розклад</div>


    <div class=list>

      <table class="styled-table">
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
            <router-link v-bind:to="('/see'+BType+'/?id='+l.id)">{{ l.id }}</router-link> <br>
          </td>

          <td>
            <router-link v-bind:to="('/seeTeachers/?id='+l.teacher_id)">
              {{ getTeachers(l.teacher_id) }}
            </router-link>
          </td>

          <td>
            <router-link v-bind:to="('/seeDisciplines/?id='+l.discipline_id)">
              {{ getDisciplines(l.discipline_id) }}
            </router-link>
          </td>

          <td>
            <router-link v-bind:to="('/seeGroups/?id='+l.group_id)">
              {{ getGroups(l.group_id) }}
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {CheckExist} from "@/components/Validation/CheckExist";



export default {
  name: "ViewSchedules",


  data: () => ({
    BType:'Schedules', //====================
    type:'schedules', //====================

    lists: [],
    teachers:[],
    disciplines:[],
    groups:[],

  }),
  mounted() {
    this.checkConnection();
    this.initialise();
  },

  methods: {
    getTeachers(id) {
      let result = null;
      for (const element of this.teachers) {
        if (element.id ===id){
          result=element;}
      }
      return result!==null ?  result.name: null;
    },

    getGroups(id) {
      let result = null;
      for (const element of this.groups) {
        if (element.id ===id){
          result=element;}
      }
      return result!==null ?  result.name: null;
    },

    getDisciplines(id) {
      let result = null;
      for (const element of this.disciplines) {
        if (element.id ===id){
          result=element;}
      }
      return result!==null ?  result.name: null;
    },


    async initialise() {
      this.lists = (await (axios.get('http://localhost:8080/'+this.type+'/viewALL'))).data;
      this.teachers = (await (axios.get('http://localhost:8080/teachers/viewALL'))).data;
      this.disciplines = (await (axios.get('http://localhost:8080/disciplines/viewALL'))).data;
      this.groups = (await (axios.get('http://localhost:8080/groups/viewALL'))).data;
    },
    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}}

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
  font-size: 6vw;
  padding-bottom: 2vw;
}

a {
  color: #3c5994;
  text-decoration: none;
}

/*=======Табличка красива======*/

.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
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

</style>