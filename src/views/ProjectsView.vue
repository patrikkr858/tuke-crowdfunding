<template>
    <v-container>
        <v-row class="mx-15 mt-5">
            <v-col 
                cols="12" 
                md="3" 
                class="hidden-sm-and-down pr-5"
            >
                <v-row class="mb-5"><h2 class="category-title">K A T E G Ó R I E</h2></v-row>
                <v-row class="mb-8" id="all-projects">
                    <p class="category">Všetky projekty</p>
                    <v-spacer></v-spacer>
                    <v-icon class="hidden-sm-and-down pr-5">mdi-chevron-right</v-icon>
                </v-row>
                <div v-for="(category,i) in categories" :key="i">
                    <v-row class="mb-8"><p class="category">{{ category.name }}</p></v-row>
                </div>
            </v-col>

            <v-col 
                cols="12" 
                md="3" 
                class="hidden-md-and-up pl-5"
            >
                <v-row class="mb-8">
                    <v-select
                        :items="categoriesNames"
                        density="comfortable"
                        label="K A T E G Ó R I E: VŠETKY PROJEKTY"
                        class="tlak"
                    ></v-select>
                </v-row>
            </v-col>

            <v-col cols="12" md="9">
                
                    <v-row class="mb-5">
                        <h1>Všetky prebiehajúce projekty</h1>
                    </v-row>
                    <v-row class="justify-md-start justify-sm-center">
                        <v-col 
                            cols="12"
                            sm="6"
                            md="6"
                            lg="3"
                            v-for="(project,i) in projects"
                            :key="i"
                        >
                            <v-card 
                                elevation="5" 
                                to="/detail"
                            >
                                <v-img :src="project.src" class="mb-5"/>
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
                                    <v-btn class="button-primary">Podpor projekt</v-btn>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
    </v-container>

    <FooterComponent class="mt-8"></FooterComponent>
</template>

<style>
#all-projects{
    color: #A29061;
}

.category{
    font-size: 20px;
    transition: .3s;
}

.category:hover{
    cursor: pointer;
    color: #A29061;
}
</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        FooterComponent,
    },
    data() {
        return {
            categoriesNames: ['Vzdelávanie', 'Šport', 'Životné prostredie', 'Inovácie', 'Núdzové fondy', 'Zdravie', 'Študentský život', 'Kultúra a umenie'],
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
                    name: 'Kultúra a umenie',
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
        }
    },
    methods: {
        calculatePercentage(project) {
            return (project.collected / project.goal) * 100;
        },
     }
}

</script>