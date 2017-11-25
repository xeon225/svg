<template>
	<div class="child-content">
        <div class="row wrapper animated fadeInRight" id="btn">
            <div class="col-sm-4 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>按钮颜色</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            可使用class来快速改变按钮的颜色，如<code>.black</code>, or <code>.btn-black</code>
                        </p>
                        <h3 class="font-bold">普通按钮</h3>
                        <p>
                            <cmui-cls classname="btn" title="btn" :datastyle="cmuiData.btn.data[1]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>按钮大小</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            可以通过添加class的值为<code>.btn-small</code>, or <code>.btn-big</code>来修改按钮的大小
                        </p>
                        <h3 class="font-bold">按钮尺寸</h3>
                        <p>
                            <cmui-cls classname="btn btn-radius btn-blue" title="btn" :datastyle="cmuiData.btn.data[2]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>线性按钮</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            可以通过添加class的值为<code>.btn-block</code>, or <code>.btn-radius</code>
                        </p>
                        <h3 class="font-bold">线性按钮</h3>
                        <p>
                            <cmui-cls classname="btn btn-radius btn-blue" title="btn" :datastyle="cmuiData.btn.data[0]"></cmui-cls>
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
.selectName.btn{
    margin-right:5px;
    margin-top:5px;
    min-width:110px;
}
.selectName.btn:hover,.selectName.btn.active{
    box-shadow: 0 0 4px #000;
}
</style>