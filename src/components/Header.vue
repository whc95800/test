<template>
  <div class="nav-body">
    <div class="nav">
      <div class="nav-bar">
        <div class="nav-left">
          <img id="logo" alt="" src="../assets/images/logo.png"/>
        </div>
        <div class="nav-mid">
          <ul class="main-menu">
            <li class="main-item" v-for="(item1,index1) in navList" :key="index1">
              <router-link class="main-link" :to="`${item1.link}`">
                {{ item1.mainMenu }}
              </router-link>
              <ul class="sub-menu">
                <li class="sub-item" v-for="(item2,index2) in subList" :key="index2" v-show="item2.mainMenu === item1.mainMenu">
                  <router-link class="sub-link" :to="`${item2.link}`">
                    {{ item2.subMenu }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="nav-right-block" @click="menuClick()">
          <span :class="middleLine"></span>
        </div>
      </div>
    </div>
    <transition name="top-bar-transition">
      <div v-show="topBarIsShow" class="top-bar-bg" @click="menuClick()">
        <div class="top-bar-box">
          <div v-for="(item,index) in navList" :key="index" class="link-box"
               @click="this.$router.push({path:`/${item.link}`})">
            <a>{{ item.mainMenu }}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Header",
  setup() {
    const middleLine = ref("middle-line-close")
    const topBarIsShow = ref(false)
    const navList = [
      {mainMenu: "ホーム", link: "/"},
      {mainMenu: "住宅物件", link: "Housing"},
      {mainMenu: "店舗物件", link: "Store"},
      {mainMenu: "会社概要", link: "About"},
      {mainMenu: "アクセス", link: "Access"},
      {mainMenu: "お問い合わせ", link: "Contact"},
    ]

    const subList = [
      {mainMenu: "住宅物件", subMenu: "自社物件", link: "Contact"},
      {mainMenu: "住宅物件", subMenu: "他社物件", link: "Contact"},
      {mainMenu: "会社概要", subMenu: "会社構成", link: "Contact"},
      {mainMenu: "会社概要", subMenu: "メンバー", link: "Contact"},
    ]

    function menuClick() {
      if (middleLine.value === "middle-line-close") {
        middleLine.value = "middle-line-close open"
      } else middleLine.value = "middle-line-close"
      topBarIsShow.value = !topBarIsShow.value
    }


    return {middleLine, topBarIsShow, navList, subList, menuClick,}
  }
}
</script>

<style lang="less" scoped>
.nav-body {
  width: 100%;
  z-index: 1;

  .nav {
    box-shadow: 0 1px 0 0 rgba(0, 11, 38, 0.12);
    display: flex;
    justify-content: center;
    background: white;

    .nav-bar {
      width: 1200px;
      height: 72px;
      padding: 0 24px;
      display: flex;

      .nav-left {
        width: 25%;
        display: flex;
        align-items: center;

        #logo {
          height: 38px;
        }
      }

      .nav-mid {
        width: 75%;
        height: 72px;

        .main-menu {
          display: flex;
          list-style: none;

          .main-item {
            display: flex;
            align-items: center;
            height: 72px;
            list-style: none;
            margin: 0 10px;
            white-space: nowrap;

            &:hover .sub-menu {
              height: auto;
            }


            .main-link {
              display: block;
              width: 100%;
              height: 40px;
              padding: 5px 12px;
              font-size: 14px;
              font-weight: 550;
              line-height: 40px;
              text-decoration: none;
              color: #151919;
              overflow: hidden;
              border-radius: 8px;
            }

            .main-link:hover {
              background-color: rgb(235, 154, 1);
              box-shadow: 2.5px 4.33px 15px 0 rgb(235, 154, 1, 0.4);
            }

            .sub-menu {
              height: 0;
              position: absolute;
              top: 62px;
              background-color: white;
              border-radius: 8px;
              overflow: hidden;

              .sub-item {
                height: 40px;
                margin: 5px;
                list-style: none;

                .sub-link {
                  display: block;
                  height: 40px;
                  padding: 0 12px;
                  font-size: 14px;
                  font-weight: 550;
                  line-height: 40px;
                  text-decoration: none;
                  color: #151919;
                  white-space: nowrap;
                  border-radius: 8px;
                }

                .sub-link:hover {
                  background-color: rgb(235, 154, 1);
                }
              }
            }
          }
        }

        .main-menu:hover {
          color: #ffffff;
        }
      }

      .nav-right-block {
        display: none;
        position: relative;
        width: 30px;
        height: 30px;
        z-index: 100;
        top: 13px;

        .middle-line-close {
          display: block;
          width: 25px;
          height: 3px;
          top: 14px;
          border-radius: 3px;
          background-color: #151919;
          position: relative;
          transition: all 0.5s ease;
          margin: auto;

          &::before { //前一条线
            content: "";
            position: absolute;
            width: 25px;
            height: 3px;
            bottom: 9px;
            border-radius: 3px;
            background-color: #151919;
            transition: all 0.5s ease;
          }

          &::after { //后一条线
            content: "";
            position: absolute;
            width: 25px;
            height: 3px;
            top: 9px;
            border-radius: 3px;
            background-color: #151919;
            transition: all 0.5s ease;
          }
        }

        .open {
          background-color: transparent; //中间的线变透明

          &::before {
            background-color: #d6d6d7;
            transform: translateY(9px) rotate(-45deg); //上方的线向下移动9并且逆时针旋转45°
            transition: all 0.5s ease;
          }

          &::after {
            background-color: #d6d6d7;
            transform: translateY(-9px) rotate(45deg); //下方的线向上移动9并且顺时针旋转45°
            transition: all 0.5s ease;
          }
        }
      }
    }
  }

  .top-bar-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 53, 53, 0.9);
    user-select: none;
    z-index: 10;

    .top-bar-box {
      margin-top: 56px;
      color: rgba(214, 214, 215, 1);
      font-size: 60px;
      text-align: center;

      .link-box {
        font-size: 14px;
        height: 80px;
        width: 60%;
        line-height: 80px;
        margin: auto;
        text-align: center;
        box-shadow: 0 1px 0 0 #ffff;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
      }

      .link-box:hover {
        color: white;
        transition: all 0.5s ease;
      }
    }
  }
}

.top-bar-transition {
  &-enter-from {
    transform: translateY(-100%); //整体划入之前隐藏在最上侧
  }

  &-enter-active {
    transition: all 0.4s ease; //划入过渡，用 0.5s
  }

  &-leave-to {
    transform: translateY(-100%); //整体划出之后隐藏在最上侧
  }

  &-leave-active {
    transition: all 0.4s ease-in; //划出过渡，用 0.5s
  }
}

@media (max-width: 767px) {
  .nav-body {
    .nav {
      .nav-bar {
        height: 56px;

        .nav-left {
          #logo {
            height: 30px;
          }
        }

        .nav-mid {
          display: none;
          height: 56px;

          .main-menu {
            .main-item {
              margin: 0 0 0 5px;
              height: 56px;
              line-height: 56px;

              .main-link {
                height: 30px;
                line-height: 30px;
              }

              .sub-menu {
                top: 48px;
              }
            }
          }
        }

        .nav-right-block {
          display: block;
        }
      }
    }
  }
}

@media (max-width: 870px) {
  .nav-body {
    .nav {
      .nav-bar {
        display: flex;
        justify-content: space-between;

        .nav-left{
          width: auto;
        }

        .nav-mid {
          top: 0;

            .main-menu {
              justify-content: right;
              .main-item {
                margin: 0 0 0 10px;
              }
            }
          }
      }
    }
  }
}
</style>
