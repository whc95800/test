<template>
  <div id="header">
    <img id="logo" alt="" src="../../images/logo.png"/>
    <div class="tel-body">
      <p class="tel">TEL:03-5809-3297<span>受付：10:00〜19:00　定休日：土、日曜日</span></p>
    </div>
    <div class="header-right-menu" @click="menuClick()">
      <span :class="middleLine"></span>
    </div>
    <transition name="hidde-menu-transition">
      <div v-show="topBarIsShow" class="hidde-menu" @click="menuClick()">
        <ul class="hidde-menu-main">
          <li v-for="(item1,index1) in navList" :key="index1" class="hidde-menu-item">
            <router-link :to="`${item1.link}`" class="menu-item-link">
              {{ item1.mainMenu }}<br/>
              <span>{{ item1.enMainMenu }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <nav id="menubar">
    <ul>
      <li v-for="(item,index) in navList" :key="index" @click="hiddenBanner(index)">
        <router-link :to="`${item.link}`">{{ item.mainMenu }}<span>{{ item.enMainMenu }}</span></router-link>
      </li>
    </ul>
  </nav>
  <Banner v-show="showBanner"/>
</template>

<script>
import {ref} from "vue";
import Banner from "../components/Banner";

export default {
  name: "Header",
  components: {Banner},
  setup() {
    const middleLine = ref("middle-line-close")
    const topBarIsShow = ref(false)
    const showBanner = ref(true)
    const navList = [
      {mainMenu: "ホーム", enMainMenu: "HOME", link: "/"},
      {mainMenu: "自社物件", enMainMenu: "JISHABUKEN", link: "/Item"},
      {mainMenu: "物件管理", enMainMenu: "BUKENKANRI", link: "/Management"},
      {mainMenu: "会社概要", enMainMenu: "ABOUT", link: "/About"},
      {mainMenu: "アクセス", enMainMenu: "ACCESS", link: "/Access"},
      {mainMenu: "お問い合わせ", enMainMenu: "CONTACT", link: "/Contact"},
    ]

    function menuClick() {
      if (middleLine.value === "middle-line-close") {
        middleLine.value = "middle-line-close open"
      } else middleLine.value = "middle-line-close"
      topBarIsShow.value = !topBarIsShow.value
    }

    function hiddenBanner(i){
      showBanner.value = i === 0;
    }


    return {middleLine, topBarIsShow, navList, showBanner, menuClick,hiddenBanner}
  }
}
</script>

<style>

</style>
