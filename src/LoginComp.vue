<template>
  <div class="row">
    <div
      class="
        col-12 col-sm-8
        offset-sm-2
        col-md-6
        offset-md-3
        mt-5
        pt-3
        pb-3
        bg-white
        from-wrapper
      "
    >
      <div class="container">
        <h3>Login</h3>
        <hr />

        <form @submit.prevent="login()" action="/login" method="post">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="text"
              class="form-control"
              name="user_email"
              id="user_email"
              v-model="user_email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              name="user_password"
              id="user_password"
              v-model="user_password"
            />
          </div>

          <alert v-if="msg" :msg="msg" :classAlert="classAlert"></alert>

          <div class="row">
            <div class="col-12 col-sm-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="col-12 col-sm-8 text-right">
              <a href="/register">Don't have an account yet?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./components/AlertComp";
import axios from "axios";
export default {
  data() {
    return {
      access_token: null,
      expires_in: null,
      user_email: "",
      user_password: "",
      msg: null,
      classAlert: null,
    };
  },
  components: {
    Alert,
  },
  methods: {
    login() {
      const form = new FormData();

      form.append("user_email", this.user_email);
      form.append("user_password", this.user_password);

      axios
        .post("http://localhost/forum/public/login", form)
        .then(() => {
          this.msg = "You have been successfully logged in!";
          this.classAlert = "success";
          this.user_email = "";
          this.user_password = "";
        })
        .catch((err) => {
          this.msg = "";
          Object.keys(err.response.data).forEach((key) => {
            this.msg += err.response.data[key] + "<br>";
            console.log("Value: ", err.response.data[key]);
          });
          this.classAlert = "danger";
        });
    },
  },
};
</script>

<style>
</style>