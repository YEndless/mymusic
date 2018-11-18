<!--<template>-->
  <!--<div class="n-singer">-->
    <!--<h3 class="v-hd3">-->
      <!--<span class="f-fl">入驻歌手</span>-->
      <!--<a href="/discover/artist/signed/" class="more s-fc3">查看全部 &gt;</a>-->
    <!--</h3>-->
    <!--<ul class="n-enter f-cb" id="singer-list">-->
      <!--<li>-->
        <!--<a href="/user/home?id=29879272" class="itm f-tdn">-->
          <!--<div class="head"><img class="j-img" src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"></div>-->
          <!--<div class="ifo">-->
            <!--<h4><span class="nm f-fs1 f-ib f-thide">张惠妹aMEI</span></h4>-->
            <!--<p class="f-thide s-fc3">台湾歌手张惠妹</p>-->
          <!--</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a href="/user/home?id=100167517" class="itm f-tdn">-->
          <!--<div class="head"><img class="j-img" src="http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"></div>-->
          <!--<div class="ifo">-->
            <!--<h4><span class="nm f-fs1 f-ib f-thide">Fine乐团</span></h4>-->
            <!--<p class="f-thide s-fc3">独立音乐人</p>-->
          <!--</div>-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<div><a target="_blank" href="/recruit" hidefocus="true" class="u-btn2 u-btn2-1"><i>申请成为网易音乐人</i></a></div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "Singer"-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--li{-->
    <!--list-style:none;-->
    <!--line-height:50px;-->
    <!--font-weight: bold;-->
    <!--background-color: #e8e8e8;-->
  <!--}-->

  <!--.n-singer {-->
    <!--margin-top: 15px;-->
  <!--}-->
  <!--.v-hd3 {-->
    <!--position: relative;-->
    <!--*zoom: 1;-->
    <!--height: 23px;-->
    <!--margin: 0 20px;-->
    <!--border-bottom: 1px solid #ccc;-->
    <!--color: #333;-->
  <!--}-->
  <!--.f-fl {-->
    <!--float: left;-->
  <!--}-->
  <!--.v-hd3 .more {-->
    <!--float: right;-->
    <!--font-weight: normal;-->
  <!--}-->

  <!--.s-fc3, a.s-fc3:hover {-->
    <!--color: #666;-->
  <!--}-->
  <!--.n-enter {-->
    <!--margin: 6px 0 14px 20px;-->
  <!--}-->
  <!--.n-enter li {-->
    <!--margin-top: 14px;-->
  <!--}-->
  <!--.itm {-->
    <!--float: left;-->
    <!--width: 210px;-->
    <!--height: 62px;-->
    <!--background: #fafafa;-->
  <!--}-->
  <!--.f-tdn, .f-tdn:hover {-->
    <!--text-decoration: none;-->
  <!--}-->
  <!--.u-btn2 {-->
     <!--margin-left: 20px;-->
     <!--border-radius: 4px;-->
   <!--}-->
  <!--.u-btn2-1 {-->
    <!--color: #333;-->
    <!--background-position: right -100px;-->
  <!--}-->
  <!--.u-btn2, .u-btn2:hover {-->
    <!--text-decoration: none;-->
  <!--}-->

  <!--.u-btn2 {-->
    <!--padding: 0 5px 0 0;-->
    <!--white-space: nowrap;-->
  <!--}-->
<!--</style>-->
<template>
  <div class="recommended-authors">

    <h4 class="v-hd3">
      <span class="f-fl">入驻歌手</span>
      <a href="/discover/artist/signed/" class="more s-fc3">查看全部 &gt;</a>
    </h4>
    <div>
      <br/>
      <b-media v-for="hotUser in hotUsers" :key="hotUser.userId" class="author-box">
        <router-link :to="'/u/'+hotUser.userId">
          <img :src="hotUser.avatar" class="avatar"/>
        </router-link>
        <div class="author-info">
          <h6>张惠妹</h6>
          <!--<span>写了{{hotUser.wordsCount}}个字</span>-->
          <span>台湾歌手张惠妹</span>
        </div>
      </b-media>
      <a href="/users" target="_blank" class="find-more">
        申请成为网易音乐人
      </a>
    </div>

  </div>
</template>
<script>
export default {
data() {
return {
hotUsers: [
{
"userId": 1,
"nickName": "夜未央", "avatar":"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",
"description":"学习" ,
"likeCount":111,
"wordsCount":222
},
{
"userId": 2,
"nickName": "读书",
"avatar": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
"description":"学习" ,
"likeCount":111,
"wordsCount":222
},
{
"userId": 3,
"nickName": "读书",
"avatar": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
"description":"习学习" ,
"likeCount":111,
"wordsCount":222
}
]
}
}
}
</script>
<!--<script>-->
  <!--export default {-->
    <!--name: "Authors",-->
    <!--data() {-->
      <!--return {-->
        <!--hotUsers: []-->
      <!--}-->
    <!--},-->
    <!--created() {-->
      <!--var that = this-->
      <!--this.$http-->
        <!--.get('http://localhost:8080/user/hot')-->
        <!--.then(function (response) {-->
          <!--// alert(JSON.stringify(response.data.data));-->
          <!--that.hotUsers = response.data.data;-->
        <!--})-->
    <!--}-->
  <!--}-->
<!--</script>-->

<style scoped>
  .hh{
    white-space: nowrap;
  }
  .recommended-authors {
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
  }

.title {
    text-align: left;
    margin-left: 20px;
  }

  .change-page {
    /*float: right;*/
    /*margin-right: 70px;*/
    /*display: inline-block;*/
    /*font-size: 14px;*/
    color: #969696;
  }

  .author-box {
    clear: both;
    margin-bottom: 10px;
    padding-left: 10px;
  }

  .author-info {
    margin-left: 60px;
    font-size: 11px;
    text-align: left;
    color: #999;
    margin-bottom: 10px;
    padding-right: 20px;
  }

  .author-info h6 {
    font-size: 12px;
    color: #111;
  }

  .avatar {
    float: left;
    border-radius: 20px;
    height: 62px;
    width: 62px;
  }

  .find-more {
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;

  }
  .v-hd3 {
    position: relative;
    height: 23px;
    color: rgb(51, 51, 51);
    margin: 0px 20px;
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  .f-fl {
    float: left;
  }
  .more {
    float: right;
    font-weight: normal;
  }
.s-fc3, a.s-fc3:hover {
color: rgb(102, 102, 102);
}
</style>
