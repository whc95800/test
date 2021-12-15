<template>
  <Header class="header-sp" />
  <router-view/>
  <Footer/>
</template>

<style>

</style>
<script>

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {Footer, Header},
  setup(){
    document.body.addEventListener("touchstart", function(){})
  }
}
</script>
<style lang="less">
*{
  font-family: "Centra No2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
body,ul{
  margin: 0;
  padding: 0;
}
.header-sp{
  top:0;
  position: -webkit-sticky;
  position: sticky;
}

</style>
