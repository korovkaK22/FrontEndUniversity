<template>



тут типу факю

  {{ initialiseAllArticles()}}

  <li v-for="article in articles" :key="article.id">
    {{ article.artQuestion }}
    {{ article.artAnswer }}
  </li>



<!--  1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>-->




</template>

<script>
import {getArticlesFromDB} from './FAQ.js'



export default {
  name: "FAQ",

  data: () => ({
    articles: [],

  }),

  methods:{
    getArticlesFromDB,

    initialiseAllArticles(){
      this.articles=getArticlesFromDB();
      console.log(this.articles)
    },


  }



}
</script>

<style scoped>

</style>