<template>

  <div class="myHeader">


    <div class="row">
      Лабораторна робота з Вебу.
    </div>
<!--    <router-link to="/faq">Home</router-link>-->


    <div class="row">

      <div class="item">
        <router-link to="/table">Таблиця</router-link>
      </div>

      <div class="item">
        <router-link to="/">Home</router-link>
      </div>

      <div class="item">
        <router-link to="/viewFaq">FAQ</router-link>
      </div>


      <div class="item">
        <div class="pages">
          Факультети
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewFaculties">Всі факультети</router-link> <br>
            <router-link to="/createFaculties">Додати факультет</router-link> <br>
          </div>
        </div>
      </div>


      <div class="item">
        <div class="pages">
          Відділи
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewDepartments">Всі відділи</router-link> <br>
            <router-link to="/createDepartments">Додати відділ</router-link> <br>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="pages">
                 Групи
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewGroups">Всі групи</router-link> <br>
            <router-link to="/createGroups">Додати групу</router-link> <br>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="pages">
          Студенти
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewStudents">Всі студенти</router-link> <br>
            <router-link to="/createStudents">Додати студента</router-link> <br>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="pages">
          Викладачі
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewTeachers">Всі Викладачі</router-link> <br>
            <router-link to="/createTeachers">Додати Викладача</router-link> <br>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="pages">
          Дисципліни
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewDisciplines">Всі дисципліни</router-link> <br>
            <router-link to="/createDisciplines">Додати дисципліну</router-link> <br>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="pages">
          Розклад
          <i class="fa-solid fa-arrow-down fa-sm"></i>
          <div class="dropdown-list">
            <router-link to="/viewSchedules">Всі розклади</router-link> <br>
            <router-link to="/createSchedules">Додати розклад</router-link> <br>
          </div>
        </div>
      </div>
</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MyHeader"
}
</script>

<style>
@import '../CSS/Header.css';
</style>