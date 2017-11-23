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
                spaceBetween : 20,
                slidesPerView: 4,
                roundLengths : true
            });

            $('input.checkbox').iCheck({
                checkboxClass: 'icheckbox_flat-blue'
            });
        }
    }

})();


$(document).ready(function () {
    forum.increment.init();
});