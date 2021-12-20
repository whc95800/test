<template>
  <Banner/>
  <div id="contents">
    <div id="contents-in">
      <router-view/>
      <!--/#main-->

      <div id="sub">
        <nav class="box1">
          <h2>不動産売買のQ&A</h2>
          <ul class="submenu">
            <li><a href="#">メニューサンプル</a></li>
            <li><a href="#">メニューサンプル</a></li>
            <li><a href="#">メニューサンプル</a></li>
            <li><a href="#">メニューサンプル</a></li>
            <li><a href="#">メニューサンプル</a></li>
          </ul>
        </nav>
        <nav class="box1">
          <h2>賃貸物件の検索</h2>
          <a href="https://suumo.jp/chintai/kanto/" target="_blank"><img alt="" src="../../images/suumo-logo.jpg"></a>
          <a href="https://www.athome.co.jp/chintai/" target="_blank"><img alt=""
                                                                           src="../../images/athome-logo.jpg"></a>
        </nav>
      </div>
      <!--/#sub-->
    </div>
    <!--/#contents-in-->

    <div id="side">
      <section class="box">

        <h2>おすすめ物件情報</h2>

        <div class="list">
          <a href="item.html">
            <figure><img alt="" src="../../images/sample1.jpg"></figure>
            <h4>物件タイトル<span class="newicon">NEW</span></h4>
            <p>所在地：東京都XXXX<br>
              価格：XXXXX円</p>
          </a>
        </div>

        <div class="list">
          <a href="item.html">
            <figure><img alt="" src="../../images/sample1.jpg"></figure>
            <h4>物件タイトル</h4>
            <p>所在地：東京都XXXX<br>
              価格：XXXXX円</p>
          </a>
        </div>

        <div class="list">
          <a href="item.html">
            <figure><img alt="" src="../../images/sample1.jpg"></figure>
            <h4>物件タイトル</h4>
            <p>所在地：東京都XXXX<br>
              価格：XXXXX円</p>
          </a>
        </div>

        <div class="list option2">
          <a href="item.html">
            <figure><img alt="" src="../../images/sample1.jpg"></figure>
            <h4>物件タイトル</h4>
            <p>所在地：東京都XXXX<br>
              価格：XXXXX円</p>
            <span class="option2">ご契約済</span>
          </a>
        </div>

        <div class="list option2">
          <a href="item.html">
            <figure><img alt="" src="../../images/sample1.jpg"></figure>
            <h4>物件タイトル</h4>
            <p>所在地：東京都XXXX<br>
              価格：XXXXX円</p>
            <span class="option2">ご契約済</span>
          </a>
        </div>

      </section>
      <div class="box1 sh">
        <h2>アクセス</h2>
        <p>東京都XX区XXXXビル３F<br>
          TEL：03-0000-0000<br>
          受付：9:00～16:00<br>
          定休日：土日祝</p>
      </div>
      <p>
        <router-link to="Recruit"><img alt="採用情報" class="pc" src="../../images/banner1.jpg"></router-link>
        <router-link to="Recruit"><img alt="採用情報" class="sh" src="../../images/banner1_sh.jpg"></router-link>
        だれかの住まいを支える仕事を、 一生の仕事にしませんか。
      </p>
    </div>
    <!--/#side-->
  </div>
</template>

<script>
import Banner from "../components/Banner";

export default {
  name: "Base",
  components: {Banner},
}
</script>

<style>

</style>
