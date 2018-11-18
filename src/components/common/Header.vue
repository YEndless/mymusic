<template>
  <b-navbar toggleable="md" type="light" variant="default" fixed class="m-top">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/" class="bac">
     <b-img rounded="circle" width="36" height="35" src="../../static/img/cloudmusic.jpg"/>
      网易云音乐
    </router-link>

    <b-collapse is-nav id="nav_collapse .m-nav">
      <b-navbar-nav>
        <b-nav-item class = "bac">
          <router-link to="/">发现音乐</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/my">我的音乐</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/friend">朋友</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/store">商城</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/musician">音乐人</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/download">下载客户端</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-nav-form>
        <b-form-input class="mr-sm-2 search-input" type="text" placeholder="音乐/视频/电台/用户"/>
      </b-nav-form>
    </b-collapse>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="user===null">
        <router-link to="/sign_in">登录</router-link>
      </b-nav-item>
      <b-nav-item-dropdown right v-if="user===null">
        <b-dropdown-item>
          <router-link to="/setting">
            设置
          </router-link>
        </b-dropdown-item>
        <template slot="button-content">
          <b-img rounded="circle" width="35" height="35" src="../../static/img/yuan.png"/>
        </template>
        <b-dropdown-item @click="logout">
          退出
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
        name: "Header",
    data() {
      return {
        user: JSON.parse(localStorage.getItem('0'))
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);
      }
    },
  }
</script>

<style scoped>
  .m-top {
    position: relative;
    z-index: 1000;
    /*height: 70px;*/
    box-sizing: border-box;
    background: #242424;
    border-bottom: 3px solid #C20C0C;
    /*#C20C0C*/
  }
  .search-input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
  }
  /*ul{!*设置导航栏的框框*!*/
    /*margin: 30px auto;!*框框整体的位置，30px是指离网页的顶部和下部的距离，auto控制的是左右距离为自动调节*!*/
    /*width: 600px;!*框框的宽度*!*/
    /*height: 350px;!*框框的长度*!*/
    /*padding: 0px;!*将框框的padding设置为零，不然会导致框框里的内容与框边缘有间隔*!*/
    /*border:1px solid #000;!*添加边框*!*/
  /*}*/
  /*li{*/
    /*list-style-type: none;!* 去掉li前的点 *!*/
    /*float: left;!*将li设置成做浮动，变为联动*!*/
  /*}*/
  a{
    display: block;/*将a变成块状*/
    font-family: Microsoft Yahei;
    line-height: 1px;/*设置字体在块中的高度*/
    /*margin: 0px 0px;!*块里的高宽通过margin设置*!*/
    color: #fdfdfd;
    text-align: center;/*字体居中*/
    text-decoration: none;/*去掉下划线*/
    font-size: 15px;
  }
  a:hover{
    background-color: black;
  }
</style>
