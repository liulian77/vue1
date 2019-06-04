<template>
    <div class="container">
        <Row :gutter="16"  type="flex" justify="center">
            <Col span="5">
                <div  style="text-align: center">药品</div>
                <Input type="textarea" :rows="5" v-model="drug"/>
            </Col>
            <Col span="5">
                <div  style="text-align: center">人群</div>
                <Input type="textarea" :rows="5" v-model="crowd"/>
            </Col>
            <Col span="5">
                <div  style="text-align: center">用法</div>
                <Input type="textarea" :rows="5" v-model="usage"/>
            </Col>
            <Col span="9">
                <div class="item-wrap">
                    调用地址:
                    <Input placeholder="请输入接口地址" style="width: 80%" v-model="data"/>
                </div>
                <div class="item-wrap">
                    <Button type="primary" size="large">生成测试处方</Button>
                    <Button type="primary" size="large">接口调用</Button>
                </div>
                <div class="item-wrap">
                    处方药品数<InputNumber :max="10" :min="1" ></InputNumber>
                    <Checkbox>自动查询</Checkbox>
                </div>
                <p class="desc">随机选择左边的药品,人群,用法</p>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"faceHeader",
    data(){
      return {
        drug:"",
        crowd:"",
        usage:"",
        data:"http://119.23.78.165/book/CFInterface.asq"
        // list: this.$store.state.publicData
      }
    },
    methods:{
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
      }
    },
    watch:{
      list:function(old,newd){
          this.drug = this.filter(old.药品.RecordList);
          this.crowd = this.filter(old.人群.RecordList);
          this.usage = this.filter(old.用法.RecordList);
      }
    },
    mounted(){

    }
}
</script>
<style scoped>
.container .item-wrap{
    margin: 5px 0;
}
.desc{
    color:#2d8cf0;
    font-size: 18px;
}
</style>

