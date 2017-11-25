<template>
    <div class="child-content">
        <div class="row wrapper animated fadeInRight" id="icons">
            <div class="col-sm-12 boxCol">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>图标</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="flex-container">
                            <div class="iconSize margint10 border-radius border marginl5">
                                <span>size</span>
                                <span v-for="item in iconSize" v-text="item" :class="item == iconActive ? 'active':''" v-on:click="iconActive = item"></span>
                            </div>
                        </div>
                        <cmui-icon :icondata="cmuiIconData.icons" :iconysize="iconActive" class="margint20"></cmui-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cmuiCodeData from '../../../../json/selection.json';
import cmuiIcon from '../../icon/index.js';
export default {
    props:{
        iconActive:{
            type:Number,
            default:32
        }
    },
    computed:{
        cmuiIconData:function(){
            return cmuiCodeData
        },
        iconSize:function(){
            return [16,32,48,64]
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