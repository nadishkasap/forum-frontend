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
        <h3>Register</h3>
        <hr />
        <form @submit.prevent="register()" action="/register" method="post">
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="username">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  id="username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="password_confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password_confirm"
                  id="password_confirm"
                  v-model="password_confirm"
                />
              </div>
            </div>
            <alert v-if="msg"></alert>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
            <div class="col-12 col-sm-8 text-right">
              <router-link to="/login"> Already have an account </router-link>
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
      user_name: "",
      user_email: "",
      user_password: "",
      user_password_confirm: "",
      msg: null,
      classAlert: null,
    };
  },
  methods: {
  register() {
    const form = new FormData();
      form.append("user_name", this.username);
      form.append("user_email", this.email);
      form.append("user_password", this.password);
       form.append("user_type", 0);

      axios
        .post("http://localhost/forum/public/register", form)
        .then(() => {
          this.msg = "You have been successfully registered!";
          this.classAlert = "success";
          this.username = "";
          this.email = "";
          this.password = "";
          this.password_confirm = "";
        })
        .catch(err => {
          this.msg = err.response.data.messages.error;
          this.classAlert = "danger";
        });
      //axios
    }
  },
  components: {
    Alert,
  },
};
</script>

<style>
</style>