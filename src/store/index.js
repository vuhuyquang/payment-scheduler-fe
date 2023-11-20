import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarType: "bg-gradient-dark",
    color: "success",
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
  },
  mutations: {},
  actions: {
    setColor({ commit }, payload) {
      commit("color", payload);
    },
  },
  getters: {},
});
