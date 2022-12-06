<template>
  <div class="Vue">

    Вітаємо Вас на нашому сайті
    <div class="gif">
      <img :src="require('../Images/amongus.gif')" alt="NoDB.png"/>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped>

.Vue {
  text-align: center;
}

.gif img{
  margin: 0 auto;
  border-radius: 0.5vw;
}

a {
  color: #515f79;
  text-decoration: none;
}
</style>