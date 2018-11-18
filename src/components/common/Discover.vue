<template>
  <div id="g_nav2" class="m-subnav j-tflag">
    <div class="wrap f-pr">
      <ul class="nav">
        <li><a hidefocus="true" data-module="discover" href="/discover" class="z-slt"><em>推荐</em></a></li>
        <li><a class="z-slt" hidefocus="true" href="/discover/toplist"><em>排行榜</em></a></li>
        <li><a class="z-slt" hidefocus="true" href="/discover/playlist"><em>歌单</em></a></li>
        <li><a class="z-slt" hidefocus="true" href="/discover/dj"><em>主播电台</em></a></li>
        <li><a class="z-slt" hidefocus="true" href="/discover/artist"><em>歌手</em></a></li>
        <li><a class="z-slt" hidefocus="true" href="/discover/album"><em>新碟上架</em></a></li>
      </ul>
    </div>
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1500"
                    img-height="500"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                    class="box">
          <!-- Slides with image only -->
          <b-carousel-slide v-for="image in imageList" :key="image.id"
                            :img-src="image.url" class="img1">
          </b-carousel-slide>
        </b-carousel>
    <div>
      <h4 id="name">李玉刚</h4>
      <br>
      <audio id="audio" src="../../static/video/kll.mp3" controls autoplay="true"></audio><br/>
    </div>
    <br><br>
    <div>
      <button id="btn-play" >播放</button>
      <button id="btn-stop" >暂停</button>
      <button id="btn-pre" >上一首</button>
      <button id="btn-next" >下一首</button>
    </div>

      <div id="skPlayer"></div>
    <v-down></v-down>
      </div>
      </template>

  <script>
      import vDown from './DiscoverDown.vue'
      import 'vue-swipe/dist/vue-swipe.css';
      import 'skplayer/dist/skPlayer.min.js';
      export default {
        components:{
          vDown
        } ,
        data() {
          return {
            slide: 0,
            sliding: null,
            imageList: [
              {
            "id": 1,
            "url": "http://p1.music.126.net/1LU50zkh1WKKWl-TFrARIg==/109951163650444210.jpg",
          },
          {
            "id": 2,
            "url": "http://p1.music.126.net/zsEcSxRUL_Zr9AMsTZlFLg==/109951163647947879.jpg",
          },
          {
            "id": 3,
            "url": "http://p1.music.126.net/3cyDU_KT01Lni9PY8kouYw==/109951163649404185.jpg",
          },
          {
            "id": 4,
            "url": "http://p1.music.126.net/bX9tAky7kQKHeakZQGdlIA==/109951163649400672.jpg",
          },
          {
            "id": 5,
            "url": "http://p1.music.126.net/0bdUltjuzqZMDVshD0-k3Q==/109951163649499307.jpg",
          }
        ]
      }

    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
      // var player = new skPlayer({
      //   autoplay: true,
      //   //可选项,自动播放,默认为false,true/false
      //   listshow: true,
      //   //可选项,列表显示,默认为true,true/false
      //   mode: 'listloop',
      //   //可选项,循环模式,默认为'listloop'
      //   //'listloop',列表循环
      //   //'singleloop',单曲循环
      //   music: {
      //     //必需项,音乐配置
      //     type: 'cloud',
      //     //必需项,网易云方式指定填'cloud'
      //     source: 317921676
      //     //必需项,网易云音乐歌单id
      //     //登录网易云网页版,在网页地址中拿到
      //     // ... playlist?id=317921676
      //   }
      // });
</script>

<style scoped>
  .m-subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    width: 1300px;
  }

  .wrap {
    height: 34px;
    margin: 0 auto;
  }
  .f-pr {
    position: relative;
    zoom: 1;
  }
  .nav {
    float: left;
    padding-left: 180px;
  }
.z-slt {
    color: #fff;
    text-decoration: none;
  }
 ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    float: left;
    text-align: center;
    color: #fff;
  }
  a:hover{
    background: #9b0909;
    padding: 0 0 5px 0;
    border-radius: 40px;
  }
  em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-style: normal;
    text-align: center;
  }
  .box{
      /*height: 100%;//如高度等于网页高度*/
    overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    text-align: right;
    margin:0 auto;
    margin-left:auto; margin-right:auto;
    width: 1300px;
  }
</style>

