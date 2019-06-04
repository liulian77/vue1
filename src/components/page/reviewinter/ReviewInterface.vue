<template>
    <div class="center">
      <div class="header">
          <faceHeader></faceHeader>
      </div>
      <div class="main">
          <faceBoxList/>
      </div>
    </div>
</template>

<script>
import faceHeader from './children/faceHeader'
import faceBoxList from './children/faceBoxList'
    export default {
        name: "ReviewInterface",
        data(){
            return {

            }
        },
        components:{
            faceHeader,
            faceBoxList
        },
        mounted(){

        }
    }
</script>

<style scoped>
.center{
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: hidden;
}
.main {
    width: 100%;
    height: 100%;
    /* overflow-y: auto; */
}
</style>
