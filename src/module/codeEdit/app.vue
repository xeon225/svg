<template>
	<div id="codeEdit" class="animated" style="top: 0;">
        <div class="padding10 fs-20 text-white flex-container" style="line-height: 30px;"><div class="flex-container left"><i class="cmui_editor"></i><span class="marginl5">codeEdit</span></div><i class="cmui_editorClose cursor" style="font-size: 30px"></i></div>
        <div class="row colList">
            <div class="colShow an_05" :class="editTabActive == 'codeEdit' ? 'col-sm-11' : (editTabActive != '' ? 'col-sm-1' : 'col-sm-6')">
                <div class="paddingb10" style="height:100%">
                    <!--样式选择-->
                    <div class="float-left" style="height:50%;width:50%;">
                        <div class="padding10 bg-white marginr5 marginb5" style="height: calc(100% - 5px);width: calc(100% - 5px);overflow-y: auto;">
                            <div class="fs-14 text-white padding10" style="background-color:#2f4050">区块</div>
                            <div class="box padding10" style="background-color:#eee">
                                <div>
                                    <div class='badge badge-blue badge-radius badge-reverse' v-link="{ path: '/div' , query: {box: 'div',name :'div' }}" :class="$route.query.box == 'div' && 'active'" v-on:click="addClass('box','div')">DIV</div>
                                    <div class='badge badge-blue badge-radius badge-reverse' v-link="{ path: '/span' , query: {box: 'span',name :'span' }}" :class="$route.query.box == 'span' && 'active'" v-on:click="addClass('box','span')">SPAN</div>
                                </div>
                            </div>
                            <div class="stylelist margint5" v-show="$route.query.box != '' || $route.query.class == 'style' ">
                                <div class="fs-14 padding10 text-white" style="background-color:#2f4050">样式</div>
                                <div class="style padding10" style="background-color:#eee">
                                    <div class="fs-12 paddingv5">盒子</div>
                                    <div>
                                        <div class='badge badge-orange badge-radius badge-reverse' v-link="{ path: '/padding' , query: {box: $route.query.box,class: 'style',name :'padding' }}" :class="$route.query.name == 'padding' && 'active'" v-on:click="addClass('style','padding')">padding</div>
                                        <div class='badge badge-orange badge-radius badge-reverse' v-link="{ path: '/margin' , query: {box: $route.query.box,class: 'style',name :'margin' }}" :class="$route.query.name == 'margin' && 'active'" v-on:click="addClass('style','margin')">margin</div>
                                    </div>
                                    <div class="fs-12 paddingv5">文本</div>
                                    <div>
                                        <div class='badge badge-orange badge-radius badge-reverse'>color</div>
                                        <div class='badge badge-orange badge-radius badge-reverse'>font-size</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--编辑器-->
                    <div class="float-left" style="height:50%;width:50%;">
                        <div class="paddingv10 bg-white marginl5 marginb5" style="height: calc(100% - 5px);width: calc(100% - 5px);">
                            <codemirror :code.sync="divCode" :options="htmlEdit"></codemirror>
                        </div>
                    </div>
                    <!--样式结果-->
                    <div class="float-left" style="height:50%;width:50%;">
                        <div class="padding10 bg-white marginr5 margint5" style="height: calc(100% - 5px);width: calc(100% - 5px);overflow-y: auto;">
                            <router-view></router-view>
                            <div id="selectBoxStyle" class="margint10 flex-container center left">
                                <div v-text="boxName" style="font-weight: bold;min-width:50px;"></div>
                                <div>
                                    <div v-show="styleClassList.class != ''">
                                        <div>.class</div>
                                        <div v-text="styleClassList.class"></div>
                                    </div>
                                    <div v-show="styleClassList.style != ''">
                                        <div>style</div>
                                        <div v-text="styleClassList.style"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--显示结果-->
                    <div class="float-left" style="height:50%;width:50%;">
                        <div class="paddingv10 bg-white marginl5 margint5" style="height: calc(100% - 5px);width: calc(100% - 5px);">
                            <div v-html="divCode"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="colShow an_05" :class="editTabActive == 'codeShow' ? 'col-sm-11' : (editTabActive != '' ? 'col-sm-1' : 'col-sm-6')">
                <div class="paddingb10 bg-red" style="height:100%">
                    werwer
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Lib from 'assets/Lib.js';
import './codeEdit.css';

export default {
    props:{
        editTabActive:{
            type:String,
            default:'codeEdit'
        },
        boxName:{
            type:String,
            default:""
        },
        styleClass:{
            type: Object,
            default: {
                class: [''],
                style:['']
            }
        },
        divCode:{
            type:String,
            default:'<div id="example">\n\n\</div>'
        }
    },
    methods: {
        addClass(classType,name){
            if(classType == 'box') {
                this.boxName = name;
            } else if(classType == 'style') {

            }
        },
    },
    computed: {
        options: function () {
          return {
            mode: 'text/html',
            tabSize: 4,
            lineNumbers: true,
            lineWrapping: true,
            cursorHeight: 0.85,
            theme:'monokai',
            readOnly:'nocursor',
            extraKeys: {'Ctrl-Space': 'autocomplete'},
          }
        },
        htmlEdit: function () {
          return {
            mode: 'text/html',
            tabSize: 4,
            lineNumbers: true,
            lineWrapping: true,
            cursorHeight: 0.85,
            theme:'monokai',
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            keyMap: "sublime",
            extraKeys: {'Ctrl-Space': 'autocomplete'},
          }
        },
        cssEdit: function () {
          return {
            mode: 'text/x-gss',
            tabSize: 4,
            lineNumbers: true,
            lineWrapping: true,
            cursorHeight: 0.85,
            theme:'monokai',
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            keyMap: "sublime",
            extraKeys: {'Ctrl-Space': 'autocomplete'},
          }
        },
        htmlCode:function(){
            return this.divCode
        },
        styleClassList:function(){
            return this.styleClass
        }
    },
    ready:function(){
        if (this.$route.query){
            if (this.$route.query.box){
                this.boxName = this.$route.query.box;
            }
        }
    },
    events:{
        resultClassName:function(name,type){
            if (type == 'classname') {
                this.styleClassList.class.push(name);
            } else if (type == 'stylename') {
                this.styleClassList.style.push(name);
            }
        },
    }
}
</script>

<style>
    #codeEdit .colShow .box .badge.active{
        box-shadow: 0 0 4px #25aaff;
        background-color:#25aaff;
        color:#fff;
    }
    #codeEdit .colShow .stylelist .badge.active{
        box-shadow: 0 0 4px #ff9800;
    }
    #codeEdit .colShow .stylelist .badge.v-link-active{
        background-color:#ff9800;
        color:#fff;
    }
</style>
