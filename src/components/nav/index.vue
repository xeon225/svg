<template>
    <ul class="nav nav-stacked">
        <!--<li class="dropdown select" v-link="{ path: '/' + datanav.default.eng , query: {id: datanav.default.eng }}" v-on:click="navActive($event.currentTarget)"><a :titleEng="datanav.default.eng" :titleChn="datanav.default.chn"><i :class="datanav.default.icon"></i><span v-text="datanav.default.chn"></span></a></li>-->
        <template v-for="item in datanav.data">
        <li class="dropdown" :class="item.engname ? 'select':''" v-link="item.engname ? { path: '/' + item.engname , query: {id: item.engname}} : ''" v-on:click="navActive($event.currentTarget,item.engname)">
            <a :titleEng="item.engname" :titleChn="item.name"><i :class="item.icon"></i><span v-text="item.name"></span></a>
            <ul class="dropdown-menu second" v-if="item.list">
                <li v-for="itemC in item.list" class="select" :class="itemC.eng == activeTop ? addClass(itemC.eng) : ''"><a v-link="{ path: '/' + itemC.eng , query: {id: itemC.eng }}" :titleEng="itemC.eng" :titleChn="itemC.chn" v-text="itemC.chn"></a></li>
            </ul>
        </li>
        </template>
        <li class="showCodeEdit">
            <a href="codeEdit.html"><i class="cmui_editor"></i><span>codeEdit</span></a>
        </li>
    </ul>
</template>
<script>
import $ from 'jquery';
export default {
    props:{
        datanav:{
            type:Object,
            default:""
        },
        activeName:{
            type:String,
            default:"home"
        }
    },
    computed:{

    },
    ready:function(){
        
    },
    methods: {
        navActive:function(e,engName){
            $('nav .dropdown').removeClass('active');
            $(e).addClass('active');
            if (engName) {
                this.childselect(engName);
            }
        },
        childselect:function(engName){
            this.$dispatch('resultSelectnav',engName);
        },
        addClass:function(name){
            $(".content-tabs .page-tabs-content[title='" + name + "']").show();
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
</style>