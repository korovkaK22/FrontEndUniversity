<template>
  <div class="Vue">

    <div class=titleText>Відділи</div>


    <div class=list>

      <table class="styled-table">
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
            <router-link v-bind:to="('/see'+BType+'/?id='+l.id)">{{ l.name }}</router-link> <br>
          </td>
          <td>
            {{ l.short_name }}
          </td>
          <td>
            {{ l.faculty_id }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";



export default {
  name: "ViewDepartments",


  data: () => ({
    BType:'Departments', //====================
    type:'departments', //====================

    lists: [],

  }),
  mounted() {
    this.initialise();
  },

  methods: {
    async initialise() {
      this.lists = (await (axios.get('http://localhost:8080/'+this.type+'/viewALL'))).data;
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