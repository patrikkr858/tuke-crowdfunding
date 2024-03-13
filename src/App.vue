<template>
  <v-container>
    <v-toolbar color="white" class="ma-3">
      
      <v-toolbar-side-icon>
        <v-img class="mr-3" src="@/assets/img/tuke-logo.png" height="60px" width="60px"></v-img>
      </v-toolbar-side-icon>

      <h3 id="logo-title">TUKE<br>CROWDFUNDING</h3>

      <div class="hidden-sm-and-down mx-auto">
        <v-toolbar-items class="header-text d-flex align-center">
          <router-link to="/" class="mr-10">Domov</router-link>
          <router-link to="/projects" class="mr-10">Projekty</router-link>
          <router-link to="/" class="mr-10">O nás</router-link>
          <router-link to="/login">Prihlásenie</router-link>
        </v-toolbar-items>
      </div>

      <div class="hidden-sm-and-down mr-11" v-if="user">
        <v-btn class="button-primary" @click="signOutUser" dark>Odhlásiť sa</v-btn>
      </div>

      <div class="ml-auto mr-11 hidden-md-and-up" id="logo-title">
        <v-app-bar-nav-icon size="x-large" @click.stop="drawer = !drawer" @click="clickToggle(clicked)"> </v-app-bar-nav-icon>
      </div>
      
    </v-toolbar>
  </v-container>

  <router-view/>

  <v-card :class="clicked ? '' : 'd-none'">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
      <v-list color="transparent" class="header-text">
          <v-list-item><router-link to="/" class="mr-10">Domov</router-link></v-list-item>
          <v-list-item><router-link to="/projects" class="mr-10">Projekty</router-link></v-list-item>
          <v-list-item><router-link to="/" class="mr-10">O nás</router-link></v-list-item>
          <v-list-item><router-link to="/login">Prihlásenie</router-link></v-list-item>
          
          <div class="pa-3 d-flex justify-center">
            <v-btn class="button-primary" @click="signOutUser" dark>Odhlásiť sa</v-btn>
          </div>
        
      </v-list>

        
      </v-navigation-drawer>
      
    </v-layout>
  </v-card>

</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import { useRouter } from 'vue-router'

import '@/assets/styles/app.css'

export default{
  data() {
    return{
      drawer: null,
      clicked: false,
    }
  },
  mounted() {
    document.title = "TUKE Crowdfunding"

    let link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/png'
    link.rel = 'icon'
    link.href = require('@/assets/img/tuke-logo.png')
    document.getElementsByTagName('head')[0].appendChild(link)
  },
  methods: {
    clickToggle() {
      this.clicked = !this.clicked
    },
  },
  setup () {
    const { user } = useAuthState()
    const auth = getAuth()

    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }

    }

    console.log(user)

    return { user, signOutUser }
  },
}
</script>