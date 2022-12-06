<template>
  <div class="Vue">
      <div class="row">
        <div class="item">
          ©2022-2022.
        </div>
        <div class="item">
          Лабораторна робота з Вебу.
        </div>
        <div class="item">
          Всі права захищені.
        </div>
      </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MyFooter"
}
</script>

<style scoped>
@import '../CSS/Footer.css';

.Vue{

}

.row{
  display: flex;
  font-size:0.5vw;
  justify-content:center;
}

.item{
margin-left: 4vw;
  margin-right: 4vw;
}



</style>