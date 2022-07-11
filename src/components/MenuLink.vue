<template>
  <router-link class="nav-item" active-class="active" :to="path">
    <li>
      <a class="nav-link">{{text}}</a>
    </li>
    
  </router-link>
</template>

<script>
export default {
  props: ["path", "text"]
};
</script>

<style>
</style>