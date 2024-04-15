<template>
  <v-container align="center" class="ma-auto mt-10 mb-10">
    <v-card 
      class="mx-auto"
      elevation="0"
      max-width="600"
      rounded="lg"
    >
      <v-row justify="center" class="mb-5">
        <h1 id="login-title">Registrácia</h1>
      </v-row>

      
        <v-form @submit.prevent="handleSubmit" v-model="valid" >

          <!-- <div class="d-none mb-10" >
            <v-btn :id="toggled ? 'unclicked-btn' : 'clicked-btn'" class="mr-10 pr-5 pl-5" @click="toggle">Som študent</v-btn>
            <v-btn :id="toggled ? 'clicked-btn' : 'unclicked-btn'" class="pr-5 pl-5" @click="toggle">Som zamestnanec</v-btn>
          </div>

          <div class="mb-10">
            <v-btn :id="toggled ? 'unclicked-btn' : 'clicked-btn'" class="mr-10 pr-5 pl-5" @click="toggle">Som študent</v-btn>
            <v-btn :id="toggled ? 'clicked-btn' : 'unclicked-btn'" class="pr-5 pl-5" @click="toggle">Som zamestnanec</v-btn>
          </div> -->

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Meno</div>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Zadajte meno"
            hide-details
            required
            prepend-inner-icon="mdi-format-letter-case"
            class="mb-10"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Priezvisko</div>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Zadajte priezvisko"
            hide-details
            required
            prepend-inner-icon="mdi-format-letter-case"
            class="mb-10"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">E-mail</div>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Zadajte e-mailovú adresu"
            hide-details
            required
            prepend-inner-icon="mdi-email-outline"
            class="mb-10"
          ></v-text-field>
          
          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Heslo</div>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Zadajte heslo"
            hint="Heslo musí mať minimálne 8 znakov."
            :type="show1 ? 'text' : 'password'"
            hide-details
            required
            prepend-inner-icon="mdi-lock-outline"
            class="mb-10"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Potvrdenie hesla</div>
          <v-text-field
            v-model="passwordConfirm"
            :rules="confirmPasswordRules"
            label="Zadajte heslo znova"
            hint="Heslá sa musia zhodovať"
            :type="show1 ? 'text' : 'password'"
            hide-details
            required
            prepend-inner-icon="mdi-lock-outline"
            class="mb-5"
          ></v-text-field>

          <div class="d-flex mb-10">
            <p>Už u nás máte účet? <router-link class="font-weight-bold" id="register" to="/login">Prihláste sa.</router-link></p>
          </div>
          <v-btn size="large" id="login-btn" type="submit">R E G I S T R O V A Ť</v-btn>
          
        </v-form>
      
    </v-card>
  </v-container>

  <FooterComponent class="mt-8"></FooterComponent>
</template>
  
<style>

#clicked-btn{
  color: white;
  background-color: #A29061;
}

#unclicked-btn{
  color: #A29061;
  background-color: white;
}

#login-title{
  color: #A29061;
  font-size: 3.5em;
}

p{
  font-size: 1em;
}

#register{
  color: #A29061;
  font-size: 1em;
  font-weight: 500;
}

#login-btn{
  background-color: #A29061;
  color: white;
  font-weight: bold;
}
</style>

<script>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useRouter } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent,
  },
  setup() {
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const auth = getAuth();
    const router = useRouter();
    const toggled = ref(false)

    const emailRules = [
      v => !!v || 'E-mail je povinný',
      v => /.+@.+\..+/.test(v) || 'E-mail musí byť zadaný v správnom tvare.',
    ];

    const passwordRules = [
      v => !!v || 'Heslo je povinné.',
      v => (v && v.length >= 8) || 'Heslo musí mať aspoň 8 znakov',
    ];

    const confirmPasswordRules = [
        v => !!v || 'Heslá sa musia zhodovať.',
        v => v === password.value || 'Heslá sa nezhodujú.',
    ];

    const handleSubmit = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user
        await updateProfile(user, {
          displayName: `${firstname.value} ${lastname.value}`,
        });
        router.push('/');
      } catch (e) {
        alert(e.message);
      }
    };

    const toggle = async () => {
      toggled.value = !toggled.value
    };

    return {
      firstname,
      lastname,
      email,
      password,
      passwordConfirm,
      emailRules,
      passwordRules,
      confirmPasswordRules,
      handleSubmit,
      toggle,
      toggled
    };
  },
};
</script>
  