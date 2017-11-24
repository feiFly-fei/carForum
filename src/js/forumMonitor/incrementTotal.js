/**
 * Created by lifei on 2017/11/23.
 */

(function () {

    if(!forum){
        forum = {};
    }

    forum.increment = {
        init: function () {
            //初始化swiper
            var mySwiper = new Swiper('.swiper-container',{
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                spaceBetween : 25,
                slidesPerView: 4,
                roundLengths : true
            });

            $('input.checkbox').iCheck({
                checkboxClass: 'icheckbox_flat-blue'
            });

            //初始化左右箭头点击事件
            $('.swiper-icon-next').on('click', function () {
               $('.swiper-button-next').click();
            });

            $('.swiper-icon-prev').on('click', function () {
                $('.swiper-button-prev').click();
            });

            $('.selectpicker').selectpicker();

            this.loadEchartData();
        },

        loadEchartData: function () {

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        type:'pie',
                        radius: ['50%', '70%'],
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {
                                value:335, name:'车轮社区',
                                itemStyle:{
                                    normal:{
                                        color: '#6277f7'
                                    }
                                }
                            },
                            {
                                value:310, name:'易车网',
                                itemStyle:{
                                    normal:{
                                        color: '#8c90ec'
                                    }
                                }
                            },
                            {
                                value:234, name:'爱卡汽车',
                                itemStyle:{
                                    normal:{
                                        color: '#36d7d9'
                                    }
                                }
                            },
                            {
                                value:135, name:'太平洋汽车',
                                itemStyle:{
                                    normal:{
                                        color: '#33b0f3'
                                    }
                                }
                            },
                            {
                                value:448, name:'汽车之家',
                                itemStyle:{
                                    normal:{
                                        color: '#5498ff'
                                    }
                                }
                            }
                        ]
                    }
                ]
            };
            var chart = echarts.init(document.getElementById('chart'));
            chart.setOption(option);
        }
    }

})();


$(document).ready(function () {
    forum.increment.init();
});