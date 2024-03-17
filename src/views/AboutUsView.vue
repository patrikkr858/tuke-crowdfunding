<template>
    <v-container class="mt-5">
        <v-row v-reveal class="reveal mx-5">
            <v-col cols="12" md="6">
                <v-row>
                    <v-col>
                        <h1>Ako crowdfunding na TUKE funguje?</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p>Na Technickej univerzite v Košiciach sme spustili revolučnú  crowdfundingovú platformu, ktorá poskytuje priestor pre realizáciu  inovatívnych projektov študentov a zamestnancov. <br><br>

                        <b>Naším cieľom je uľahčiť  získavanie finančných prostriedkov pre myšlienky, ktoré môžu pozitívne  ovplyvniť nielen univerzitné prostredie, ale aj širšiu spoločnosť.</b><br><br>
                        
                        Platforma umožňuje členom akademickej komunity a externým prispievateľom  jednoducho a transparentne podporovať projekty, ktoré sa im páčia.  Každý projekt je detailne predstavený na portáli vrátane jeho cieľov,  plánovanej realizácie a sumy potrebnej na jeho uskutočnenie.<br><br>

                        <b>Podporovatelia môžu prispievať akoukoľvek sumou, čím priamo ovplyvňujú  budúcnosť vybraných projektov.</b>
                        </p>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" md="6">
                <div class="d-flex justify-center alignt-center">
                    <v-img src="@/assets/img/projekt-5.png" width="400px" height="400px"></v-img>
                </div>
            </v-col>
        </v-row>

        <v-row v-reveal class="reveal mt-sm-10 mt-1 mx-5">
            <v-col cols="12">
                <v-row>
                    <v-col>
                        <h1>Ako získať prostriedky?</h1>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4">
                <v-col>
                    <v-row class="mb-3 justify-center justify-md-start">
                        <div class="circle">1</div>
                    </v-row>
                    <v-row class="mb-3 justify-center justify-md-start">
                        <h2>Nápad a Príprava</h2>
                    </v-row>
                    <v-row class="justify-center justify-md-start">
                        <p>
                            Začnite nápadom a definujte cieľ vášho projektu. Pripravte podrobný  popis, čo chcete dosiahnuť, a uveďte, ako bude váš projekt prínosom pre  univerzitu. Pridajte obrázky alebo videá.
                        </p>
                    </v-row>
                </v-col>
            </v-col>
            <v-col cols="12" md="4">
                <v-col>
                    <v-row class="mb-3 d-flex justify-center justify-md-start">
                        <div class="circle">2</div>
                    </v-row>
                    <v-row class="mb-3 d-flex justify-center justify-md-start">
                        <h2>Registrácia a Nastavenie</h2>
                    </v-row>
                    <v-row class="d-flex justify-center justify-md-start">
                        <p>
                            Zaregistrujte sa na platforme a vytvorte profil vášho projektu. Zadajte  všetky potrebné údaje vrátane finančných cieľov a odhadovaného času  realizácie.
                        </p>
                    </v-row>
                </v-col>
            </v-col>
            <v-col cols="12" md="4">
                <v-col>
                    <v-row class="mb-3 justify-center justify-md-start">
                        <div class="circle">3</div>
                    </v-row>
                    <v-row class="mb-3 justify-center justify-md-start">
                        <h2>Propagácia a Získavanie podpory</h2>
                    </v-row>
                    <v-row class="justify-center justify-md-start">
                        <p>
                            Ak je všetko v poriadku, začnite s propagáciou medzi priateľmi, rodinou a prostredníctvom  sociálnych sietí. Využite všetky dostupné kanály, aby ste o svojom  projekte informovali čo najširšiu verejnosť a získali potrebnú podporu.
                        </p>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>

        
        <div v-reveal class="reveal mt-10 banner mx-5">
            <v-row class="d-flex justify-center align-center banner-text mx-5 mx-sm-15">
                <h1 class="mt-10">Priestor, kde inovácia a kreativita stretávajú solidaritu a podporu, čím  spoločne formujeme budúcnosť Technickej univerzity v Košiciach a  okolia.</h1>
            </v-row>

            <v-row class="d-flex justify-center align-center mt-10">
                <v-btn size="x-large" class="create-project mb-10">Vytvoriť projekt</v-btn>
            </v-row>
        </div>
    </v-container>

    <FooterComponent class="mt-8"></FooterComponent>
</template>

<style>
.create-project{
    color: #A29061 !important;
    font-weight: bold !important;
}

.banner-text{
    color: white;
    text-align: center;
    font-size: large;
}

@media (max-width: 960px){
    .banner-text{
        font-size: 15px;
    }
}

@media (max-width: 600px){
    .banner-text{
        font-size: 10px;
    }
}

.banner{
    background-color: #A29061;
}

.line {
    border: 1px solid black;
}

.circle {
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: #A29061;
  color: white;
  text-align: center;
  font-size: 22px;
}

</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        FooterComponent,
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
