import { createStore } from 'vuex'
import router from "../routes";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {
    loginState: (state) => {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      if (router.currentRoute.name !== "Home") router.push("/");
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires");
      localStorage.removeItem("user_id");

      router.push("/login");
    },
  },
  actions: {
    login({ commit }, expires_in) {
      setTimeout(() => {
        commit("logout");
      }, expires_in);
      commit("login");
    },
    logout({ commit }) {
      commit("logout");
    },
  },
});
