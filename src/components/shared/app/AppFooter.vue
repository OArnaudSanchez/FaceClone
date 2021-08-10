<template>
  <footer>
    <router-link :to="{name: 'Privacy'}">Privacidad</router-link>
    <router-link :to="{name: 'Terms'}">Condiciones</router-link>
    <p class="copyright">Facebook Clone by:
      <a href="https://oarnaudsanchez.com" target="_blank">OArnaud</a>
      &copy; {{ currentYear }}
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}

footer a {
  color: #1176b6;
  line-height: 14px;
  margin-right: 10px;
}

footer .copyright {
  color: #919191;
  margin-top: 10px;
}
</style>