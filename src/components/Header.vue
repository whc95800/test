<template>
  <header class="header_area header_v1 transparent_header">
    <div class="container">
      <div class="site_menu">
        <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="brand">
              <a href="/" class="logo"><img src="../../public/images/logo_1.png" class="img-fluid" alt=""></a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="primary_menu" id="menu">
              <nav class="main_menu">
                <ul>
                  <li class="menu-item active_link"><a href="/">ホーム</a></li>
                  <li class="menu-item"><a href="/About">会社概要</a>
                    <!--
      <ul class="sub-menu">
        <li class="menu-item"><a href="#">代理店</a></li>
        <li class="menu-item"><a href="#">工事業者</a></li>
        <li class="menu-item"><a href="#">企業情報</a></li>
      </ul>
     -->
                  </li>
                  <li class="menu-item"><a href="/Service">事業内容</a>
                    <ul class="sub-menu">
                      <li class="menu-item"><a href="#">産業用蓄電池</a></li>
                      <li class="menu-item"><a href="#">風力発電</a></li>
                      <li class="menu-item"><a href="#">太陽光発電</a></li>
                    </ul>
                  </li>
                  <li class="menu-item"><a href="/Access">アクセス</a></li>
                  <li class="menu-item"><a href="/Contact">お問い合わせ</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile_wrapper">
        <div class="mobile_header">
          <div class="row align-items-center">
            <div class="col-6">
              <div class="brand_logo">
                <a href="#"><img src="../../public/images/logo_1.png" class="img-fluid" alt=""></a>
              </div>
            </div>
            <div class="col-6">
              <div class="menu_button">
                <div class="menu_icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidenav_menu">
          <div class="close_icon">
            <a href="#" class="close_btn"><i class="fas fa-times"></i></a>
          </div>
          <ul class="sidebar-menu">
            <li class="menu-item"><a href="/">ホーム</a></li>
            <li class="menu-item"><a href="/About">会社概要</a>
              <!--
                          <ul class="sub-menu">
                              <li class="menu-item"><a href="#">代理店</a></li>
                              <li class="menu-item"><a href="#">工事業者</a></li>
                              <li class="menu-item"><a href="#">企業情報</a></li>
                          </ul>
     -->
            </li>
            <li class="menu-item"><a href="/Service">事業内容</a>
              <ul class="sub-menu">
                <li class="menu-item"><a href="#">産業用蓄電池</a></li>
                <li class="menu-item"><a href="#">風力発電</a></li>
                <li class="menu-item"><a href="#">太陽光発電</a></li>
              </ul>
            </li>
            <li class="menu-item"><a href="/Access">アクセス</a></li>
            <li class="menu-item"><a href="/Contact">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>

</style>
