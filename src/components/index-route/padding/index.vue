<template>
	<div class="child-content">
        <div class="row wrapper animated fadeInRight" id="padding">
            <div class="col-sm-12 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :multiple=5 :datastyle="cmuiData.padding.data[0]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>上填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[1]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>左填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[4]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>右填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[2]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>下填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[3]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>上下填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[5]"></cmui-cls>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>左右填充</h5>
                    </div>
                    <div class="ibox-content clearfix">
                        <cmui-cls classname="padding" :tpltype=false title="padding" :datastyle="cmuiData.padding.data[6]"></cmui-cls>
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
.selectName.margin[cmui-id^="margin"],.selectName.padding[cmui-id^="padding"] {
    min-height:90px;
}
.selectName.margin[cmui-id^="marginl"],.selectName.margin[cmui-id^="marginr"],.selectName.margin[cmui-id^="marginh"],.selectName.padding[cmui-id^="paddingl"],.selectName.padding[cmui-id^="paddingr"],.selectName.padding[cmui-id^="paddingh"] {
    min-height:auto;
}
.selectName.padding{
    background:#eee;
    margin:20px 1% ;
    width:12%;
    float:left;
}
.selectName.padding .padding{
    background:#fff;
}
.selectName.padding .marginStyle{
    border:1px solid #ccc;
    background:#ff6565;
}
@media (max-width: 767px){
  .selectName.padding{
    width:23%;
  }
}
</style>