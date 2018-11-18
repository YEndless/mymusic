<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_914065_21gymg8809n.eot?t=1542097356372'); /* IE9*/
    src: url('//at.alicdn.com/t/font_914065_21gymg8809n.eot?t=1542097356372#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('//at.alicdn.com/t/font_914065_21gymg8809n.ttf?t=1542097356372') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_914065_21gymg8809n.svg?t=1542097356372#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-shoucangjia:before { content: "\e696"; }

  .icon-bofang:before { content: "\e65f"; }

  .icon-jia:before { content: "\e632"; }

  .icon-erji:before { content: "\e65a"; }
</style>
