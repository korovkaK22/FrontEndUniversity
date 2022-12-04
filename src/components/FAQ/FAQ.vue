<template>
  <div class="Vue">

    <div class = titleText>FAQ</div>

      <div class = articles>
           <li v-for="article in articles" :key="article.id">
            <span class = question>{{ article.question }}<br></span>
            <span class = answer>{{ article.answer }} </span>
          </li>
      </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: "FAQ",

  data: () => ({
    articles: [],

  }),
  mounted() {
    this.initialiseAllArticles();
  },

  methods:{
    async initialiseAllArticles(){
     this.articles=  (await (axios.get('http://localhost:8080/faq/viewALL'))).data;
      },
  }

}
</script>

<style scoped>

.Vue{
  margin: 1vw auto;
  width: 60%;
}

.articles{
  font-size: 3vw;
}

.titleText{
  margin: 0 auto;
  text-align: center;
  font-size: 6vw;
  padding-bottom: 5vw;
}

.question{
  font-style:italic;
}

.answer{
margin-left:6vw;

}


</style>