<template>
  <v-container>
    <v-toolbar color="white">
      
      <v-toolbar-side-icon>
        <v-img class="mr-3" src="@/assets/img/tuke-logo.png" height="60px" width="60px"></v-img>
      </v-toolbar-side-icon>

      <h3 id="logo-title">TUKE<br>CROWDFUNDING</h3>

      <div class="hidden-sm-and-down mx-auto">
        <v-toolbar-items class="header-text d-flex align-center">
          <router-link to="/" class="mr-10">Domov</router-link>
          <router-link to="/projects" class="mr-10">Projekty</router-link>
          <router-link to="/about" class="mr-10">O nás</router-link>
          <router-link v-show="loggedIn" to="/login">Prihlásenie</router-link>
          <router-link to="/create/project" v-if="user">Vytvoriť projekt</router-link>
        </v-toolbar-items>
      </div>

      <div class="hidden-sm-and-down mr-11" v-if="user">
        <v-row justify="center">
          <v-menu
            min-width="200px"
            rounded
          >
            <template v-slot:activator="{ props }">
              <v-btn
                icon
                v-bind="props"
              >
                <v-avatar
                  color="#A29061"
                  size="large"
                >
                  <span class="text-h7">{{ this.userInitials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <h3>{{ user.displayName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    variant="text"
                    rounded
                  >
                    Môj profil
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn 
                    variant="text"
                    rounded 
                    @click="signOutUser" 
                    dark
                  >
                    Odhlásiť sa
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
        
      </div>

      <div class="ml-auto mr-11 hidden-md-and-up" id="logo-title">
        <v-row justify="center">
          <v-menu
            width="100vw"
            height="100vh"
            class="pt-2 mt-2"
            rounded
          >
            <template v-slot:activator="{ props }">
              <v-btn
                icon
                v-bind="props"
              >
                <v-app-bar-nav-icon > </v-app-bar-nav-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <h3>{{ user.displayName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    variant="text"
                    rounded
                  >
                    Môj profil
                  </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn 
                    variant="text"
                    rounded 
                    @click="signOutUser" 
                    dark
                  >
                    Odhlásiť sa
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>

        
        
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
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from './firebase'
import { useRouter } from 'vue-router'

import '@/assets/styles/app.css'

export default{
  data() {
    return{
      drawer: null,
      clicked: false,
      loggedIn: true,
      userInitials: '',
    }
  },
  mounted() {
    document.title = "TUKE Crowdfunding"

    let link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/png'
    link.rel = 'icon'
    link.href = require('@/assets/img/tuke-logo.png')
    document.getElementsByTagName('head')[0].appendChild(link)

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = false
        this.setUserInitials(user)
      } else {
        this.loggedIn = true
      }
    })
  },
  methods: {
    clickToggle() {
      this.clicked = !this.clicked
    },
    setUserInitials(user) {
      const nameParts = user.displayName.split(' ');
      const initials = nameParts.map(part => part[0]).join('');
      this.userInitials = initials.toUpperCase();
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