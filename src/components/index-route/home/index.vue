<template>
	<div class="child-content">
        <div class="row wrapper animated fadeInRight">
            <template v-for="item in cmuiNavData.nav.data">
                <template v-if="item.engname">
                <div class="col-sm-4 boxCol">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title" v-link="{ path: '/' + item.engname , query: {id: item.engname }}">
                            <h5 v-text="item.name"></h5>
                        </div>
                    </div>
                </div>
                </template>
                <template v-if="item.list" v-for="itemC in item.list">
                <div class="col-sm-4 boxCol">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title" v-link="{ path: '/' + itemC.eng , query: {id: itemC.eng }}">
                            <h5 v-text="itemC.chn"></h5>
                        </div>
                    </div>
                </div>
                </template>
            </template>
        </div>
    </div>

</template>
<script>
import cmuiNavData from '../../../../json/nav.json';
export default {
    props:{
        activeName:{
            type:String,
            default:"home"
        }
    },
    computed:{
        cmuiNavData:function(){
            return cmuiNavData
        }
    }
}
</script>