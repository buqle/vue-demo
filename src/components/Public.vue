<template>
<div class="public">

  <!--v-bind绑定-->
  <!--v-bind绑定格式还可以为数组形式 计算属性必须放在前面-->
  <div style="width: 100px;height: 100px;" v-bind:style="[styles,moreStyles]"></div>
  <!--简单的添加不同的class 数组语法允许添加表达式-->
  <!--<div v-for="shape in shapes" class="shape" v-bind:class="[shape.shape]"></div>-->
  <!--添加多个类名-->
  <div v-for="shape2 in shapes" class="shape" v-bind:class="[shape2.shape,shape2.direction?shape2.direction:'']"></div>
  <p v-once>{{word}}</p> <!--once 一次性事件-->
  <button @click="word='BYE'">点击{{word}}</button>
  <p v-html="html"></p> <!-- v-html解析html格式 -->
  <!-- v-bind语法糖简写 : -->

  <div>
    <p>{{counts.total<0?'+':'-'}}  {{counts.total+1}}</p>
    <h6>
      <input type="text" v-model="counts.mess">
      <p>{{counts.mess.split('').reverse().join('')}}</p> <!--reverse 颠倒数组元素顺序-->
    </h6>
  </div>
  <!--@click是v-on的简写-->
  <buttons @click.native="buttonFun"></buttons> <!--修饰符点对一些特殊指令操作时需要-->

  <p>
    <!-- .trim修饰符去掉前后空格符 -->
    <input type="text" v-model.trim="counts.mess">
    <input type="text" v-model=" counts.mess">
  </p>


  <!--过滤器 过滤器其实也就是表达式 可以用在俩个地方输写和v-bind-->
  <h4 v-for="tel in telePhone">{{tel | telFun}}</h4>

  <!--过滤器结合v-bind使用 -->
  <p><a href="" v-for=""></a></p>
  <router-view></router-view>
</div>
</template>

<script>
  import Buttons from './Buttons';
    export default {
        name: "public",
        components:{
          Buttons
        },
        data(){
            return{
              word:'hello',
              html:`<span style="color: coral">解析html格式</span>`,
              counts:{
                total:0,
                mess:''
              },
              moreStyles:{
                'background':'red',
                'border-radius':'5px'
              },
              shapes:[
                {
                  shape:'circle',

                },
                {
                  shape:'square',

                },
                {
                  shape:'triangle',
                  direction:'up'
                },
                {
                  shape:'triangle',
                  direction:'right'
                },
                {
                  shape:'triangle',
                  direction:'down'
                },
                {
                  shape:'triangle',
                  direction:'left'
                }
              ],
              telePhone:[
                15922403210,
                15922403211,
                15922403212,
                15922403213,
                15922403214,
                15922403215,
                15922403216,
                15922403217,
                15922403218,
                15922403219,
                15922403210
              ],
              urlList:[
                {
                  url:'http://www.baidu.com',
                  name:'baidu1',
                  age:20
                },
                {
                  url:'http://www.baidu.com',
                  name:'baidu2',
                  age:30
                }
              ]
            }
        },
        computed:{
          styles(){
            let height=200;
            return{
              'background':'#ccc',
              width:(height/2)+'px',
              height:height+'px'
            }
          }
        },
      methods:{
          /*changeColor(){
            if(this.color=='#ccc'){
              this.color='red'
            }else {
              this.color='#ccc'
            }
          }*/

          buttonFun(){
            alert('原生弹出')
          }

      },
      filters:{
          telFun(val){
            if(!val){
              return ''
            }else {
              val=val.toString().substr(7,4)//substr 选取字符串第七个开始后面的四个
              val='*'.repeat(7)+val;
              let num=val.substr(-1,1);
              if(num % 2==0){
                val=val+'中奖'
              }else {
                val=val+'谢谢参与'
              }
            }
            return val
          },
          getquery(val,name,age){
            if(!val){
              return ''
            }else {
              //return val?name
            }
          }
      }



  }
</script>

<style scoped>
  .public{width: 500px;}
  .shape{width: 150px;height: 150px;margin: 10px;}
  .circle{background: bisque;border-radius: 50%;}
  .square{background: bisque}
  .triangle{width: 0;height: 0;}
  .triangle.up{border-left: 100px solid transparent;border-right: 100px solid transparent;border-bottom: 150px solid orange}
  .triangle.right{border-top: 100px solid transparent;border-bottom: 100px solid transparent;border-left: 150px solid green;}
  .triangle.down{border-left: 100px solid transparent;border-right: 100px solid transparent;border-top: 150px solid #49A5C4;}
  .triangle.left{border-top: 100px solid transparent;border-right: 100px solid #2c3e50;border-bottom: 100px solid transparent}
  .shape.animate {
    animation-name: stretch;
    animation-duration: 1.0s;
    animation-timing-function: ease-out;
  }

  @keyframes stretch {
    0% {
      transform: scale(.3);
    }
    100% {
      transform: scale(1.0);
    }
  }
</style>

