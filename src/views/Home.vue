<template>
  <div class="flexbox">
    
      <div class="box">
        <h1>FindMe. Поиск пропавших животных.</h1>
        <h3>Если ваш любимец пропал, не отчаивайтесь! Мы поможем вам его отыскать.</h3>
        <div class="btn">
          <v-btn
            href="/new_post"
            x-large
            class="btn"
            color="primary"
          >
            <h4>создать объявление</h4>
          </v-btn>
          <v-btn
            href="/posts"
            x-large
            class="btn"
            color="primary"
          >
            <h4>поиск по объявлениям</h4>
          </v-btn>
        </div>
      </div>
    
    <v-img src="../assets/animals.png" max-width="40%" class="box"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .flexbox{
    display: inline-flex;
  }

  .box{
    margin: auto;
    padding: 10px 0 0 0;
    height: 50%;
  }

  .btn{
    margin: 30px 5% 0 0;
  }
</style>