<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
      class="overflow-hidden"
    >  
    <v-app-bar-nav-icon></v-app-bar-nav-icon>  
        <v-btn href="/"> 
          <v-img
            src="./assets/logo.png"
            transition="scale-transition"
            width="100"
          />
        </v-btn>
        
        <v-btn href="/posts"> 
          <h4>объявления</h4>
        </v-btn>

        <v-btn href="/new_post"> 
          <h4>создать объявление</h4>
        </v-btn>

        <v-spacer></v-spacer>
        
        <v-btn href="/login" > 
         <h4>войти</h4>
        </v-btn>

      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless color="secondary" elevation=20>
      <v-col class="text-left">
        © 2020 - {{ new Date().getFullYear() }} 
      </v-col>

      <v-col class="text-center">
        <strong>FindMe</strong> 
      </v-col>

      <v-col class="text-right">
        natanatster@gmail.com
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: { 
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  
</style>