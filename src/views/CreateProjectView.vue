<template lang="">
    <v-container align="center" class="mt-10">
        <v-card
        elevation="0"
        max-width="600"
        rounded="lg"
        >
            <v-row v-reveal justify="center" class="mb-5 create-project-title reveal">
                <h1>Vytvoriť projekt</h1>
            </v-row>
            <v-form v-reveal class="reveal">
                <div class="text-subtitle-1 d-flex align-center justify-space-between">Názov</div>
                <v-text-field
                    label="Zadajte názov projektu"
                    hide-details
                    required
                    prepend-inner-icon="mdi-alphabetical"
                    class="mb-10"
                ></v-text-field>

                <div class="text-subtitle-1 d-flex align-center justify-space-between">Popis</div>
                <v-textarea
                    label="Zadajte popis"
                    hide-details
                    required
                    clearable
                    prepend-inner-icon="mdi-alphabetical"
                    class="mb-10"
                ></v-textarea>

                <div class="text-subtitle-1 d-flex align-center justify-space-between">Cieľová suma</div>
                <v-text-field

                    label="Zadajte sumu cieľa (min. 10€)"
                    hide-details
                    required
                    prepend-inner-icon="mdi-currency-eur"
                    class="mb-10"
                ></v-text-field>

                <div class="text-subtitle-1 d-flex align-center justify-space-between">Fotografie</div>
                <v-file-input

                    label="Zadajte fotografie projektu"
                    counter
                    chips
                    accept="image/png, image/jpeg, image/bmp"
                    multiple
                    prepend-icon="mdi-camera"
                    show-size
                ></v-file-input>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Fotografie budú nahraté v poradí ako ich zadáte.
                </div>

                <v-btn size="x-large" id="login-btn" type="submit"
                class="mt-10">Vytvoriť</v-btn>
            </v-form>
        </v-card>
    </v-container>

    <FooterComponent class="mt-8"></FooterComponent>
</template>

<style>
.create-project-title{
    color: #A29061;
}

.lines{
    border-bottom: 1px solid rgba(162,144,97, 0.5)
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
            
        };
    },
    methods: {
        
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