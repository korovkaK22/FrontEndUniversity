<template>
  <div class="Vue">

    <div class = titleText>FAQ</div>

    <div class = createNew>
    <router-link v-bind:to="'/createFaq'">Створити нове питання</router-link> <br>
    </div>

      <div class = articles>
           <li v-for="article in articles" :key="article.id">
            <span class = question>
              <router-link v-bind:to="'/seeFaq/?id='+article.id">{{ article.question }}</router-link>
            <br></span>
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
  padding-bottom: 2vw;
}

.question{
  font-style:italic;
}

.answer{
margin-left:6vw;

}

.createNew{
  text-align: center;
  margin-bottom: 2vw;
  font-size:3vw;
}

.createNew a {
  color: #365aa8;
  text-decoration: none;
}

.question a {
  color: #515f79;
  text-decoration: none;
}

</style>