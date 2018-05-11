<template>
    <!--计算属性 对指定视图、复杂的值计算。将值绑定到依赖项目 需要时更新-->
    <div>
      <div v-for="project in results">
        <input type="text" v-model="project.marks">
        <span>科目:{{project.name}}</span>
        <span>得分:{{project.marks}}</span>
      </div>
      <span>总分:{{totalFun}}</span>

      <div>
        <div class="form">
          <!--计算属性-->
          <input type="text" v-model="tempName">
          <button @click="setName" class="button">SET</button>
        </div>
        <p class="name">Full name:{{fullName}}</p>
        <p class="name">First name:{{firstName}}</p>
        <p class="name">Last name:{{lastName}}</p>
      </div>
      <!--npm i vue-async-computed --save 安装异步计算属性-->


    </div>
</template>

<script>
    export default {
        name: "computeds",
      data(){
          return{
            results:[
              {
                name:'英语',
                marks:'60'
              },
              {
                name:'数学',
                marks:'80'
              },
              {
                name:'语文',
                marks:'100'
              }
            ],

           tempName:'',
           firstName:'',
           lastName:''


          }
      },
      //使用computed将属性缓存 发生改变在更新不用每次渲染都更新 同步计算属性
      //属性基于computed的依赖进行缓存 方法不会
      computed:{
        totalFun(){
          let total=0;
          let thiss=this
          for(let i=0; i<thiss.results.length;i++){
            total+=parseInt(thiss.results[i].marks)
          }
          return total
        },
        fullName:{
          get(){
            //return `${this.firstName} ${this.lastName}`
            return this.firstName+''+this.lastName
          },
          set(values){
            //console.log(values)
            let names=values.split(" ");//将字符串分割为数组
            this.firstName=names[0];
            this.lastName=names[names.length-1]
          }
        }
      },
      methods:{
          setName(){
            this.fullName=this.tempName;
            console.log(this.tempName)

          }
      }
    }
</script>

<style scoped>

</style>
