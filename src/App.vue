<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style>

@import '../public/static/css/animate.css';
@import '../public/static/css/bootstrap.min.css';
@import '../public/static/css/sidebar-menu.css';
@import '../public/static/css/slick.css';
@import '../public/static/css/slick-theme.css';
@import '../public/static/css/style.css';

</style>
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Header}
}
</script>
