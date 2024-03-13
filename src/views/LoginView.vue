<template>
  <v-container align="center" class="my-auto">
    <v-card 
      class="pa-10"
      elevation="0"
      max-width="500"
      rounded="lg"
    >
      <v-row justify="center" class="mb-5">
        <h1 id="login-title">Prihlásenie</h1>
      </v-row>

      <v-container >
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
            <p>Ešte u nás nemáte účet? <router-link id="register" to="/register">Registrujte sa tu.</router-link></p>
          </div>

          <v-btn size="large" id="login-btn" type="submit">P r i h l á s i ť</v-btn>
          
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<style>


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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const router = useRouter();

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

