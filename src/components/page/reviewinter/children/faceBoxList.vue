<template>
    <div class="container">
        <Row :gutter="16">
            <Col span="10" style="margin-top: -10px;">
                <Button type="info" style="width:100%;margin:10px 0" disabled>传入JSON内容</Button>
                <Input type="textarea" :rows="25" />
            </Col>
            <Col span="14">
                <div class="right-wrap">
                    <Button :class="{current: flag}"  @click="JsonInfo(true)">返回JSON显示</Button>
                    <Button :class="{current: !flag}"  @click="JsonInfo(false)">返回URL显示</Button>
                </div>
                <div class="main-wrap">
                        <div class="main-wrap-list" v-show="flag">
                            <Input type="textarea" :rows="12" />
                            <Input type="textarea" :rows="12" />
                        </div>
                        <div class="main-wrap-list" v-show="!flag">
                            <div class="list-item">
                                <Input placeholder="返回URL显示"  style="width: 90%"/>
                                <Button type="info">显示</Button>
                            </div>
                            <Input type="textarea" :rows="24" />
                        </div>
                    </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"faceBoxList",
    data() {
        return {
            flag:true, //true为显示json false为显示url
        }
    },
    methods:{
        JsonInfo(flag){
            this.flag = flag
        },
    }
}
</script>
<style scoped>
.current{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
}
.main-wrap-list{
    margin-top: 10px;
    height: 100%;
}
.main-wrap-list .list-item {
    margin-bottom: 10px;
}
</style>


