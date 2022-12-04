<template>


  <header>
    <MyHeader/>
  </header>

  <main>
    <router-view />
  </main>


  <footer>
    <MyFooter/>
  </footer>


</template>

<script>
import MyHeader from './components/Home/Header.vue'
import MyFooter from './components/Home/Footer.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style>
@import './components/CSS/Home.css';

main{
  margin: 2vw auto;
  font-size: 4vw;
}





</style>
