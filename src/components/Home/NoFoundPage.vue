<template>
  <div class="Vue">

    <div class="noConn">
      <div class="text">
       Такої сторінки не існує <br> .-.
        <router-link to="/home"> На головну</router-link> .-.
      </div>

      <div class="noDB">
        <img :src="require('../Images/404Gif.gif')" alt="NoDB.png"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "NoFoundPage"
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
margin-top:2vw;
}

.text {
  font-size: 3.5vw;
  margin: 0 auto;
}
</style>