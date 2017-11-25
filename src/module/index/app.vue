<template>
	<div id="wrapper">
        <svg id="ddd"></svg>
    </div>
</template>
<script>

import Lib from 'assets/Lib.js';

import './index.css';
import cmuiNavData from '../../../json/nav.json';
import cmuiNav from '../../components/nav/index.js';

export default {
    props:{
        activeName:{
            type:String,
            default:"home"
        },
        styleObject: {
            display: 'block'
        }
    },
    computed:{
        cmuiNavData:function(){
            return cmuiNavData
        }
    },
    methods: {
        addClass:function(name){
            $(".content-tabs .page-tabs-content[title='" + name + "']").addClass('showTop');
        },
        ddd:function(){
            var svg = d3.select("#ddd").append("g");
            console.log(svg)
        }
    },
    ready:function(){
        var selectName;
        this.ddd();
        if (this.$route.query){
            if (this.$route.query.id){
                selectName = this.$route.query.id;
                this.addClass(selectName)
            }
        }
    }
}
</script>


