<template>
  <sidenav
    :custom_class="color"
    class="fixed-start"
    v-if="showSidenav"
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden"
  >
    <!-- nav -->
    <navbar
      class="text-white opacity-8"
      :minNav="navbarMinimize"
      v-if="showNavbar"
    />
    <router-view />
    <app-footer v-show="showFooter" />
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
    Navbar,
    AppFooter
  },
  methods: {},
  computed: {
    ...mapState([
      "color",
      "showSidenav",
      "showNavbar",
      "showFooter",
    ])
  },
};
</script>
