<template>
  <v-container align="center" class="ma-auto">
    <v-card 
      class="mx-auto pa-10"
      elevation="0"
      max-width="500"
      rounded="lg"
    >
      <v-row justify="center" class="mb-5">
        <h1 id="login-title">Registrácia</h1>
      </v-row>

      <v-container >
        <v-form @submit.prevent="handleSubmit" v-model="valid" >

          <div class="d-none mb-10" >
            <v-btn :id="toggled ? 'unclicked-btn' : 'clicked-btn'" class="mr-10 pr-5 pl-5" @click="toggle">Som študent</v-btn>
            <v-btn :id="toggled ? 'clicked-btn' : 'unclicked-btn'" class="pr-5 pl-5" @click="toggle">Som zamestnanec</v-btn>
          </div>

          <div class="mb-10">
            <v-btn :id="toggled ? 'unclicked-btn' : 'clicked-btn'" class="mr-10 pr-5 pl-5" @click="toggle">Som študent</v-btn>
            <v-btn :id="toggled ? 'clicked-btn' : 'unclicked-btn'" class="pr-5 pl-5" @click="toggle">Som zamestnanec</v-btn>
          </div>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Meno</div>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Zadajte vaše meno"
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
            hint="At least 5 characters"
            :type="show1 ? 'text' : 'password'"
            hide-details
            required
            prepend-inner-icon="mdi-lock-outline"
            class="mb-5"
          ></v-text-field>

          <div class="d-flex mb-10">
            <p>Už u nás máte účet? <router-link id="register" to="/login">Prihláste sa.</router-link></p>
          </div>
          <v-btn size="large" id="login-btn" type="submit">R E G I S T R O V A Ť</v-btn>
          
        </v-form>
      </v-container>
    </v-card>
  </v-container>
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
  font-size: 40px;
}

#register{
  color: #A29061;
  font-size: 18px;
  font-weight: 500;
}

#login-btn{
  background-color: #A29061;
  color: white;
  font-weight: 500;
}
</style>

<script>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const name = ref('')
    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const router = useRouter();
    const toggled = ref(false)

    const emailRules = [
      v => !!v || 'E-mail is required.',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
    ];

    const passwordRules = [
      v => !!v || 'Password is required.',
      v => (v && v.length >= 5) || 'Password must be at least 5 characters.',
    ];

    const handleSubmit = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push('/');
      } catch (e) {
        alert(e.message);
      }
    };

    const toggle = async () => {
      toggled.value = !toggled.value
    };

    return {
      name,
      email,
      password,
      emailRules,
      passwordRules,
      handleSubmit,
      toggle,
      toggled
    };
  },
};
</script>
  