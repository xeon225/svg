<template>
	<div>
        <div class='badge badge-red badge-radius badge-reverse' v-on:click="addClassName($route.query.name+'10')">{{$route.query.name}}10</div>
        <div class='badge badge-red badge-radius badge-reverse' v-on:click="addClassName($route.query.name+'20')">{{$route.query.name}}20</div>
    </div>
</template>
<script>
import Lib from 'assets/Lib.js'
export default {
    computed:{
        cmuiData:function(){
            return Lib.cmuiData
        }
    },
    methods: {
        addClassName(n) {
            this.$dispatch('resultClassName',n);
        }
    }
}
</script>
<style>

</style>