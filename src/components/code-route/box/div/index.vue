<template>
	<div class="flex-container left">
        <div v-text="$route.query.box" class="marginr5 fs-14" style="font-weight: bold;min-width:50px;"></div><input type="text" class="form-control flex5" placeholder=".classname" @change="change($event,'classname')">
    </div>
    <div class="flex-container left margint10">
        <div class="marginr5 fs-14" style="font-weight: bold;min-width:50px;">style</div><input type="text" class="form-control flex5" placeholder="style" @change="change($event,'stylename')">
    </div>
</template>
<script>
export default {
    props:{
        activeName:{
            type:String,
            default:''
        },
        styleObject: {
            display: 'block'
        }
    },
    computed:{
        className:function(){
            return this.activeName;
        },
    },
    methods: {
        change(e,type) {
            console.log(e.target.value,type);
            this.$dispatch('resultClassName',e.target.value,type);
        }
    }
}
</script>
<style>

</style>