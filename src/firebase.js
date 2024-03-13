import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { initializeApp } from 'firebase/app'

export const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyCW7RclVLMwZHlc0kBWOXQukwz3J5baNgk",
    authDomain: "tukecrowdfunding.firebaseapp.com",
    projectId: "tukecrowdfunding",
    storageBucket: "tukecrowdfunding.appspot.com",
    messagingSenderId: "721682824493",
    appId: "1:721682824493:web:3024c6ce7c63a97df967a4",
    measurementId: "G-CE6H7QYV75"
});

export const getUserState = () =>
    new Promise((resolve,reject) =>
        onAuthStateChanged(getAuth(), resolve, reject)
    )

export const useAuthState = () => {
    const user = ref(null)
    const error = ref(null)

    const auth = getAuth()
    let unsubscribe
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            u => (user.value = u),
            e => (error.value = e)
        )
    })
    onUnmounted(() => unsubscribe())

    const isAuthenticated = computed(() => user.value != null)

    return { user, error, isAuthenticated }
}

