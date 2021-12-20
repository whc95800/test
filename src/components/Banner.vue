<template>
  <aside id="main-img">
    <img alt="" class="slide0" src="../../images/1.jpg">
    <img alt="" class="slide1" src="../../images/1.jpg">
    <img alt="" class="slide2" src="../../images/2.jpg">
    <img alt="" class="slide3" src="../../images/3.jpg">
  </aside>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style lang="less" scoped>
#main-img {
  clear: left;
  width: 100%;
  position: relative;
  margin-top: 10px;
  @keyframes slide1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes slide2 {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes slide3 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .slide0 {
    position: relative;
    width: 100%;
    height: auto;
  }

  .slide1 {
    width: 100%;
    animation-name: slide1; /*上で設定しているキーフレーム（keyframes）の名前*/
  }

  .slide2 {
    width: 100%;
    animation-name: slide2; /*上で設定しているキーフレーム（keyframes）の名前*/
  }

  .slide3 {
    width: 100%;
    animation-name: slide3; /*上で設定しているキーフレーム（keyframes）の名前*/
  }

  .slide1, .slide2, .slide3 {
    animation-duration: 15s; /*実行する時間。「s」は秒の事。*/
    animation-iteration-count: infinite; /*実行する回数。「infinite」は無限に繰り返す意味。*/
    position: absolute;
    left: 0;
    top: 0;
    animation-fill-mode: both;
    animation-delay: 1s;
  }
}

@media (max-width: 767px) {
  #main-img {
    margin: 0 0 20px 0;
  }
}
</style>
