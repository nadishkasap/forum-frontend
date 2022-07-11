import Vue from "vue";
import axios from "axios";

const guest = axios.create({
  baseURL: "http://localhost/forum/public/register",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
  },
});


Vue.prototype.$guest = guest;

export { guest};
