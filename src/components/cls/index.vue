<template>
    <template v-for="item in datastyle.list.list">
        <template v-if="title == 'flex'">
            <div :class="classname == 'flex-container' ? 'col-sm-4' : 'col-sm-3'">
                <div v-text="item.name" class="margint5 fs-14"></div>
                <div class="selectName" :class="classname+' '+item.name" :cmui-id="item.name" v-on:click="addstyle($event.currentTarget,item.name,datastyle.list.tag.pra,datastyle.list.tag.cls,datastyle.list.tag.add,tpltype)">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </template>
        <template v-if="title == 'margin' || title == 'padding'">
            <div v-for="(index,itemM) in marginpaddingNum" class="selectName pos-r" :cmui-id="item.name+itemM" :cmui-text="item.text+itemM+'px'" v-on:click="addstyle($event.currentTarget,item.name,datastyle.list.tag.pra,datastyle.list.tag.cls,datastyle.list.tag.add,tpltype)" :class="classname">
                <div class="bg-orange clearfix">
                    <div class="marginStyle" :class="item.name+itemM">
                        <div class="pos-a text-center left0 top-n20" style="width:100%" v-text="item.text+itemM+'px'"></div>
                        <div style="height:20px;" :class="classname"></div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="title != 'flex' && title != 'margin' && title != 'padding'">
            <div class="selectName" :class="classname+' '+item.name" :cmui-id="item.name" :style="item.name.indexOf('white') >= 0 ? {color: '#333'} : ''" v-on:click="addstyle($event.currentTarget,item.name,datastyle.list.tag.pra,datastyle.list.tag.cls,datastyle.list.tag.add,tpltype)">
                <div v-text="item.text" v-if="item.text"></div>
                <div v-text="item.name"></div>
            </div>
        </template>
    </template>
</template>
<script>
import $ from 'jquery';
export default {
    props:{
        datastyle:{
            type:Object,
            default:""
        },
        title:{
            type:String,
            default:"标题"
        },
        classname:{
            type:String,
            default:""
        },
        tpltype:{
            type:Boolean,
            default:true
        },
        multiple:{
            type:Number,
            default:5
        }
    },
    computed:{
        marginpaddingNum:function(){
            var pxNum=[];
            for (var i = 0 ; i <= 6 ; i++){
                pxNum.push(i * this.multiple);
            }
            return pxNum
        }
    },
    ready:function(){


    },
    methods: {
        addstyle(e,active,tpl,cls,add,tplName) {
            if(add == 'doubleCircle'){
                $(e).siblings('.'+tpl).removeClass('active');
                if($(e).hasClass('active')){
                    $(e).removeClass('active');
                }else{
                    $(e).addClass('active');
                }
            } else {
                $(e).toggleClass('active');
            }
            this.$dispatch('resultClass',active,tpl,cls,tplName);
        }
    }
}
</script>
<style>
.iphoneTopBar{
    background-repeat:no-repeat;
    background-size:100% auto;
}
.iphoneTopBar.white{
    background-image:url('/img/iphone7_topbar_b.png');
    background-color:#fff;
}
[class*="hint--"] {
    display:flex;
}
.selectName{
    cursor: pointer;
}
.selectName.btn:hover,.selectName.badge:hover,.selectName.btn.active,.selectName.badge.active{
    box-shadow: 0 0 4px #000;
}
.selectName.borders:hover,.selectName.borders:hover div,.selectName.borders.active,.selectName.borders.active div{
    border-color:#ff6565;
}
.selectName.text.active,.selectName.text:hover{;
    text-shadow: 0 0 1px rgba(0,0,0,.5);
    font-weight:bold;
}
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
  .selectName.margin{
    width:23%;
  }
}
</style>