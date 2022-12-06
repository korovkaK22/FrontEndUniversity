<template>
  <div class="Vue">

    <div class=titleText>Групи</div>


    <div class=list>

      <table class="styled-table"  v-if="lists.length!==0">
        <thead>
        <tr>
          <th scope="col">Ім'я</th>
          <th scope="col">Курс</th>
          <th scope="col">Відділ</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in lists" :key="l.id">
          <td>
            <router-link v-bind:to="('/see'+BType+'/?id='+l.id)">{{ l.name }}</router-link> <br>
          </td>
          <td>
            {{ l.course }}
          </td>
          <td>
            <router-link v-bind:to="('/seeDepartments/?id='+l.department_id)">
              {{getDepatment(l.department_id)}}
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>

      <div class = noTable v-else>
        Ще не додано ні однієї групи.
        <router-link v-bind:to="('/create'+BType)">Додати групу</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import {CheckExist} from "@/components/Validation/CheckExist";



export default {
  name: "ViewGroups", //====================


  data: () => ({
    BType:'Groups', //====================
    type:'groups', //====================

    lists: [],
    depatments:[],

  }),
  mounted() {
    this.checkConnection();
    this.initialise();
  },

  methods: {
    getDepatment(id) {
      let result = null;
      for (const element of this.depatments) {
        if (element.id ===id){
          result=element;}
      }
      return result!==null ?  result.name: null;
    },


    async initialise() {
      this.lists = (await (axios.get('http://localhost:8080/'+this.type+'/viewALL'))).data;
      this.depatments = (await (axios.get('http://localhost:8080/departments/viewALL'))).data;
    },
    async checkConnection(){if (!await(CheckExist.checkConnection())){window.location.href = '/noConnection'}},

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