<template>
  <footer class="deneb_footer">
    <div class="widget_wrapper" style="background-image: url(../../public/images/footer_bg.png);">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="widget widegt_about">
              <div class="widget_title">
                <img src="../../public/images/logo_1.png" class="img-fluid" alt="">
              </div>
              <p>REイニシアチブ株式会社は太陽光発電、産業用蓄電池システム、<br>風力発電サービスを提供し、再生エネルギーに貢献する会社です。</p>
              <ul class="social">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="widget widget_link">
              <div class="widget_title">
                <h4>リンク</h4>
              </div>
              <ul>
                <li><a href="#">会社概要</a></li>
                <li><a href="#">事業内容</a></li>
                <li><a href="#">アクセス</a></li>
                <li><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="widget widget_contact">
              <div class="widget_title">
                <h4>お問い合わせ</h4>
              </div>
              <div class="contact_info">
                <div class="single_info">
                  <div class="icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="info">
                    <p><a href="tel:03-6402-3341">本社　TEL. 03-6402-3341</a></p>
                    <p><a href="tel:03-6402-3341">東京Office　TEL. 03-6402-3341</a></p>
                  </div>
                </div>
                <div class="single_info">
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="info">
                    <p><a href="mailto:info@e100.info">E-mail: info@re100.info</a></p>
                  </div>
                </div>
                <div class="single_info">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="info">
                    〒105-0022　本社<p><span>東京都港区海岸1-１-１</span></p><br>
                    〒105-0013　東京Office<p><span>東京都港区浜松町2-5-3</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright_text">
              <p>Copyright &copy;
                  {{(new Date().getFullYear())}}
                <span>RE Initiative Co., Ltd</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
