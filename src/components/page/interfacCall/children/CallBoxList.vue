<template>
    <div class="container">
        <div class="header-wrap">
            <Button type="primary" size="large"  @click="InstructionsQuery">药品说明书查询</Button>
            <Button type="primary" size="large"  @click="MedicinePlatform">医方管理平台</Button>
        </div>
        <div class="content-wrap">
            <Row :gutter="16">
                <Col span="10">
                    <Row :gutter="16" type="flex" justify="center">
                        <Col span="12">
                            <div  style="text-align: center">药品</div>
                            <Input v-model="drugs" type="textarea" :rows="4" />
                        </Col>
                        <Col span="12">
                            <div style="text-align: center">疾病</div>
                            <Input v-model="disease" type="textarea" :rows="4"/>
                        </Col>
                    </Row>
                    <Button type="info" style="width:100%;margin:10px 0" disabled>传入JSON内容</Button>
                    <Row>
                       <Col span="24">
                            <Input v-model="drugsBox" type="textarea" :rows="24" />
                        </Col>
                    </Row>
                </Col>
                <Col span="14">
                    <div class="right-wrap">
                        <Button :class="{current: flag}"  @click="JsonInfo(true)">返回JSON显示</Button>
                        <Button :class="{current: !flag}"  @click="JsonInfo(false)">返回URL显示</Button>
                    </div>
                    <div class="main-wrap">
                        <div class="main-wrap-list" v-show="flag">
                            <Input v-model="JsonList" type="textarea" :rows="24" />
                        </div>
                        <div class="main-wrap-list" v-show="!flag">
                            <div class="list-item">
                                <Input v-model="InterUrl" placeholder="返回URL显示"  style="width: 90%"/>
                                <Button type="info" @click="ShowUrl">显示</Button>
                            </div>
                            <Input v-model="URlList" type="textarea" :rows="24" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
export default {
    name:"callbox",
    data() {
        return {
            drugs:"", //药品
            disease:"", //疾病
            JsonList:"", //返回Json显示
            URlList:"", //返回URL显示
            drugsBox:this.$store.state.drugsBox, //左边文本框
            flag:true, //true为显示json false为显示url
            InterUrl:"", //返回的url显示
        }
    },
    methods:{
        InstructionsQuery(){
            //说明书查询
            this.flag=false
        },
        MedicinePlatform(){
            //医方管理平台
            this.flag=false
        },
        JsonInfo(flag){
            this.flag = flag
        },
        ShowUrl() {

        },
        filter(value){
          let data = '';
          for (let i of value){
            // console.log(i)
            data+=(i.机构项目名称+'\n');
          }
          return data;
        }
      },
      computed: {
        list() {
          return this.$store.state.publicData;
        },
        listJson(){
          return this.$store.state.dataJson;
        }
      },
      watch:{
        list:function(old,newd){
          this.drugs = this.filter(old.药品.RecordList);
          this.disease = this.filter(old.诊断.RecordList);
        },
        listJson:function(old,newd){
          this.JsonList = old;
        },
      },
}
</script>
<style scoped>
.content-wrap{
    margin-top: 10px;
}
.current{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
}
.main-wrap{
    width: 100%;
    height: 100%;
}
.main-wrap-list{
    margin-top: 10px;
}
.main-wrap-list .list-item {
    margin-bottom: 10px;
}
</style>


