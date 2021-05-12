<template>
  <div id="app">
    <v-item-group>
      <v-container>
          <v-col
            cols="12"
            md="12"
            class="mx-0"
          >
            <v-card
              outlined
              class="my-3 mx-2 d-flex flex-row-reverse align-center mb-6 px-2"
              height="160"
              text="primary"
            >
              <v-col>
                <v-row
                  class="mt-5"
                >
                  <v-combobox
                      :items="Object.keys(sex)"
                      label="Пол животного"
                      class="my-0 mx-3 d-flex "
                      height="20"
                      return-object
                      v-model="select.animal_sex"
                    ></v-combobox>
              
                  <v-combobox
                      :items="Object.keys(kind)"
                      label="Вид животного"
                      class="my-0 mx-3 d-flex "
                      height="20"
                      return-object
                      v-model="select.animal_kind"
                    ></v-combobox>

                  <v-combobox
                      :items="Object.keys(type)"
                      label="Тип объявления"
                      class="my-0 mx-3 d-flex"
                      height="20"
                      return-object
                      v-model="select.post_type"
                    ></v-combobox>
                </v-row>
            
                <v-combobox
                  v-model="select.tags"
                  return-object
                  :search-input.sync="search"
                  label="Добавить тэги"
                  multiple
                  small-chips
                  class="ma-0 d-flex mb-0"
                  height="20"
                >
                </v-combobox>
                
                <div class="text-center">
                  <v-btn 
                    block
                    v-on:click="loadSelectedData()"
                    class="mb-5"
                  >
                    Показать результаты
                  </v-btn>
                </div>

              </v-col>
              
              
            </v-card>

            <v-row>
              <v-col
                v-for="post in posts"
                :key="post.id"
                cols="12"
                md="3"
                class="mx-0"
              >
                <v-item >
                  <v-sheet
                    :loading="loading"
                    elevation="1"
                    max-width="250"
                    class="ma-auto"
                  >
                    <v-system-bar lights-out></v-system-bar>
                    <v-carousel
                      :continuous="false"
                      :cycle="cycle"
                      :show-arrows="false"
                      hide-delimiter-background
                      delimiter-icon="mdi-minus"
                      height="220"
                      
                    >
                      <v-carousel-item
                        v-for="(photo, i) in post.photo"
                        :key="i"
                        :src="photo.image"
                      ></v-carousel-item>
                      
                    </v-carousel>
                    
                    <v-list two-line>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-btn 
                              :href="'/posts/' + post.id"
                              color="primary"
                              plain> 
                              Объявление № {{post.id}}
                            </v-btn>
                          </v-list-item-title>
                          <v-list-item-subtitle>{{post.post_type}} - {{post.animal_kind}} - {{post.animal_sex}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-item>
              </v-col>
            </v-row>
          </v-col>
      </v-container>
    </v-item-group>

    <div class="text-center">
      <p>Вы посмотрели {{posts.length}} постов из {{posts_count}}</p>
      
      <v-btn v-on:click="loadNext"
        class="mb-10"
      >
        загрузить еще
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Posts',
  //components: {},

  //el: '#app',
  data: function() {
    return {
      posts_count: 0,
      posts: [],
      next: null,
      sex: {
        'все': '',
        'М': 'boy', 
        'Ж': 'girl'
      },
      kind: {
        'все': '',
        'кошки': 'cats', 
        'собаки': 'dogs'
      },
      type: {
        'все': '',
        'потерянные': 'lost', 
        'найденные': 'find'
      },
      select: {
        'animal_kind': 'все',
        'animal_sex': 'все',
        'post_type': 'все',
        'tags': []
      },
      url: 'http://78.155.222.147/api/v1/posts/'
    }
  },
  methods: {
    loadData() {
      axios
        .get(this.url)
        .then(response => {
          this.posts_count = response.data['count'];
          this.posts = response.data['results'];
          this.next = response.data['next'];
        });
    },
    loadSelectedData() {
      axios
        .get(
          this.url + '?' + 'animal_sex=' + this.sex[this.select.animal_sex ]
            + '&animal_kind=' + this.kind[this.select.animal_kind] 
            + '&post_type=' + this.type[this.select.post_type] 
            + '&tags=' + (this.select.tags=='' ? '' : this.select.tags.reduce(function(sum, current) {
              return sum + ',' + current 
            }))
      )
        .then(response => {
          this.posts_count = response.data['count'];
          this.posts = response.data['results'];
          this.next = response.data['next'];
        });
    },
    loadNext() {
      axios
        .get(this.next)
        .then(response => {
          this.posts = this.posts.concat(response.data['results']);
          this.next = response.data['next'];
        });
    }
  },
  mounted() {
    this.loadData()
  }
};
</script>

