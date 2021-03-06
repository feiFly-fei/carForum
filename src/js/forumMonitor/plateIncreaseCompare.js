/**
 * Created by lifei on 2017/11/24.
 */


(function () {
    if(!forum){
        forum = {};
    }

    forum.plateIncrease = {
        init: function () {
            var that = this;
            //初始化select
            $('.selectpicker').selectpicker();

            //初始化swiper
            var mySwiper = new Swiper('.swiper-container',{
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                spaceBetween : 25,
                slidesPerView: 4,
                roundLengths : true
            });

            //初始化左右箭头点击事件
            $('.swiper-icon-next').on('click', function () {
                $('.swiper-button-next').click();
            });

            $('.swiper-icon-prev').on('click', function () {
                $('.swiper-button-prev').click();
            });

            //初始化日期范围选择控件
            laydate.render({
                elem: '#datPicker',
                range: true,
                format: 'yyyy.MM.dd'
            });

            //复选框初始化
            $('.search-box input.checkbox').iCheck({
                checkboxClass: 'icheckbox_minimal-blue search-checkbox'
            });

            //初始化选择框内的点击效果
            $('.search-list li').on('click', function () {
                var _this = $(this);
                if(!_this.hasClass('date-li')){
                    _this.addClass('selected').siblings().removeClass('selected');
                    if(_this.hasClass('self-defined-date')){
                        $('.date-li').css('display', 'inline-block');
                    }else if(_this.siblings('.self-defined-date').length > 0){
                        //清空日期并隐藏
                        $('#datPicker').val('').parent().hide();
                    }
                }
            });

            //更多按钮点击事件
            $('.btn-box .btn-more').on('click', function () {
                var _this = $(this);
                var _spanIcon = _this.find('span.glyphicon'),
                    _ul = _this.parent().prev('.search-list'),
                    _ulParent = _ul.parent();
                if(_this.hasClass('fold')){
                    _ul.css('height', 'auto');
                    _ulParent.prev('.text').css('height', _ulParent.height()+1);
                    _spanIcon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
                    _this.removeClass('fold').addClass('unfold');
                }else if(_this.hasClass('unfold')){
                    _ul.css('height', 50);
                    _ulParent.prev('.text').css('height', 51);
                    _spanIcon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                    _this.removeClass('unfold').addClass('fold');
                }
            });

            //多选按钮点击
            $('.btn-box .btn-check').on('click', function () {
                var $ul = $(this).parent().prev('.search-list');
                that.resetSearchListHeight('unfold', $ul);
            });

            //筛选框内多选的状态下  点击取消按钮的事件
            $('.check-btn-box .cancelBtn').on('click', function () {
               var $ul = $(this).parent().prevAll('.search-list');
               that.resetSearchListHeight('fold', $ul);
            });

            this.resetArrowPosition();
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
        },

        resetArrowPosition: function () {
            var height = $('.brand-select-box').height()/2;
            $('.swiper-icon-prev').css('top', height);
            $('.swiper-icon-next').css('top', height);
        },

        resetSearchListHeight: function (flag, $ul) {
            var $ulParent =$ul.parent(),
                height = $ulParent.height();
            if(flag == 'fold'){
                //折叠起来
                $ul.height(50).nextAll('.check-btn-box').hide();
                $ul.find('li .search-checkbox').hide();
                $ulParent.prev('.text').css('height', 51);
            }else {
                //展开
                $ul.css('height', 'auto').nextAll('.check-btn-box').show();
                $ul.find('li .search-checkbox').css('display', 'inline-block');
                $ulParent.prev('.text').css('height', $ulParent.height()+1);
            }
        }
    }
})();


$(document).ready(function () {
    try {
        forum.plateIncrease.init();
    }catch (e){
        console.error(e);
    }
});