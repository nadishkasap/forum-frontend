<template>
   <div class="row">
    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white from-wrapper">
      <div class="container">
        <h3>Login</h3>
        <hr>
  
        <form @submit.prevent="login()" action="/login" method="post">
          <div class="form-group">
           <label for="email">Email address</label>
           <input type="text" class="form-control" name="email" id="email" v-model="email">
          </div>
          <div class="form-group">
           <label for="password">Password</label>
           <input type="password" class="form-control" name="password" id="password" v-model="password">
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
      token: null,
      expires_in: null,
      email: "",
      password: "",
      msg: null,
      classAlert: null
    };
  },
  components: {
    Alert
  },
methods:{
  login() {
  
      const form = new FormData();

      form.append("username", this.email);
      form.append("password", this.password);

     axios
        .post("http://localhost/forum/public/login", form)
        .then(()=> {
          this.msg = "You have been successfully logged in!";
          this.classAlert = "success";
          this.email = "";
          this.password = "";
        })
        .catch(err => {
        this.msg =""
          Object.keys(err.response.data).forEach((key) => {
            this.msg += err.response.data[key]+"<br>";
            console.log("Value: ", err.response.data[key]);
          });
          this.classAlert = "danger";
        });
    }
}
}
</script>

<style>

</style>