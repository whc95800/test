<template>
  <div id="container">
    <Header/>
    <Base/>
  </div>
  <Footer/>
</template>

<style>

</style>
<script>

import Header from "./components/Header";
import Footer from "./components/Footer";
import Base from "./views/Base";
import '../style/footer.less';
import '../style/header.less';
import '../style/style.css';

export default {
  components: {Footer, Header, Base},
  setup() {
    document.body.addEventListener("touchstart", function () {
    })
  },
}
</script>
<style>
</style>
