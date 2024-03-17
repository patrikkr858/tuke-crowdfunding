<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    v-reveal 
    class="reveal"
    show-arrows="hover"
  >
    <template v-slot:prev="{ props }">
      <v-btn
        icon
        color="white"
        variant="tonal"
        @click="props.onClick"
        class="mr-5"
      ><v-icon>mdi-arrow-left</v-icon></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        icon
        color="white"
        variant="tonal"
        @click="props.onClick"
        class="ml-"
      ><v-icon>mdi-arrow-right</v-icon></v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      cover
    >
    <v-row
        class="fill-height"
        align="center"
        justify="start"
      >
        <v-col cols="12" class="carousel-content">
          <h1 class="slide-title mb-5">{{ slide.title }}</h1>
          <p class="slide-description">{{ slide.description }}</p>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>

  <div v-reveal class="d-flex justify-center align-center ma-6 ma-sm-10 reveal">
    <h1 class="section-title">Ako sa darí projektom na TUKE</h1>
  </div>

  <div v-reveal class="reveal mb-5">
    <v-sheet class="mx-auto" max-width="1500">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item v-for="(project, i) in projects" :key="i"> 
          <v-card class="mr-15 mb-15" width="300" elevation="5">
            <v-img :src="project.src" class="mb-5" />
            <div class="d-flex justify-center align-center mb-5 mx-5" id="card-title">
              <p class="font-weight-bold">{{ project.title }}</p>
            </div>
            <div class="d-flex mx-2 mb-2" id="card-money">
              <v-progress-linear 
                :model-value="calculatePercentage(project)" 
                :class="{ 'progress-bar-finished': calculatePercentage(project) >= 100, 'progress-bar': calculatePercentage(project) < 100 }"
              >
              </v-progress-linear>
            </div>
            <div class="d-flex px-2" id="card-money">
              <p>€{{ project.collected }}</p>
              <p class="ml-auto">€{{ project.goal }}</p>
            </div>
            <div class="d-flex px-2 mb-5" id="card-text">
              <p>vyzbierané</p>
              <p class="ml-auto">cieľ</p>
            </div>
            <div class="d-flex justify-center align-center my-5">
              <v-btn class="button-primary" to="/detail">Podpor projekt</v-btn>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <div class="d-flex justify-center align-center"> 
      <v-btn class="button-primary" size="large" to="/projects">Zobraziť viac projektov</v-btn>
    </div>
  </div>

  <div v-reveal class="reveal categories-box mt-5">
    <div class="d-flex justify-center align-center mt-10 mb-5"> 
      <h1 id="categories-box-title" class="text-center mx-5 mt-4">Prehľadávať podľa kategórie</h1>
    </div>

    <v-container class="mb-6">
      <v-row class="justify-center align-center mx-5"> 
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(category, i) in categories"
          :key="i"
          class="text-center py-3"
        >
          <div class="mx-2 mb-2 categorys category-transparent">
            <v-icon size="x-large" class="mb-2 mr-2">
              {{ category.icon }}
            </v-icon>
            <router-link to="/" id="categories-box-category">{{ category.name }}</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container v-reveal class="reveal mt-8">
    <v-row class="mx-6 mx-sm-10">
      <v-col cols="12" lg="6">
        <h1 class="help-text text-center text-lg-start">Pomôž nám vybudovať projekty pre lepší život na Technickej Univerzite v Košiciach</h1>
      </v-col>
      <v-col cols="12" lg="6" class="d-flex justify-lg-end justify-center">
        <v-img max-width="500" src="@/assets/img/people.png" ></v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-reveal class="reveal mt-8">
    <v-row class="mr-6">
      <v-col cols="12" md="6" lg="4" class="d-flex">
        <v-col class="d-flex justify-center align-center">
          <v-img max-width="80" src="@/assets/img/volunteer.png"></v-img>
        </v-col>
        <v-col>
          <h4>Staň sa dobrovoľníkom</h4>
          <p>Pridaj sa k nám a staň sa súčasťou zmeny, kde každá pomocná ruka vytvára lepší svet pre všetkých.</p>
        </v-col>
      </v-col>
      <v-col cols="12" md="6" lg="4" class="d-flex">
        <v-col class="d-flex justify-center align-center">
          <v-img max-width="80" src="@/assets/img/money.png"></v-img>
        </v-col>
        <v-col>
          <h4>Rýchla zbierka financií</h4>
          <p>Prispejte rýchlo a jednoducho a staňte sa kľúčovým hráčom v našich inovatívnych projektoch.</p>
        </v-col>
      </v-col>
      <v-col cols="12" md="6" lg="4" class="d-flex mx-auto">
        <v-col class="d-flex justify-center align-center">
          <v-img max-width="80" src="@/assets/img/present.png"></v-img>
        </v-col>
        <v-col>
          <h4>Začnite darovať</h4>
          <p>Otvorte dvere pre nové možnosti a pozitívne zmeny - vaša štedrosť má obrovský význam.</p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
  
  <FooterComponent class="mt-8"></FooterComponent>

</template>

<style scoped>

</style>

<script>
import '@/assets/styles/home.css'
import FooterComponent from '@/components/FooterComponent.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: {
    FooterComponent,
  },
  data () {
    return {
      model: null,
      categories: [
        {
          name: 'Vzdelávanie',
          count: 2,
          icon: 'mdi-school-outline',
        },
        {
          name: 'Šport',
          count: 0,
          icon: 'mdi mdi-soccer',
        },
        {
          name: 'Životné prostredie',
          count: 1,
          icon: 'mdi-sprout-outline',
        },
        {
          name: 'Inovácie',
          count: 3,
          icon: 'mdi-lightbulb-on-10',
        },
        {
          name: 'Núdzové fondy',
          count: 0,
          icon: 'mdi-alarm-light-outline',
        },
        {
          name: 'Zdravie',
          count: 0,
          icon: 'mdi-heart-plus-outline',
        },
        {
          name: 'Študentský život',
          count: 5,
          icon: 'mdi-account-school-outline',
        },
        {
          name: 'Kultúra a umenie ',
          count: 0,
          icon: 'mdi-palette-outline',
        },
      ],
      projects: [
        {
          src: require('@/assets/img/projekt-1.png'),
          title: 'Prvý vodíkový automobil',
          collected: 10848,
          goal: 10000,
        },
        {
          src: require('@/assets/img/projekt-2.png'),
          title: 'Inovácie v systémoch',
          collected: 3350,
          goal: 6200,
        },
        {
          src: require('@/assets/img/projekt-3.png'),
          title: 'Ochrana a Obnova Prírody',
          collected: 850,
          goal: 1000,
        },
        {
          src: require('@/assets/img/projekt-4.png'),
          title: 'Zelená Vlna Inovácií',
          collected: 19024,
          goal: 65600,
        },
        {
          src: require('@/assets/img/projekt-1.png'),
          title: 'Prvý vodíkový automobil',
          collected: 10848,
          goal: 10000,
        },
      ],
      slides: [
        {
          src: require('@/assets/img/carousel-1.png'),
          title: 'Inovujte s nami - Spolu môžeme viac',
          description: 'V našej univerzitnej komunite veríme, že spoločne môžeme dosiahnuť viac. Každý študent, učiteľ, a partner má jedinečnú príležitosť prispieť k budovaniu lepšieho, inovatívnejšieho a inkluzívnejšieho vzdelávacieho prostredia.'
        },
        {
          src: require('@/assets/img/carousel-2.png'),
          title: 'Zaregistrujte sa a staňte sa Inovátorom',
          description: 'Táto platforma je exkluzívne navrhnutá pre našu univerzitnú komunitu, čím zabezpečujeme, že každý projekt má pevný základ v našich spoločných hodnotách a odborných znalostiach. Pre vytvorenie projektu je potrebná registrácia, čím preukážete, že ste členom univerzity.',
        },
        {
          src: require('@/assets/img/carousel-3.png'),
          title: 'Kto Sme: Naša Vízia a Poslanie',
          description: 'Naša misia sa zakladá na poskytovaní kvalitného vzdelania a rozvíjaní komunity, ktorá je odhodlaná prinášať inovatívne riešenia na zložité problémy dnešného sveta. Ponúkame platformu pre kreatívny rozvoj, kde každý člen má možnosť preskúmať svoje nápady.',
        },
      ],
    }
  },
  methods: {
    calculatePercentage(project) {
      return (project.collected / project.goal) * 100;
    },
  },
  directives: {
    reveal: {
      mounted(el) {
        function handleScroll() {
          var windowHeight = window.innerHeight;
          var elementTop = el.getBoundingClientRect().top;
          var elementVisible = 0;

          if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        el.__vueRevealCleanup__ = () => {
          window.removeEventListener("scroll", handleScroll);
        }

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user.displayName); 
          } else {
            console.log("User is not signed in");
          }
        })
      },
      unmounted(el) {
        el.__vueRevealCleanup__ && el.__vueRevealCleanup__();
      }
    }
  },
}
</script>
