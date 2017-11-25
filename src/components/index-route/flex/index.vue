<template>
    <div class="child-content">
        <div class="row wrapper animated fadeInRight" id="flex">
            <div class="col-sm-12 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>flex-container</h5>
                    </div>
                    <div class="ibox-content row">
                        <cmui-cls classname="flex-container" title="flex" :datastyle="cmuiData.flex.data[0]"></cmui-cls>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>flex-container-col</h5>
                    </div>
                    <div class="ibox-content row">
                        <cmui-cls classname="flex-container-col" title="flex" :datastyle="cmuiData.flex.data[1]"></cmui-cls>
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
.selectName.flex-container,.selectName.flex-container-col{
    padding:10px;
    background:#2f4050;
    margin-top:5px;
}
.selectName.flex-container div,.selectName.flex-container-col div{
    min-width:30px;
    min-height:30px;
    background:#fff;
    margin:5px;
    color:#666;
    text-align:center;
    line-height:30px;
}
.selectName.flex-container div:last-child,.selectName.flex-container-col div:last-child{
    min-height:50px;
    line-height:50px;
}
</style>