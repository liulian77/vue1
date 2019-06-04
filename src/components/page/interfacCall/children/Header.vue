<template>
  <div class="container">
    <Row :gutter="16" type="flex" align="middle">
      <Col span="10">
        调用地址:
        <Input v-model="Interface" placeholder="请输入接口地址" style="width: 80%"/>
      </Col>
      <Col span="2">
        <Button type="primary" size="large" @click="InterfaceBtn">接口调用</Button>
      </Col>
      <Col span="3">
        <Checkbox>自动查询(随机)</Checkbox>
      </Col>
    </Row>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  data() {
    return {
      Interface: "http://119.23.78.165/book/bookinterface.asq", //文本框
    }
	},
	methods:{
		InterfaceBtn(){
      axios.post('/book/bookinterface.asq',{
        授权ID:"6BECBCC2-473F-4071-A20E-423E247B2266",
        TaskID:"药品说明书查询",
        药品名称:"石斛"
      }).then(res =>{
        if (res.data.errtext=="成功"){
          console.log(res.data)
          this.$store.commit("setDataJson",{
            dataJson:JSON.stringify(res.data)
          })
        }
      })
		}
	}
};
</script>
<style scoped>
</style>



