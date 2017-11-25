<template>
	<div class="child-content">
        <div class="row wrapper animated fadeInRight" id="margin">
            <div class="col-sm-12 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>外边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :multiple=5 :datastyle="cmuiData.margin.data[0]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>上边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[1]"></cmui-cls>
                    </div>
                </div>
                
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>左边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[4]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>右边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[2]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>下边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[3]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>上下边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[5]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>左右边距</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="margin" :tpltype=false title="margin" :datastyle="cmuiData.margin.data[6]"></cmui-cls>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Lib from 'assets/Lib.js';
export default {
    computed:{
        cmuiData:function(){
            return Lib.cmuiData
        }
    }
}
</script>
<style>
.selectName.margin{
    background:#eee;
    margin:20px 1% ;
    width:12%;
    float:left;
}
.selectName.margin .marginStyle{
    border:1px solid #ccc;
    background:#fff;
}
.selectName.margin[cmui-id^="margin"],.selectName.padding[cmui-id^="padding"] {
    min-height:90px;
}
.selectName.margin[cmui-id^="marginl"],.selectName.margin[cmui-id^="marginr"],.selectName.margin[cmui-id^="marginh"],.selectName.padding[cmui-id^="paddingl"],.selectName.padding[cmui-id^="paddingr"],.selectName.padding[cmui-id^="paddingh"] {
    min-height:auto;
}
@media (max-width: 767px){
  .selectName.margin{
    width:23%;
  }
}
</style>