<template>
<b-row>
  <b-col cols="9">
    <div class="g-wrap">
      <div class="v-hd2">
        <b-img class="yuan"src="../../static/img/yuan.png"/>
        <a href="/discover/playlist/" class="tit">热门推荐</a>
        <div class="tab">
          <a href="/discover/playlist/" class="s-fc3">华语</a>
          <span class="line">|</span>
          <a href="/discover/playlist/" class="s-fc3">流行</a>
          <span class="line">|</span>
          <a href="/discover/playlist/" class="s-fc3">摇滚</a>
          <span class="line">|</span>
          <a href="/discover/playlist/" class="s-fc3">民谣</a>
          <span class="line">|</span>
          <a href="/discover/playlist/" class="s-fc3">电子</a>
        </div>

        <span class="more"><a href="/discover/playlist/" class="s-fc3">
          更多</a>
          <b-img class="cor" src="../../static/img/jiantou.png"/>
        </span>
      </div>

      <v-hot-playlist></v-hot-playlist>

      <div class="v-hd2">
        <b-img class="yuan"src="../../static/img/yuan.png"/>
        <a href="/discover/playlist/" class="tit">新碟上架</a>

        <span class="more"><a href="/discover/playlist/" class="s-fc3">
          更多</a>
          <b-img class="cor" src="../../static/img/jiantou.png"/>
        </span>
      </div>
      <v-album></v-album>
      <div class="v-hd2 ">
        <b-img class="yuan"src="../../static/img/yuan.png"/>
        <a href="/discover/playlist/" class="tit">榜单</a>
        <span class="more"><a href="/discover/playlist/" class="s-fc3">
          更多</a>
          <b-img class="cor" src="../../static/img/jiantou.png"/>
        </span>
      </div>
      <v-hot-toplist></v-hot-toplist>
    </div>
  </b-col>
  <b-col>
    <!--<div class="g-sd1 center1">-->
      <!--<div class="n-myinfo s-bg s-bg-1">-->
        <!--<p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>-->
        <!--<a class="bt"type="button"><em>用户登录</em></a>-->
      <!--</div>-->
    <!--</div>-->
    <div class="g-sd1 center1">
      <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a id="enter" href="#" onclick="top.login();return false;" class="bt" type="button"><em>用户登录</em></a>
    </div>
    <v-singer></v-singer>
  </b-col>
</b-row>
</template>

<script>
  import vHotPlaylist from './HotPlaylist.vue'
  import vAlbum from './HotAlbum.vue'
  import vHotToplist from './HotToplist.vue'
  import vSinger from './Singer.vue'
  export default {
        name: "DiscoverDown",
      components:{
          vHotPlaylist,
        vAlbum,
        vHotToplist,
        vSinger
      },
    }
</script>

<style scoped>
  .g-wrap{
    padding: 20px 20px 40px;
  }
  .g-sd1 {
    position: relative;
    /*float: right;*/
    width: 250px;
    /*zoom: 1;*/
    padding:10px 10px 10px 10px;
  }
  em {
    display: inline-block;/*去下滑*/
    font-style: normal;
    text-align: center;
    color: white;
  }
  .bt{
    width: 190px;
    height: 40px;
    background: #c20c0c;
    color: white;
    padding-top: 8px;
  }
  .center1{
    text-align: center;
    width: 300px;
    height: 200px;
  }
  .note {
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }

  .tit {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    float: left;
    font-size: 30px;
    font-weight: normal;
    line-height: 28px;
    text-decoration: none;
  }
  .tab {
    float: left;
    margin: 7px 0 0 20px;
  }
  .v-hd2 {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
  }
  .v-hd2 .tab .line {
    margin: 0 10px;
    color: #ccc;
  }
  .s-fc3{
    color: #666;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .more {
    float: right;
    margin-top: 9px;
  }
  .cor{
    display: inline-block;
    width: 20px;
    height: 28px;
    margin-left: 4px;
    vertical-align: middle;
  }
  .yuan{
    width: 25px;
    height: 25px;
    float: left;
  }
</style>
