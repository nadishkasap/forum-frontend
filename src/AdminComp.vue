<template>
  <div>
    <h1 class="title">Forum Posts</h1>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.post_id">
          <td>{{ post.post_id }}</td>
          <td>{{ post.post_title }}</td>
          <td>{{ post.post_description }}</td>
          <td>
            <button class="button btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: "Bearer " + token
        },
      };

      axios
        .get("http://localhost/forum/public/post", config)
        .then((res) => {
          this.posts = res.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
