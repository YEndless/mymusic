<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <div class="block">
      <span class="demonstration">显示默认颜色</span>
      <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    </span>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">hover 显示颜色</span>
      <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
    </span>
    </div>

    <ul class="readtop">
      <li class="top1">图书畅销榜</li>
      <li class="top">
        <span class="prompt1"><strong>1</strong></span>&nbsp;&nbsp;<a title="当我足够好，才会遇见你">当我足够好，才会遇见你</a>
      </li>
      <li class="top" ><span class="prompt1"><strong>2</strong></span>&nbsp;&nbsp;<a title="皮囊">皮囊</a></li>
      <li class="top"><span class="prompt1"><strong>3</strong></span>&nbsp;&nbsp;<a title="当我足够好，才会遇见你">李光耀论中国与世界</a></li>
      <li class="top"><span class="prompt"><strong>4</strong></span>&nbsp;&nbsp; <a title="乖，摸摸头">乖，摸摸头</a></li>
      <li class="top" ><span class="prompt"><strong>5</strong></span>&nbsp;&nbsp;<a title="男女内参">男女内参</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Use Vue 2.0 Today!'
      }
    },

    methods: {
      startHacking () {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      }
    }
  }
</script>

<style>
  .readtop{width: 270px;}
  .prompt1{border:1px solid #db3340;font-weight:400 ; padding-left:5px; padding-right: 5px; cursor: hand; color: #db3340;}
  .prompt{border:1px solid #ccc; padding-left: 5px;padding-right: 5px;}
  li{list-style:none;
    padding:5px 5px 5px 5px ;line-height:50px; font-weight: bold;}
  .top1{font-weight:700;}
  .top{border-top:1px dashed #ccc;}
  a:hover{color:#db3340;}
  a{cursor:pointer;}
</style>
