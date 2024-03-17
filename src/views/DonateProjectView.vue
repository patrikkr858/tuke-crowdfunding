<template lang="">
    <v-container align="center" class="mt-10">
        <v-card
        elevation="0"
        max-width="600"
        rounded="lg"
        >
            <v-row justify="center" class="mb-5">
                <h1>Inovácie v pneumatických systémoch</h1>
            </v-row>

            <v-row justify="center" class="mb-5">
                <v-img src="@/assets/img/projekt-22.png"></v-img>
            </v-row>

        
            <v-form>

            <div class="text-subtitle-1 d-flex align-center justify-space-between">1. Vyberte sumu príspevku</div>
            <v-radio-group class="select-group">
              <v-radio color="#A29061" label="10€" value="one" @click="clickToggleOff"></v-radio>
              <v-radio color="#A29061" label="20€" value="two" @click="clickToggleOff"></v-radio>
              <v-radio color="#A29061" label="50€" value="three" @click="clickToggleOff"></v-radio>
              <v-radio color="#A29061" label="Iná suma" value="four" @click="clickToggleOn" ></v-radio>
              <v-text-field
                label="Zadajte sumu príspevku (min. 1€)"
                hide-details
                required
                prepend-inner-icon="mdi-currency-eur"
                class="mb-5"
                :class="clicked ? '' : 'd-none'"
              ></v-text-field>
            </v-radio-group>

            <div class="text-subtitle-1 d-flex align-center justify-space-between">2. Vyberte spôsob platby</div>
            <v-radio-group class="select-group">
              <v-radio color="#A29061" label="Platba kartou (Visa, MasterCard)" value="one"></v-radio>
              <v-radio color="#A29061" label="Bankový prevod" value="two"></v-radio>
            </v-radio-group>
            
            <div class="text-subtitle-1 d-flex align-center justify-space-between">3. Údaje o prispievateľovi</div>
            <v-text-field
              label="Zadajte vaše meno"
              hide-details
              required
              prepend-inner-icon="mdi-alphabetical"
            ></v-text-field>
            <v-checkbox color="#A29061" label="Chcem darovať anonymne"></v-checkbox>

            <div class="text-subtitle-1 d-flex align-center justify-space-between">4. Komentár k príspevku</div>
            <v-text-field
              label="Zadajte komentár k príspevku"
              hide-details
              required
              prepend-inner-icon="mdi-pencil"
              
            ></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mb-10">
              Komentár je dobrovoľný.
            </div>

            

            <v-btn size="x-large" id="login-btn" type="submit">Darovať</v-btn>
            
            </v-form>
        </v-card>
    </v-container>

    <FooterComponent class="mt-8"></FooterComponent>
</template>

<style>
.select-group{
  color: black !important;
}
</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  data() {
    return{
      clicked: false,
    }
  },
  components: {
    FooterComponent,
  },
  methods: {
    clickToggleOn() {
      this.clicked = true
    },
    clickToggleOff() {
      this.clicked = false
    },
  }
}
</script>
<style lang="">
    
</style>