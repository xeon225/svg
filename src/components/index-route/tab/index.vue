<template>
    <div class="child-content">
        <div class="row wrapper animated fadeInRight" id="tab">
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>默认风格</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :active=0 :theme=1 :font-size=14 color="darker" color-active="red">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁风格</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :active=0 :theme=2 :font-size=14 color="darker" color-active="red">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁风格2</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :active=0 :theme=3 :font-size=14 color="darker" color-active="red">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>ICON风格</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :icon=true :active=0 :theme=4 :font-size=12 :icon-size=30 color="darker" color-active="red">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>默认风格+icon</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :icon=true :active=0 :theme=1 :font-size=14 color="dark" color-active="green">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁风格+icon</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :icon=true :active=0 :theme=2 :font-size=14 color="darker" color-active="green">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁风格2+icon</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :icon=true :active=0 :theme=3 :font-size=14 color="darker" color-active="green">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>默认导航风格</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :eng-name=true :active=0 :theme=1 :font-size=14 color="dark" color-active="orange">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁导航风格</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :eng-name=true :active=0 :theme=2 :font-size=14 color="darker" color-active="orange">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>简洁导航风格2</h5>
                    </div>
                    <div class="ibox-content">
                        <cmui-tab :tab-data='testTab' :eng-name=true :active=0 :theme=3 :font-size=14 color="darker" color-active="orange">
                            <div>内容1</div>
                            <div>内容2</div>
                            <div>内容3</div>
                        </cmui-tab>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cmuiTab from '../../tabbar/index.js';
export default {
    computed:{
        testTab:function(){
            return [{"name":'选项1',"eng":"tab1","icon":"cmui_home"},{"name":'选项2',"eng":"tab2","icon":"cmui_ui"},{"name":'选项3',"eng":"tab3","icon":"cmui_tab"}]
        }
    }
}
</script>
<style>
.selectName.text.active,.selectName.text:hover{;
    text-shadow: 0 0 1px rgba(0,0,0,.5);
    font-weight:bold;
}
.selectName.text{
    margin-top:10px;
    height: auto;
    line-height: normal;
}
</style>