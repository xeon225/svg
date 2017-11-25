<template>
    <div class="child-content">
        <div class="row wrapper animated fadeInRight" id="text">
            <div class="col-sm-4 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>对齐</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[0]"></cmui-cls>
                        </p>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>颜色</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                           <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[3]"></cmui-cls>
                        </p>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>行高度</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                           <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[6]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>多行文本溢出显示</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                           <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[2]"></cmui-cls>
                        </p>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>样式</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[1]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>文字大小</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                           <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[4]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>行高度</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                           <cmui-cls classname="text" :tpltype=false title="text" :datastyle="cmuiData.text.data[5]"></cmui-cls>
                        </p>
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
.selectName.text.active,.selectName.text:hover{;
    text-shadow: 0 0 1px rgba(0,0,0,.5);
    font-weight:bold;
}
.selectName.text{
    margin-top:10px;
    height: auto;
    line-height: normal;
}
</style>