<template>
    <!--vw中处理元素宽高比默认div结构-->
    <div aspectratio w-369-200 aspect-ratio="369/200">
        <div aspectratio-content>
          <p>2451521456</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vw"
    }
</script>

<style scoped>
  img{content: normal!important;}
  [aspectratio]{
    position: relative;
  }
  [aspectratio]::before{
    content:'';display: block;width: 1px;margin-left: -1px;height: 0;
  }
  [aspectratio-content]{
    position: absolute;top:0;left: 0;
    right: 0;bottom: 0;width: 100%;height: 100%;
  }
      [aspect-ratio="369/200"]{
    /*aspect-ratio 元素宽高比需要单独写 否则其他属性会解析不出来*/
    aspect-ratio:'369:200'

        }
      [w-369-200]{
        background:aliceblue;border-radius: 4px;width: 369px;
      }
</style>
