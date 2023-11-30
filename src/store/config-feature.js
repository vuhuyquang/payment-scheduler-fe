import { createStore } from "vuex";

export default createStore({
  state: {
    menuConfig: null,
    hasMenuData: false,
  },
  mutations: {
    setMenuConfig(state, payload) {
      state.hasMenuData = payload;
      state.hasMenuData = true;
    },
    clearMenuConfig(state) {
      state.hasMenuData = null;
      state.hasMenuData = false;
    }
  },
  actions: {
    async getConfigFeature() {
      try {
        const response = await yourApiCallHere();
        const menuConfig = response.data.menuConfig;
        commit('setMenuConfig', menuConfig);
        // store.commit('clearMenuData');
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy menu:', error);
        throw error;
      }
    }
  },
  getters: {},
});