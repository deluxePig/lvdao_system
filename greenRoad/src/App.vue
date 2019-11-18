<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="less">
  html,body{
    width:100%;
    height:100%;
      overflow: auto;
  }
  body{
    font:12px "microsoftyahei",Arial,Helvertica,sans-serif;
    color:#666;
    margin:0;
    padding:0;

  }
  ul,ol,p,h1,h2,h3,h4,h5,h6,dl,dt,dd{
    margin:0;
    padding:0;
    list-style:none;
  }
  input{
    border:none;
  }
  a{
    color:#666;
    text-decoration:none;
  }
  a:hover{
    color:#ff0700;
    text-decoration:none;
  }
  .lf{
    float:left;
  }
  .rt{
    float:right;
  }
  .clear{
    clear:both;
  }
  *{
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}


  ::-webkit-scrollbar{/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
      width: 10px;
      height: 1px;
  }
  ::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
      /* background: #333;
       color:#fff;*/
  }
  ::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
      background: rgba(255, 255, 255, 0.1);
  }
  ::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
      background: rgba(255, 255, 255, 0.1);
  }
  ::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
      background:#ccc;
      border-radius:4px;
  }
  ::-webkit-scrollbar-corner {/*边角（位置6）*/
      background:#ccc;
  }



</style>
<script>
    import $public from "@/utils/public";//引入公共方法

    export default {
        name: 'App',
        components: {

        },
        data (){
            return{
            }
        },
        computed:{
        },
        created:function(){

        },
        mounted(){
            setRem()
        },
        methods:{

        },
    }
  window.onresize=function(){
    setRem()
  };
  function setRem(){
    var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    if(wW <1066){
      wW=1066
    }
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    localStorage.setItem('_width', wW);
  }





</script>
