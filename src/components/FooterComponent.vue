<template>
  <v-container fluid class="footer">
    <v-row class="mx-10 my-5">
      <v-col cols="12" md="5" class="mr-md-10 mb-10">
        <v-row no-gutters>
          <v-col class="d-flex">
            <div>
              <v-img src="@/assets/img/tuke-logo.png" height="60" width="60" class="mr-5"></v-img>
            </div>
            <div>
              <h3 id="logo-title">TUKE<br>CROWDFUNDING</h3>
            </div>
          </v-col>
          <v-col class="d-none d-md-flex"></v-col>
          <v-col class="d-none d-md-flex"></v-col>
        </v-row>
        <v-row class="mx-0">
          <p> Naša platforma je navrhnutá špeciálne pre Technickú univerzitu v Košiciach, a
              by poskytovala nevyhnutné nástroje a podporu pre zbieranie finančných 
              prostriedkov na vaše technologické projekty a výskum.
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" class="mt-3">
        <v-row class="mx-0 mb-2 o-nas"><h3>O NÁS</h3></v-row>
        <v-row class="mx-0 mb-2"><p>Podmienky používania</p></v-row>
        <v-row class="mx-0 mb-2"><p>Časté otázky</p></v-row>
        <v-row class="mx-0 mb-2"><p>Zásady ochrany osobných údajov</p></v-row>
        <v-row class="mx-0 mb-2"><p>O nás</p></v-row>
        <v-row class="mx-0"><p>Podpora</p></v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.footer{
  background-color: #2C2E35;
  color: white;
  font-weight: 300;
}

.o-nas{
  color: #A29061;
}
</style>