
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
{name:"春苑分店",value: 50},{name:"大观商业城分店",value: 50},{name:"人民东路分店",value: 50},{name:"吴井路分店",value: 50},{name:"胜利花园分店",value: 50},{name:"江东花园分店",value: 50},{name:"苏家塘分店",value: 50},{name:"吉庆分店",value: 50},{name:"东风东路分店",value: 50},{name:"刘家营分店",value: 50},{name:"金实小区分店",value: 50},{name:"华龙分店",value: 50},{name:"环城南路分店",value: 50},{name:"国贸分店",value: 50},{name:"桃源街分店",value: 50},{name:"茭菱路分店",value: 50},{name:"鸣翠园分店",value: 50},{name:"白云路分店",value: 50},{name:"新闻路分店",value: 50},{name:"金沙小区分店",value: 50},{name:"龙泉分店",value: 50},{name:"东华小区分店",value: 50},{name:"新港花园分店",value: 50},{name:"青年路分店",value: 50},{name:"和平盛市分店",value: 50},{name:"昆明白马分店",value: 50},{name:"昆明俊发城金盏苑分店",value: 50},{name:"俊园分店",value: 50},{name:"寻甸分店",value: 50},{name:"昆烟分店",value: 50},{name:"学府路分店",value: 50},{name:"丰宁分店",value: 50},{name:"安康路分店",value: 50},{name:"江东竹香园分店",value: 50},{name:"浅水湾分店",value: 50},{name:"昆师路分店",value: 50},{name:"江岸小区分店",value: 50},{name:"春城路分店",value: 50},{name:"佳园小区分店",value: 50},{name:"曙光小区分店",value: 50},{name:"颐园路分店",value: 50},{name:"温馨家园分店",value: 50},{name:"船房小区分店",value: 50},{name:"北辰小区分店",value: 50},{name:"宜良分店",value: 50},{name:"月牙塘分店",value: 50},{name:"文化巷分店",value: 50},{name:"凯源路分店",value: 50},{name:"兴隆花园分店",value: 50},{name:"玉溪山水佳园一分店",value: 50},{name:"国际花园分店",value: 50},{name:"昆洲路分店",value: 50},{name:"江东花城分店",value: 50},{name:"康宏小区分店",value: 50},{name:"茨坝分店",value: 50},{name:"世纪龙苑分店",value: 50},{name:"丹霞路分店",value: 50},{name:"腾龙苑分店",value: 50},{name:"玉溪凤凰路分店",value: 50},{name:"玉溪北苑小区分店",value: 50},{name:"时代风华分店",value: 50},{name:"石林分店",value: 50},{name:"时代年华分店",value: 50},{name:"秋苑小区分店",value: 50},{name:"寻甸东钟分店",value: 50},{name:"昆明黑林铺分店",value: 50},{name:"曲靖南宁北路分店",value: 50},{name:"曲靖麒麟西路分店",value: 50},{name:"澄江分店",value: 50},{name:"高教小区分店",value: 50},{name:"曲靖交通路分店",value: 50},{name:"国贸小区分店",value: 50},{name:"金洲湾分店",value: 50},{name:"蓝天小区分店",value: 50},{name:"宣威建设街分店",value: 50},{name:"昌宏路分店",value: 50},{name:"曲靖麒麟南路分店",value: 50},{name:"昆三中分店",value: 50},{name:"玉溪龙泉路分店",value: 50},{name:"开远灵泉东路分店",value: 50},{name:"易门中心街分店",value: 50},{name:"曲靖麟瑞小区分店",value: 50},{name:"船舶小区分店",value: 50},{name:"吴井新村分店",value: 50},{name:"南苑小区分店",value: 50},{name:"关兴路分店",value: 50},{name:"交三桥分店",value: 50},{name:"晋宁晋城晋东路分店",value: 50},{name:"开远灵泉西路分店",value: 50},{name:"菱角塘分店",value: 50},{name:"昆明实力玖如堂分店",value: 50},{name:"曲靖前北巷分店",value: 50},{name:"个旧七层楼分店",value: 50},{name:"泸西九华路分店",value: 50},{name:"德缘小区分店",value: 50},{name:"北站分店",value: 50},{name:"曙光东区分店",value: 50},{name:"玉溪大广场分店",value: 50},{name:"个旧太阳城分店",value: 50}
];
		var toolTipData = [

{name:"春苑分店", value: [{name:"类型",value:"药店"}]},{name:"大观商业城分店", value: [{name:"类型",value:"药店"}]},{name:"人民东路分店", value: [{name:"类型",value:"药店"}]},{name:"吴井路分店", value: [{name:"类型",value:"药店"}]},{name:"胜利花园分店", value: [{name:"类型",value:"药店"}]},{name:"江东花园分店", value: [{name:"类型",value:"药店"}]},{name:"苏家塘分店", value: [{name:"类型",value:"药店"}]},{name:"吉庆分店", value: [{name:"类型",value:"药店"}]},{name:"东风东路分店", value: [{name:"类型",value:"药店"}]},{name:"刘家营分店", value: [{name:"类型",value:"药店"}]},{name:"金实小区分店", value: [{name:"类型",value:"药店"}]},{name:"华龙分店", value: [{name:"类型",value:"药店"}]},{name:"环城南路分店", value: [{name:"类型",value:"药店"}]},{name:"国贸分店", value: [{name:"类型",value:"药店"}]},{name:"桃源街分店", value: [{name:"类型",value:"药店"}]},{name:"茭菱路分店", value: [{name:"类型",value:"药店"}]},{name:"鸣翠园分店", value: [{name:"类型",value:"药店"}]},{name:"白云路分店", value: [{name:"类型",value:"药店"}]},{name:"新闻路分店", value: [{name:"类型",value:"药店"}]},{name:"金沙小区分店", value: [{name:"类型",value:"药店"}]},{name:"龙泉分店", value: [{name:"类型",value:"药店"}]},{name:"东华小区分店", value: [{name:"类型",value:"药店"}]},{name:"新港花园分店", value: [{name:"类型",value:"药店"}]},{name:"青年路分店", value: [{name:"类型",value:"药店"}]},{name:"和平盛市分店", value: [{name:"类型",value:"药店"}]},{name:"昆明白马分店", value: [{name:"类型",value:"药店"}]},{name:"昆明俊发城金盏苑分店", value: [{name:"类型",value:"药店"}]},{name:"俊园分店", value: [{name:"类型",value:"药店"}]},{name:"寻甸分店", value: [{name:"类型",value:"药店"}]},{name:"昆烟分店", value: [{name:"类型",value:"药店"}]},{name:"学府路分店", value: [{name:"类型",value:"药店"}]},{name:"丰宁分店", value: [{name:"类型",value:"药店"}]},{name:"安康路分店", value: [{name:"类型",value:"药店"}]},{name:"江东竹香园分店", value: [{name:"类型",value:"药店"}]},{name:"浅水湾分店", value: [{name:"类型",value:"药店"}]},{name:"昆师路分店", value: [{name:"类型",value:"药店"}]},{name:"江岸小区分店", value: [{name:"类型",value:"药店"}]},{name:"春城路分店", value: [{name:"类型",value:"药店"}]},{name:"佳园小区分店", value: [{name:"类型",value:"药店"}]},{name:"曙光小区分店", value: [{name:"类型",value:"药店"}]},{name:"颐园路分店", value: [{name:"类型",value:"药店"}]},{name:"温馨家园分店", value: [{name:"类型",value:"药店"}]},{name:"船房小区分店", value: [{name:"类型",value:"药店"}]},{name:"北辰小区分店", value: [{name:"类型",value:"药店"}]},{name:"宜良分店", value: [{name:"类型",value:"药店"}]},{name:"月牙塘分店", value: [{name:"类型",value:"药店"}]},{name:"文化巷分店", value: [{name:"类型",value:"药店"}]},{name:"凯源路分店", value: [{name:"类型",value:"药店"}]},{name:"兴隆花园分店", value: [{name:"类型",value:"药店"}]},{name:"玉溪山水佳园一分店", value: [{name:"类型",value:"药店"}]},{name:"国际花园分店", value: [{name:"类型",value:"药店"}]},{name:"昆洲路分店", value: [{name:"类型",value:"药店"}]},{name:"江东花城分店", value: [{name:"类型",value:"药店"}]},{name:"康宏小区分店", value: [{name:"类型",value:"药店"}]},{name:"茨坝分店", value: [{name:"类型",value:"药店"}]},{name:"世纪龙苑分店", value: [{name:"类型",value:"药店"}]},{name:"丹霞路分店", value: [{name:"类型",value:"药店"}]},{name:"腾龙苑分店", value: [{name:"类型",value:"药店"}]},{name:"玉溪凤凰路分店", value: [{name:"类型",value:"药店"}]},{name:"玉溪北苑小区分店", value: [{name:"类型",value:"药店"}]},{name:"时代风华分店", value: [{name:"类型",value:"药店"}]},{name:"石林分店", value: [{name:"类型",value:"药店"}]},{name:"时代年华分店", value: [{name:"类型",value:"药店"}]},{name:"秋苑小区分店", value: [{name:"类型",value:"药店"}]},{name:"寻甸东钟分店", value: [{name:"类型",value:"药店"}]},{name:"昆明黑林铺分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖南宁北路分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖麒麟西路分店", value: [{name:"类型",value:"药店"}]},{name:"澄江分店", value: [{name:"类型",value:"药店"}]},{name:"高教小区分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖交通路分店", value: [{name:"类型",value:"药店"}]},{name:"国贸小区分店", value: [{name:"类型",value:"药店"}]},{name:"金洲湾分店", value: [{name:"类型",value:"药店"}]},{name:"蓝天小区分店", value: [{name:"类型",value:"药店"}]},{name:"宣威建设街分店", value: [{name:"类型",value:"药店"}]},{name:"昌宏路分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖麒麟南路分店", value: [{name:"类型",value:"药店"}]},{name:"昆三中分店", value: [{name:"类型",value:"药店"}]},{name:"玉溪龙泉路分店", value: [{name:"类型",value:"药店"}]},{name:"开远灵泉东路分店", value: [{name:"类型",value:"药店"}]},{name:"易门中心街分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖麟瑞小区分店", value: [{name:"类型",value:"药店"}]},{name:"船舶小区分店", value: [{name:"类型",value:"药店"}]},{name:"吴井新村分店", value: [{name:"类型",value:"药店"}]},{name:"南苑小区分店", value: [{name:"类型",value:"药店"}]},{name:"关兴路分店", value: [{name:"类型",value:"药店"}]},{name:"交三桥分店", value: [{name:"类型",value:"药店"}]},{name:"晋宁晋城晋东路分店", value: [{name:"类型",value:"药店"}]},{name:"开远灵泉西路分店", value: [{name:"类型",value:"药店"}]},{name:"菱角塘分店", value: [{name:"类型",value:"药店"}]},{name:"昆明实力玖如堂分店", value: [{name:"类型",value:"药店"}]},{name:"曲靖前北巷分店", value: [{name:"类型",value:"药店"}]},{name:"个旧七层楼分店", value: [{name:"类型",value:"药店"}]}

];
// 门店名称和经纬度数据
var geoCoordMap  = {
"春苑分店":[102.674175,25.043231],"大观商业城分店":[102.697346,25.042766],"人民东路分店":[102.726786,25.0431],"胜利花园分店":[102.734132,25.055667],"江东花园分店":[102.724289,25.074032],"苏家塘分店":[102.692071,25.062244],"吉庆分店":[102.710986,25.048128],"东风东路分店":[102.736646,25.038587],"刘家营分店":[102.692593,25.024348],"金实小区分店":[102.731333,25.075115],"华龙分店":[102.700675,25.026416],"环城南路分店":[102.7223,25.02463],"国贸分店":[102.730215,25.013003],"桃源街分店":[102.716836,25.046981],"茭菱路分店":[102.68924,25.049275],"鸣翠园分店":[102.738976,25.08334],"白云路分店":[102.736983,25.057067],"新闻路分店":[102.693188,25.035815],"金沙小区分店":[102.761143,25.042217],"龙泉分店":[102.726321,25.061512],"东华小区分店":[102.734719,25.04407],"新港花园分店":[102.708995,25.031091],"青年路分店":[102.716669,25.036117],"和平盛市分店":[102.722617,25.027133],"昆明白马分店":[102.677197,25.036094],"昆明俊发城金盏苑分店":[102.750454,25.104596],"俊园分店":[102.706392,25.052156],"寻甸分店":[103.254984,25.557657],"昆烟分店":[102.722879,25.108439],"学府路分店":[102.698928,25.062971],"丰宁分店":[102.671105,25.050371],"安康路分店":[102.69407,25.027904],"江东竹香园分店":[102.739219,25.087182],"浅水湾分店":[102.726162,25.001464],"昆师路分店":[102.714563,25.048861],"江岸小区分店":[102.7116,25.067844],"春城路分店":[102.725718,25.031455],"佳园小区分店":[102.745132,25.058274],"曙光小区分店":[102.737634,25.032784],"颐园路分店":[102.727595,25.067185],"温馨家园分店":[102.730035,25.083514],"船房小区分店":[102.689686,25.02425],"北辰小区分店":[102.736834,25.079974],"宜良分店":[103.145487,24.916998],"月牙塘分店":[102.729529,25.094791],"文化巷分店":[102.698745,25.0542]};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
    tooltip : {
        trigger: 'item',
		formatter: function(params) {

            if (typeof(params.value)[2] == "undefined") {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            } else {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            }

        }


    },

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'effectScatter',

            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }

		/**
		,
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd800',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)'
                }
            },
            zlevel: 1
        }
		**/
    ]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

