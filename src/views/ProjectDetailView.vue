<template>
    <div class="d-flex justify-center">
        <v-card width="1400" elevation="0" v-reveal class="reveal mx-10 mt-10">
            <h1 class="mb-5 project-title">Inovácie v pneumatických systémoch</h1>
            <v-row v-reveal class="reveal">
                <v-col cols="12" md="8" lg="9">
                    <v-img src="@/assets/img/projekt-22.png"></v-img>
                </v-col>
                <v-col cols="12" md="4" lg="3">
                    <div class="ma-5 project-details">
                        <h1>143</h1>
                        <h4 class="ml-1">darcov</h4>
                    </div>
                    <div class="ma-5 project-details">
                        <h1>3350€</h1>
                        <h4>vyzbieraných</h4>
                    </div>
                    <div class="d-flex mx-3 slt" id="project-card-money">
                        <p class="ml-auto">53%</p>
                    </div>
                    <div class="d-flex mt-2 mx-5" id="project-card-money">
                        <v-progress-linear 
                        :model-value="53" 
                        class="progress-bar"
                        height="8"
                        >
                        </v-progress-linear>
                    </div>
                    <div class="d-flex mx-5 mt-2" id="project-card-money">
                        <p>€6200</p>
                        <p class="ml-auto">23 dní</p>
                    </div>
                    <div class="d-flex mb-5 mx-5" id="project-card-text">
                        <p>ciel</p>
                        <p class="ml-auto">do ukončenia</p>
                    </div>
                    <div class="d-flex justify-center align-center my-5">
                        <v-btn size="x-large" class="button-primary btn donate mt-2" to="/donate">Darovať</v-btn>
                    </div>
                    <div class="d-flex justify-center align-center my-5">
                        <v-btn size="x-large" class="mt-2 btn share" to="/detail">Zdielať</v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row v-reveal class="reveal subtext">
                <v-col cols="6" md="4">
                    <h1
                        :class="{'mr-5': true, 'project-bar-active underline': isActive === 'true', 'project-bar': isActive === 'false'}"
                        @click="setActive('true')"
                    >
                        O projekte
                    </h1>
                </v-col>
                <v-col cols="6" md="4">
                    <h1
                        :class="{'mr-5': true, 'project-bar-active underline': isActive === 'false', 'project-bar': isActive === 'true'}"
                        @click="setActive('false')"
                    >
                        Darcovia (5)
                </h1>
                </v-col>
            </v-row>
            <div v-if="isActive === 'true'">
                <v-row v-reveal class="reveal mt-2">
                    <v-col class="d-flex">
                        <h4>ZAKLADATEĽ: </h4>
                        <p class="ml-3">Jožko Mrkvička, 3.ročník Bc., FEI</p>
                    </v-col>
                </v-row>
                <v-row v-reveal class="reveal">
                    <v-col class="d-flex">
                        <h4>DÁTUM PRIDANIA: </h4>
                        <p class="ml-3">26.9.2023</p>
                    </v-col>
                </v-row>
                <hr v-reveal class="lines my-5 reveal">
                <v-row v-reveal class="reveal">
                    <v-col>
                        <h1>V čom potrebujeme pomôcť a na čo budú peniaze použité?</h1>
                    </v-col>
                </v-row>
                <v-row v-reveal class="reveal mb-5">
                    <v-col>
                        <p>Naša skupina výskumníkov a inžinierov pracuje na prelomovom projekte v oblasti pneumatických systémov. Snažíme sa vyvinúť novú generáciu pneumatických komponentov, ktoré budú energeticky efektívnejšie, odolnejšie a šetrnejšie k životnému prostrediu. Tento projekt má potenciál radikálne zmeniť priemyselné aplikácie pneumatiky a významne prispieť k ochrane našej planéty. <br><br>

                        Naše doterajšie výsledky sú sľubné, ale čelíme výzve v podobe vysokých nákladov na vývoj a testovanie. Vývoj a optimalizácia prototypov, nákup špecializovaných materiálov a pokročilých komponentov, ako aj realizácia rozsiahlych testovacích procedúr vyžadujú značné finančné prostriedky.<br><br>

                        <b>Celkové náklady našej aktuálnej fázy výskumu sú odhadované na 6200 €.</b> <br><br>

                        Táto suma zahŕňa náklady na materiály, laboratórne vybavenie, softvér na modelovanie a analýzu, ako aj na zapojenie ďalších expertov do tímu. Cieľom tejto kampane je získať potrebné financie, ktoré nám umožnia dokončiť tento inovačný projekt a presunúť ho do fázy praktickej aplikácie.<br>
                        Vaša podpora nám pomôže prekonať tieto finančné prekážky a pokračovať v práci, ktorá má potenciál nie len zlepšiť existujúce technológie, ale aj otvoriť dvere novým možnostiam využitia pneumatiky v rôznych odvetviach. Každý príspevok, veľký či malý, nás približuje k dosiahnutiu našich cieľov a k realizácii tohto dôležitého projektu.

                        Ďakujeme za každý príspevok a vážime si Vašu pomoc.
                        </p>
                    </v-col>
                </v-row>
            </div>
            <div v-if="isActive === 'false'" v-reveal class="reveal mb-10">
                <div
                    v-for="(donate,i) in donates"
                    :key="i"
                    class="mt-2"
                >
                    <div class="donates">
                        <v-row>
                            <v-col 
                            cols="4"
                            sm="3"
                            md="2"
                            >
                                <v-avatar
                                    color="#b8a577c2"
                                    size="x-large"
                                >
                                <span class="text-h7">{{ donate.initials }}</span>
                                </v-avatar>
                            </v-col>
                            <v-col
                                class="mt-4"
                            >
                                <v-row class="font-weight-bold">
                                    <p>{{ donate.name }}</p>
                                </v-row>
                                <v-row class="createdAt">
                                    <p>{{ donate.sum }} • {{ donate.date }}</p>
                                </v-row>
                                <v-row class="mt-8 mb-2 mr-2 comment" v-if="donate.comment">
                                    <p>{{ donate.comment }}</p>
                                </v-row>
                            </v-col>
                        </v-row>
                        
                    </div>
                </div>
            </div>
        </v-card>
    </div>
    

    <FooterComponent class="mt-8"></FooterComponent>
</template>


<script>
import '@/assets/styles/projectdetail.css'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        FooterComponent,
    },
    data() {
        return{
            isActive: 'true',
            donates: [
                {
                    name: 'Veľkorysý darca',
                    initials: 'VD',
                    sum: '40€',
                    date: '15. 4. 2024 22:14',
                    comment: '',
                },
                {
                    name: 'Dobrosrdečný darca',
                    initials: 'DD',
                    sum: '10€',
                    date: '12. 4. 2024 15:10',
                    comment: '',
                },
                {
                    name: 'Láskavý darca',
                    initials: 'LD',
                    sum: '5€',
                    date: '8. 4. 2024 8:35',
                    comment: 'Držím palce k dokončeniu projektu!',
                },
                {
                    name: 'Patrik Krajňák',
                    initials: 'PK',
                    sum: '35€',
                    date: '7. 4. 2024 21:34',
                    comment: 'S nadšením sledujem váš projekt. Teším sa na jeho úspešnu realizáciu a prajem veľa úspechov :)',
                },
                {
                    name: 'Štedrý darca',
                    initials: 'ŠD',
                    sum: '22€',
                    date: '1. 3. 2024 14:54',
                    comment: '',
                },
            ],
        };
    },
    methods: {
        setActive(tab) {
            this.isActive = tab;
        }
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