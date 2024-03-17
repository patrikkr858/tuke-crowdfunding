<template>
  <v-container fluid class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="mr-md-10 mb-10">
          <v-row>
            <v-col class="d-flex justify-center justify-md-start">
              <div>
                <v-img src="@/assets/img/tuke-logo.png" height="60" width="60" class="mr-5"></v-img>
              </div>
              <div>
                <h3 id="logo-title">TUKE<br>CROWDFUNDING</h3>
              </div>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center justify-md-start ">
            <p id="footer-text"> Naša platforma je navrhnutá špeciálne pre Technickú univerzitu v Košiciach, a
                by poskytovala nevyhnutné nástroje a podporu pre zbieranie finančných 
                prostriedkov na vaše technologické projekty a výskum.
            </p>
          </v-row>
        </v-col>
        <v-col cols="12" md="5" class="mt-3">
          <v-row class="mb-2 o-nas d-flex justify-center justify-md-start"><h3 >O NÁS</h3></v-row>
          <v-row class="mb-2 d-flex justify-center justify-md-start"><p>Podmienky používania</p></v-row>
          <v-row class="mb-2 d-flex justify-center justify-md-start"><p>Časté otázky</p></v-row>
          <v-row class="mb-2 d-flex justify-center justify-md-start"><p>Zásady ochrany osobných údajov</p></v-row>
          <v-row class="mb-2 d-flex justify-center justify-md-start"><p>O nás</p></v-row>
          <v-row class="d-flex justify-center justify-md-start"><p>Podpora</p></v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style>
@media (max-width: 959px) {
  #footer-text{
    max-width: 280px;
    text-align: center;
  }
}


.footer{
  background-color: #2C2E35;
  color: white;
  font-weight: 300;
  position: absolute;
  bottom: 0;
}

.o-nas{
  color: #A29061;
}
</style>