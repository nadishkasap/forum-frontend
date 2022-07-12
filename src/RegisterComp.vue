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
                  name="user_name"
                  id="user_name"
                  v-model="user_name"
                />
              </div>
            </div>
            <div class="col-12">
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
            </div>
            <div class="col-12 col-sm-6">
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
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="password_confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="user_password_confirm"
                  id="user_password_confirm"
                  v-model="user_password_confirm"
                />
              </div>
            </div>
            <alert v-if="msg" :msg="msg" :classAlert="classAlert"></alert>
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
      form.append("user_name", this.user_name);
      form.append("user_email", this.user_email);
      form.append("user_password", this.user_password);
      form.append("user_type", 0);

      axios
        .post("http://localhost/forum/public/register", form)
        .then(() => {
          this.msg = "You have been successfully registered!";
          this.classAlert = "success";
          this.user_name = "";
          this.user_email = "";
          this.user_password = "";
          this.user_password_confirm = "";
        })
        .catch((err) => {
          this.msg =""
          Object.keys(err.response.data).forEach((key) => {
            this.msg += err.response.data[key]+"<br>";
            console.log("Value: ", err.response.data[key]);
          });
          this.classAlert = "danger";
        });
      //axios
    },
  },
  components: {
    Alert,
  },
};
</script>

<style>
</style>