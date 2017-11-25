<template>
	<div class="child-content">
        <div class="row wrapper animated fadeInRight" id="badge">
            <div class="col-sm-4 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>按钮颜色</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            可使用class来快速改变按钮的颜色，如<code>.black</code>, or <code>.badge-black</code>
                        </p>
                        <h3 class="font-bold">普通按钮</h3>
                        <p>
                            <cmui-cls classname="badge" title="badge" :datastyle="cmuiData.badge.data[1]"></cmui-cls>
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
                            可以通过添加class的值为<code>.badge-small</code>, or <code>.badge-big</code>来修改按钮的大小
                        </p>
                        <h3 class="font-bold">按钮尺寸</h3>
                        <p>
                            <cmui-cls classname="badge" title="badge" :datastyle="cmuiData.badge.data[2]"></cmui-cls>
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
                            可以通过添加class的值为<code>.badge-pill</code>, or <code>.badge-radius</code>
                        </p>
                        <h3 class="font-bold">线性按钮</h3>
                        <p>
                            <cmui-cls classname="badge" title="btn" :datastyle="cmuiData.badge.data[0]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Lib from 'assets/Lib.js'
export default {
    computed:{
        cmuiData:function(){
            return Lib.cmuiData
        }
    }
}
</script>
<style>
.selectName.badge{
    margin-right:5px;
    margin-top:5px;
}
.selectName.badge:hover,.selectName.badge.active{
    box-shadow: 0 0 4px #000;
}
</style>