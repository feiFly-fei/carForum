/**
 * Created by lifei on 2017/11/24.
 */

(function () {
    if(!forum){
        forum = {};
    }

    forum. weekData = {
        init: function () {
            var that = this;

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

            //复选框初始化
            $('.search-box input.checkbox').iCheck({
                checkboxClass: 'icheckbox_minimal-blue search-checkbox'
            });

            //初始化日期范围选择控件
            laydate.render({
                elem: '#datPicker',
                range: true,
                format: 'yyyy.MM.dd'
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

            var _popover = "<div class='car-popover operate-box small'> " +
                                "<ul class='popover-ul'>" +
                                    "<li><i class='icon icon-delete'></i>删除论坛</li>"+
                                    "<li><i class='icon icon-fresh'></i>更新论坛</li>"+
                                    "<li><i class='icon icon-graduate'></i>改为毕业论坛</li>"+
                                "</ul>"+
                            "</div>";

            $('.special .search-list li').on({
                'mouseenter': function () {
                    var _this = $(this);
                    _this.popover({
                        placement: 'right',
                        html: true,
                        content: _popover
                     }).popover('show').on('shown.bs.popover', function (e) {
                        console.log(22222222222)
                        var popoverId = _this.attr('aria-describedby');
                        var $popover = $('#' + popoverId);
                        if($popover.length > 0){
                            $popover.on('mouseleave', function () {
                                _this.popover('hide');
                            });
                        }
                    });
                }
            });

            $(_popover).on('shown.bs.popover', function () {
                console.log(1231)
                // $(this).popover('destroy');
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
                    if(_ulParent.closest('div.row').hasClass('special')){
                        _ulParent.prev('.text').css('height', 99);
                    }else {
                        _ulParent.prev('.text').css('height', 51);
                    }

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

            $('#table').bootstrapTable({
                url: '../../json/tableData.json',
                method: 'post',
                pagination: true,
                pageNumber: 1,
                pageSize: 10,
                columns: [
                    {field: 'rank', title: '排名'},
                    {field: 'plate', title: '板块'},
                    {field: 'mainTopicNum', title: '主贴量'},
                    {field: 'replayTopicNum', title: '回帖量'},
                    {field: 'clickNum', title:　'点击量'}
                ]
            });

            //添加标签按钮点击事件
            $('#btnAddTag').on('click', function () {
                $('#myModal').modal('toggle');
            });

            $('#myModal').on('shown.bs.modal', function () {
                that.initModalUi();
            });

        },

        resetSearchListHeight: function (flag, $ul) {
            var $ulParent =$ul.parent(),
                height = $ulParent.height();
            if(flag == 'fold'){
                //折叠起来
                $ul.height(50).nextAll('.check-btn-box').hide();
                $ul.find('li .search-checkbox').hide();
                if($ulParent.closest('div.row').hasClass('special')){
                    $ulParent.prev('.text').css('height', 99);
                }else {
                    $ulParent.prev('.text').css('height', 51);
                }
            }else {
                //展开
                $ul.css('height', 'auto').nextAll('.check-btn-box').show();
                $ul.find('li .search-checkbox').css('display', 'inline-block');
                $ulParent.prev('.text').css('height', $ulParent.height()+1);
            }
        },
   
        initModalUi: function () {
            var that = this;
            //初始化select
            $('.selectpicker').selectpicker();

            //初始化swiper
            var mySwiper = new Swiper('.swiper-container',{
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                slidesPerView: 3,
                roundLengths : true
            });

            //初始化左右箭头点击事件
            $('.swiper-icon-next').on('click', function () {
                $('.swiper-button-next').click();
            });

            $('.swiper-icon-prev').on('click', function () {
                $('.swiper-button-prev').click();
            });

            $('.modal-form .checkbox').iCheck({
                checkboxClass: 'icheckbox_minimal-blue'
            });

            that.resetArrowPosition();
        },

        resetArrowPosition: function () {
            var height = $('.brand-select-box').height()/2;
            $('.swiper-icon-prev').css('top', height);
            $('.swiper-icon-next').css('top', height);
        }
    }
})();

$(document).ready(function () {
    try {
        forum. weekData.init();
    }catch (e){
        console.error(e);
    }
});
