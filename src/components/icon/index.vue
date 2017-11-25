<template>
    <div class="iconList clearfix text-white clearfix">
        <div class="icons float-left cursor" v-for="item in icondata" :style="{width:iconwidth}" :cmui-id="'icon-' + item.properties.name" v-on:click="addstyle($event.currentTarget,item.properties.name,'icons','icons','doubleCircle',false)">
            <div class="icon_h bg-white text-center" :style="{width:iconwidth,height:iconwidth}">
                <svg :width="iconysize" height="100%"><g><path :d="itemPath" v-for='itemPath in item.icon.paths'></path></g></svg>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    props:{
        icondata:{
            type:Array,
            default:""
        },
        iconysize:{
            type:Number,
            default:32
        },
        max:{
            type:Number,
            default:1024
        }
    },
    computed:{
        iconwidth:function(){
            return (this.iconysize * 2 + 8) + 'px'
        }
    },
    ready:function(){
        $('svg').attr('viewBox','0 0 ' + this.iconysize + ' ' + this.iconysize);
        $('svg g').attr('transform','scale('+this.iconysize/this.max+' '+this.iconysize/this.max+')');
    },
    methods: {
        addstyle(e,active,tpl,cls,add,tplName,tplText) {
            if(add == 'doubleCircle'){
            console.log(tpl)
                $(e).siblings('.'+tpl).removeClass('active');
                if($(e).hasClass('active')){
                    $(e).removeClass('active');
                }else{
                    $(e).addClass('active');
                }
            } else {
                $(e).toggleClass('active');
            }
            this.$dispatch('resultClass',active,tpl,cls,tplName,tplText);
        }
    }
}
</script>
<style>
@import './style.css';
</style>
