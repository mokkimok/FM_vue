import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  
  theme: {
    themes: {
      light: {
        primary: '#252323',
        secondary: '#e5e5e5',
        accent: '#616161',
      },
    },
  },
  
});
