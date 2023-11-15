<template>

  <div>
    <Header />

    <main class="main">
      <HomePageModul />
    </main>

    <Footer />
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

import Header from '../components/MainComponents/Header.vue'
import Footer from '../components/MainComponents/Footer.vue'
import HomePageModul from '../components/PageComponents/HomePageModul.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { HomePageModul, Header, Footer },
})
</script>



<style scoped>
@import 'assets/css/base.css';

</style>