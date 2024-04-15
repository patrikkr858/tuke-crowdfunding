<template>
  <v-container align="center" class="my-auto mt-10">
    <v-card
      elevation="0"
      max-width="600"
      rounded="lg"
    >
      <v-row justify="center" class="mb-5">
        <h1 id="login-title">Prihlásenie</h1>
      </v-row>

      
        <v-form @submit.prevent="handleSubmit" v-model="valid" >

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
            label="Zadajte heslo"
            hint="At least 5 characters"
            :type="show1 ? 'text' : 'password'"
            hide-details
            required
            prepend-inner-icon="mdi-lock-outline"
            class="mb-5"
          ></v-text-field>

          <div class="d-flex mb-5">
            <p><router-link class="font-weight-bold" id="register" to="/login">Zabudli ste heslo?</router-link></p>
          </div>

          <div class="d-flex mb-10">
            <p>Ešte u nás nemáte účet? <router-link class="font-weight-bold" id="register" to="/register">Registrujte sa.</router-link></p>
          </div>

          <v-btn size="large" id="login-btn" type="submit">P r i h l á s i ť</v-btn>
          
        </v-form>
    </v-card>
  </v-container>

  <FooterComponent class="mt-8"></FooterComponent>
</template>


<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const router = useRouter();

    const emailRules = [
      v => !!v || 'E-mail je povinný',
      v => /.+@.+\..+/.test(v) || 'E-mail musí byť zadaný v správnom tvare.',
    ];

    const passwordRules = [
      v => !!v || 'Heslo je povinné.',
      v => (v && v.length >= 10) || 'Heslo musí mať aspoň 10 znakov',
    ];

    const handleSubmit = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/');
      } catch (e) {
        alert(e.message);
      }
    };

    return {
      email,
      password,
      emailRules,
      passwordRules,
      handleSubmit,
    };
  },
};
</script>

