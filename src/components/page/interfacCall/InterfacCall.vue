<template>
  <div class="container">
    <div class="header">
			<CallHeader/>
		</div>
		<div class="center-wrap">
			<CallBox/>
		</div>
  </div>
</template>

<script>
import Header from "./children/Header";
import CallBoxList from './children/CallBoxList'
export default {
  name: "InterfacCall",
  data() {
    return {

    }
  },
  components:{
    'CallHeader':Header,
    'CallBox':CallBoxList
  },
  mounted(){

  }
};
</script>

<style scoped>
  .container {
    margin-top: 20px;
    padding: 0 10px;
  }
</style>
