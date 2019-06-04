<template>
  <div class="layout">
    <Layout>
      <Header>
        <Row style="border-bottom: 1px solid #E6E6E6;padding: 20px 0;">
          <Col span="2" offset="2">
            <div style="font-size: 20px;color: lightskyblue;margin-top: 7px;">操作步骤:</div>
          </Col>
          <Col span="16" offset="1">
            <Steps>
              <Step title="连接测试"></Step>
              <Step title="生成测试处方"></Step>
              <Step title="接口调用"></Step>
            </Steps>
          </Col>
        </Row>
        <Row style="padding: 20px 0;">
          <Col span="24" offset="1">
            <span style="font-size: 16px;">授权ID：</span>
            <Input placeholder="请输入授权ID..." clearable style="width: 300px" v-model="authorizationID"/>
            <Button type="info" @click="connectionTest">连接测试</Button>
            <!-- <Button type="info">云服务</Button> -->
            <Dropdown>
              <Button type="info">
                  云服务
                  <Icon type="ios-arrow-down"></Icon>
              </Button>
                <DropdownMenu slot="list">
                  <DropdownItem>本地服务</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            <Button type="info">退出</Button>
            <span style="font-size: 20px;margin-left: 40px;">【重庆沙坪坝社区】</span>
          </Col>
        </Row>
      </Header>
      <Content :style="{padding: '0 30px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem to="/ReviewInterface">用药审查接口</BreadcrumbItem>
          <BreadcrumbItem to="/interfacCall">百科查询接口</BreadcrumbItem>
          <BreadcrumbItem to="/queryInterface">接口调用手册</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div class="main">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
        return {
            TaskID:"",
            authorizationID:"6BECBCC2-473F-4071-A20E-423E247B2266"
        }
      },
    methods:{
      connectionTest(){
        console.log(this.$route.path)
        if(this.$route.path=="/ReviewInterface"){
          axios.post('/book/bookinterface.asq',{
            CompanyID:this.authorizationID,
            TaskID:"机构测试数据",
          }).then(res =>{
            if (res.data.errtext=="成功"){
              let data = res.data.机构字典;
              this.$store.commit("setPublicData",{
                publicData:data
              })
            }
          })
        }else if (this.$route.path=="/interfacCall"){
          axios.post('/book/bookinterface.asq',{
            CompanyID:this.authorizationID,
            TaskID:"机构测试数据",
          }).then(res =>{
            if (res.data.errtext=="成功"){
              let data = res.data.机构字典;
              this.$store.commit("setPublicData",{
                publicData:data
              })
            }
          })
        }
      }
    },
    mounted(){
      this.$router.push({path:'./reviewInterface'});
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .main {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
