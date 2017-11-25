<template>
    <div :class="'theme_'+theme">
        <div class="clearfix tabNav" :class="engName ? 'engname fs-' + fontSize : icon ? 'iconname fs-' + fontSize : 'fs-' + fontSize">
            <div v-for="(index,item) in tabData" :class="index == defaultActive ? 'active text-'+colorActive : 'text-' + color" v-on:click="active = index" :style="{width:currentWidth}">
                <div class="name">
                    <div class="texts">
                        <i :class="item.icon" v-if="icon" :style="{fontSize:currentIconSize}"></i>
                        <span v-text="item.name"></span>
                        <div v-if="engName" class="fs-12" v-text="item.eng"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabContent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    props:{
        tabData:{
            type:Array,
            default:[]
        },
        active:{
            type:Number,
            default:0
        },
        theme:{
            type:Number,
            default:1
        },
        fontSize:{
            type:Number,
            default:12
        },
        iconSize:{
            type:Number,
            default:12
        },
        color:{
            type:String,
            default:'dark'
        },
        colorActive:{
            type:String,
            default:'red'
        },
        icon:{
            type:Boolean,
            default:false
        },
        engName:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        defaultActive:function(){
            this.currentDom.children().hide().eq(this.active).show();
            return this.active
        },
        currentDom:function(){
        var $dom = $(this.$el)
            return $dom.find('.tabContent')
        },
        currentWidth:function(){
            return (100/this.tabData.length) + '%'
        },
        currentIconSize:function(){
            return (this.iconSize) + 'px'
        }
    },
    ready:function(){
        this.currentDom.children().eq(this.active).show();
    },
    methods: {

    }
}
</script>
<style>
.tabContent>div{
    display:none
}
@import './style.css';
</style>