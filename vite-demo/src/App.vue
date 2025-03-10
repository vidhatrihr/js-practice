<script>
export default {
  data() {
    return {
      salary: 1000,
    };
  },
};
</script>

<template>
  <h1>My salary is {{ salary }}</h1>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view></router-view>
</template>
