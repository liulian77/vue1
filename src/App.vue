<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
  .ivu-card-body{
    padding: 0px;
    height: auto;
    width: 100%;
    overflow-y: auto;
  }
  .ivu-layout-header{
    background-color: white;
    padding: 0;
    height: 100%;
    line-height: 100%;
  }
</style>
