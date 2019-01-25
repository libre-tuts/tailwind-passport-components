import Vue from "vue";

Vue.component("passport-clients", require("./Clients.vue"));

Vue.component(
  "passport-authorized-clients",
  require("./AuthorizedClients.vue")
);

Vue.component(
  "passport-personal-access-tokens",
  require("./PersonalAccessTokens.vue")
);
