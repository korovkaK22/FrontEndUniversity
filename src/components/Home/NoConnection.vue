<template>
  <div class="Vue">

    <div class="noConn">
      <div class="text">
        На жаль, ми не можемо під'єднатися до бази даних.<br>
        Спробуйте відвідати наш сайт пізніше<br>
        <router-link to="/home">На головну</router-link>
      </div>

      <div class="noDB">
        <img :src="require('../Images/noDataBase.png')" alt="NoDB.png"/>
      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: "NoConnection",
}
</script>

<style scoped>

.Vue {
  text-align: center;
}

a {
  color: #515f79;
  text-decoration: none;
}

.noDB {
  scale: 1.1;
  margin-top: 3vw;
}

.text {
  font-size: 2.5vw;
  margin: 0 auto;


}

</style>