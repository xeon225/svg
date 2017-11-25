<template>
    <div class="child-content">
        <div class="row wrapper animated fadeInRight" id="borders">
            <div class="col-sm-6 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>边框位置</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            <cmui-cls classname="borders" :tpltype=false title="border" :datastyle="cmuiData.border.data[0]"></cmui-cls>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>样式</h5>
                    </div>
                    <div class="ibox-content">
                        <p>
                            <cmui-cls classname="borders" :tpltype=false title="border" :datastyle="cmuiData.border.data[1]"></cmui-cls>
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
.selectName.borders{
    width:80px;
    height:80px;
    margin:20px 30px 0 0;
    display:inline-block;
    text-align:center;
    padding-top:20px;
}
.selectName.borders.border-item,.selectName.borders.border-itemv{
    width:120px;
    height:auto;
}
.selectName.borders.border-item,.selectName.borders.border-itemv,.selectName.borders.border-round,.selectName.borders.border-radius{
    padding-top:0;
}
.selectName.borders.border-item div,.selectName.borders.border-itemv div,.selectName.borders.border-round div,.selectName.borders.border-radius div{
    padding:20px 0;
}
.selectName.borders.border-round,.selectName.borders.border-radius{
    width:120px;
    height:120px;
    border: 1px solid #eeeeee;
}
.selectName.borders:hover,.selectName.borders:hover div,.selectName.borders.active,.selectName.borders.active div{
    border-color:#ff6565;
}
</style>