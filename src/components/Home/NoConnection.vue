<template>
  <div class="Vue">

    <div class="noConn">
      <div class="text">
        На жаль, ми не можемо під'єднатися до бази даних.<br>
        Спробуйте відвідати наш сайт пізніше<br>
        <router-link to="/home">На головну</router-link>
      </div>

<!--      <div class="noDB">-->
<!--        <img :src="require('../Images/noDataBase.png')" alt="ТщВи"/>-->
<!--      </div>-->

    </div>

  </div>
</template>

<script>
//import axios from "axios";
//import {CheckExist} from "@/components/Validation/CheckExist";

export default {
  name: "NoConnection",


}
</script>

<style scoped>

.Vue {
  text-align: center;
  background: url('../Images/noDataBase.png') no-repeat;
  margin-left: 10vw;
  background-size: 80vw;
  height: 40vw;
  margin-top:-5vw;

}

a {
  color: #515f79;
  text-decoration: none;
}

.noDB {
  scale: 1.2;
  margin-top: 3vw;
  opacity: 20%;
  z-index: -1;
}

.text {
  background: #1d191f;
  margin: 0 auto;
  margin-top: 3.5vw;

}

</style>