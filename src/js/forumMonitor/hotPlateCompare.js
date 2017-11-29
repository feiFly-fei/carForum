/**
 * Created by lifei on 2017/11/24.
 */

(function () {
    if(!forum){
        forum = {};
    }

    forum.hotPlate = {
        init: function () {
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
            $('input.checkbox').iCheck({
                checkboxClass: 'icheckbox_flat-blue'
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
        }
    }
})();

$(document).ready(function () {
   try {
       forum.hotPlate.init();
   }catch (e){
       console.error(e);
   }
});