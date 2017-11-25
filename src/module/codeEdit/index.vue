<template>
	sdfsdf
</template>
<script>
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
        },
        
    },
    methods: {
        addClass:function(name){
            $(".content-tabs .page-tabs-content[title='" + name + "']").addClass('showTop');
        }
    },
    ready:function(){
        var selectName;
        if (this.$route.query){
            if (this.$route.query.id){
                selectName = this.$route.query.id;
                this.addClass(selectName)
            }
        }
    }
}
</script>
<style>
@import './codeEdit.css';
</style>