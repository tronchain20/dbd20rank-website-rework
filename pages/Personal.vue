<template>

  <div>
    <Header />

    <PersonalPageModul />

    <Footer />
  </div>

</template>

<script>
import Header from "../components/MainComponents/Header.vue";
import Footer from "../components/MainComponents/Footer.vue";
import PersonalPageModul from '../components/PageComponents/PersonalPageModul.vue'

export default {
  name: 'personal',
  components: {Footer, Header, PersonalPageModul},
};
</script>

<style scoped>
@import 'assets/css/base.css';

</style>