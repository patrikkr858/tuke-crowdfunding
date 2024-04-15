<template lang="">
    <v-container class="mt-5">
        <div v-reveal class="reveal mx-5">
            <v-row>
                <h1>Môj profil</h1>
            </v-row>
            <v-row class="mt-5">
                <div class="d-flex justify-start">
                    <v-col>
                        <v-avatar
                            color="#A29061"
                            size="x-large"
                        >
                            <span class="text-h7">{{ this.userInitials }}</span>
                        </v-avatar>
                    </v-col>
                    <v-col class="mt-4">
                        <v-row class="font-weight-bold">
                            <p>{{ user.email }}</p>
                        </v-row>
                        <v-row class="createdAt">
                            <p>Registrovaný {{ createdAt }}</p>
                        </v-row>
                    </v-col>
                </div>
            </v-row>
        </div>

        <div v-reveal class="reveal mt-sm-10 mt-1 mx-5 mt-5">
            <v-row>
                <h1>Moje projekty</h1>
            </v-row>
            <v-row class="createdAt">
                    <p>Vyzbierali ste celkovo 3350 €</p>
            </v-row>
            <v-row class="mt-5">
                <v-col 
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    v-for="(project,i) in projects"
                    :key="i"
                >
                    <v-card 
                        elevation="5" 
                        to="/detail"
                        class="card"
                    >
                        <v-img :src="project.src" class="mb-3"/>
                        <div class="d-flex justify-center align-center mx-5 mb-3" id="card-title">
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
                            <v-btn class="button-secondary nahlad"><v-icon class="mr-2">mdi-eye</v-icon>Náhľad</v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col 
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2">
                    <v-card 
                        elevation="5" 
                        class="card"
                    >
                        <v-container class="transform">  
                            <v-row class="d-flex justify-center">
                                <h4>Vyberte peniaze pre nový projekt</h4>
                            </v-row>
                            <v-row class="d-flex justify-center mt-7">
                                <v-btn to="/create/project" class="button-primary" size="small">Vytvoriť projekt</v-btn>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            
        </div>

        <v-row v-reveal class="reveal mt-sm-10 mt-1 mx-5">
            <h1>Podporené projekty</h1>
        </v-row>
        <div v-reveal class="reveal mt-10 banner mx-5">
            <v-row class="d-flex justify-center align-center banner-text mx-5 mx-sm-15">
                <h1 class="mt-10">Zatiaľ ste nepodporili žiadny projekt.</h1>
            </v-row>

            <v-row class="d-flex justify-center align-center mt-10">
                <v-btn to="/projects" size="x-large" class="create-project mb-10">Podpor projekty</v-btn>
            </v-row>
        </div>
    </v-container>

    <FooterComponent class="mt-8"></FooterComponent>
</template>

<style>
.createdAt{
    color: grey
}

.nahlad{
    color: #A29061 !important;
}

.card{
    min-height: 100%;
}

.transform{
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    text-align: center;
}

</style>


<script>
import FooterComponent from '@/components/FooterComponent.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
    components: {
        FooterComponent,
    },
    data() {
        return{
            user: '',
            createdAt: '',
            userInitials: '',
            projects: [
                {
                    src: require('@/assets/img/projekt-2.png'),
                    title: 'Inovácie v systémoch',
                    collected: 3350,
                    goal: 6200,
                },
            ],
        }
    },
    mounted() {
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
        setUserInitials(user) {
            const nameParts = user.displayName.split(' ');
            const initials = nameParts.map(part => part[0]).join('');
            this.userInitials = initials.toUpperCase();
            this.user = user
            const createdAt = user['metadata']['createdAt'];
            const date = new Date(parseInt(createdAt));
            // Extracting month and year from the date object
            const month = date.getMonth() + 1; // getMonth returns 0-11, adding 1 to adjust to 1-12
            const year = date.getFullYear();

            // Formatting month to always have two digits
            const formattedMonth = month < 10 ? `0${month}` : month;

            // Creating the final formatted date string
            const formattedDate = `${formattedMonth}/${year}`;
            this.createdAt = formattedDate
        },
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
            var elementVisible = 150;

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
            };
        },
        unmounted(el) {
            el.__vueRevealCleanup__ && el.__vueRevealCleanup__();
        }
        }
    }
}
</script>
