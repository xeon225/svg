<template>
    <div class="flex-container center" style="padding:20px 0">
        <div class="loadingContent">
            <div style="text-align: center;" class="bg-black"><svg id="weather"></svg></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import svgD from 'components/svgList/weather/index.json';
// import Snap from 'snapsvg';
import Snap from '../../../module/svgList/snap.svg.js';
export default {
    data() {
        return {
            svgData:svgD,
            an:true,
            chart:{
                'circle':'circle',
                'rect':'rect',
                'polyline':'polyline',
                'path':'path',
                'ellipse':'ellipse'
            },
            nowTimes:0,
            times:500,
            times_2:100,
            times_3:1200,
            times_4:600,
            svg:'',
            chateName:["cloud","rain","thunder","wind"],
            chateList:{}
        }
    },
    props:{
        start:{
            type:Boolean,
            default:false
        }
    },
    computed: {
    },
	methods: {
        svgLoading:function(){
            var svgData = this.svgData;
            var svg = Snap("#weather").attr(svgData.svg);//设置画布大小

            for (var i = 0; i < this.chateName.length; i++) {
                var name = this.chateName[i];
                var datas = [];
                for (var j = 0; j < svgData[this.chateName[i]].length; j++) {
                    if (svgData[this.chateName[i]].length == 1) {
                        datas = this.chate(svg,svgData[this.chateName[i]][j]);
                    } else {
                        datas.push(this.chate(svg,svgData[this.chateName[i]][j]));
                    }
                }
                this.chateList[name] = {
                    data : datas
                }
            }
            // console.log(this.chateList)
            // var g = svg.paper.g();
            // var clouds = this.chateList.cloud.data.use();//云
            // g.add(clouds);
            // var rain =  this.chate(svg,svgData.rain);//云


            this.chateThunder(svg,this.chateList.cloud.data,this.chateList.rain.data,this.chateList.thunder.data,this.chateList.wind.data);//雷阵雨
        },
        //雷阵雨
        chateThunder:function(svg,cloud,rain,thunder,wind){
            var g = svg.paper.g();
            var cloud_1 = cloud.use();
            var cloud_2 = cloud.use();
            var rainList = [];
            var thunders = thunder.use().attr({stroke:"#e5d8ba",strokeWidth:2,transform:"translate(0, 0)"});
            var thunder_bg = thunder.use().attr({stroke:"#000",strokeWidth:4});
            var windList = [];
            var windList_bg = [];
            var wg = svg.paper.g();
            var wbg = svg.paper.g();
            for (var i = 0; i < wind.length; i++) {
                windList[i] = wind[i].use().attr({
                    strokeWidth:2,
                    stroke:"#bae2e0",
                });
                wg.add(windList[i]);
            }
            for (var i = 0; i < wind.length; i++) {
                windList_bg[i] = wind[i].use().attr({
                    strokeWidth:4,
                    stroke:"#000",
                });
                wbg.add(windList_bg[i]);
            }
            console.log(windList);
            console.log(windList_bg);
            var cloudG = svg.paper.g();
            var rainG = svg.paper.g();
            var thunderG = svg.paper.g();
            var windG = svg.paper.g();
            cloud_1.attr({
                transform:"translate(12, 0)"
            })
            cloud_2.attr({                transform:"translate(2, 10)"
            })
            cloudG.add(cloud_1,cloud_2);

            for (var i = 0; i < 8; i++) {
                rainList[i] = rain.use();
                rainList[i].attr({
                    transform:"translate("+i * 6+", 0)"
                });
            }
            rainG.add(rainList).attr({
                transform:"translate(0, 37)"
            });

            thunderG.add(thunder_bg,thunders).attr({
                transform:"translate(49, 26)"
            });

            windG.add(wbg,wg).attr({
                transform:"translate(58, 20) scale(0.4, 0.4)"
            });

            g.add(cloudG,rainG,thunderG,windG).attr({
                transform:"translate(20, 20)"
            });
        },
        funChate_2:function(chate,i){
            var that = this;
            var g = chate.selectAll('g')[i].selectAll('use')[0];
            var form = [0,1];
            var to = [-5,1.5];
            var toForm = [-10,2]
            Snap.animate(form, to, function (val) {
                g.attr({
                    transform:"translate(0, "+val[0]+") scale(1,"+val[1]+")"
                });
            }, that.times_2,function(){     
                if(i < 4){     
                    that.funChate_2(chate,i+1);
                }
                Snap.animate(to, toForm, function (val) {
                    g.attr({
                        transform:"translate(0, "+val[0]+") scale(1,"+val[1]+")"
                    });
                }, that.times_2,function(){
                    Snap.animate(toForm, to, function (val) {
                        g.attr({
                            transform:"translate(0, "+val[0]+") scale(1,"+val[1]+")"
                        });
                    }, that.times_2,function(){
                        Snap.animate(to, form, function (val) {
                            g.attr({
                                transform:"translate(0, "+val[0]+") scale(1,"+val[1]+")"
                            });
                        }, that.times_2,function(){
                            if (i == 4){
                                that.funChate_2(chate,0);
                            }
                        });
                    });
                });
            });
        },
        chate:function(svg,data){
            var path = this.graph(svg,data.system,data.chate).attr(data.style).toDefs();
            return path;
        },
        graph:function(svg,data,share){
            var graph = svg.paper[share](data);
            return graph
        }
    },
    watch: {
        start (val,oldval) {
            const that = this;
            this.svgLoading();
        }
    },
    ready: function(){
        const that = this;
        this.$nextTick(() => {
            that.start = false;
            this.svgLoading();
        })
    }
}
</script>
