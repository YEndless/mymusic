import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false
/**
 *
 */
export default new Router({
  mode: "history",
  routes: [
    {
      //主页
      path: '/',
      redirect: '/discover',
      component:resolve => require(['../components/common/Home.vue'],resolve),
      meta:{
        title : '主页'
      },
      children:[
        {
          path:'/discover',
          component:resolve => require(['../components/common/Discover.vue'],resolve),
          meta:{
            title:'发现音乐'
          }
        },
        {
          path:'/my',
          component:resolve => require(['../components/common/my.vue'],resolve),
          meta:{
            title:'我的音乐'
          }
        },
        {
          path:'/friend',
          component:resolve => require(['../components/common/Friend.vue'],resolve),
          meta:{
            title:'朋友'
          }
        },
        {
          path:'/store',
          component:resolve => require(['../components/common/Store.vue'],resolve),
          meta:{
            title:'发现音乐'
          }
        },
        {
          path:'/musician',
          component:resolve => require(['../components/common/Musician.vue'],resolve),
          meta:{
            title:'音乐人'
          }
        },
        {
          path:'/download',
          component:resolve => require(['../components/common/Download.vue'],resolve),
          meta:{
            title:'下载'
          }
        },

        {
          path:'/discover/toplist',
          component:resolve => require(['../components/nav/toplist.vue'],resolve),
          meta:{
            title:'排行榜'
          }
        },
      ]
    }
    ,{
      path:'/discover/playlist',
      component:resolve => require(['../components/nav/playlist.vue'],resolve),
      meta:{
        title:'歌曲'
      }
    }
    ,{
      path:'/discover/d',
      component:resolve => require(['../components/nav/djradio.vue'],resolve),
      meta:{
        title:'歌曲'
      }
    }
    ,{
      path:'/discover/dj',
      component:resolve => require(['../components/Home.vue'],resolve),
      meta:{
        title:'歌曲'
      }
    }
  ]
})
