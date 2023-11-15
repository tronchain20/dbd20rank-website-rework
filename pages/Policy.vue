<template>

  <div>
    <Header />

    <PolicyPageModul />

    <Footer />
  </div>

</template>

<script>
import Header from "../components/MainComponents/Header.vue";
import Footer from "../components/MainComponents/Footer.vue";
import PolicyPageModul from '../components/PageComponents/PolicyPageModul.vue'

export default {
  name: 'Policy',
  components: {PolicyPageModul, Footer, Header},
};
</script>

<style scoped>
@import 'assets/css/base.css';

</style>