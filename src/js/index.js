/**
 * Created by lifei on 2017/11/23.
 */

(function () {
    forum = {};
    forum.base = {};
    forum.base.loading = {};

    forum.base.loading = function () {

        //头部论坛监测 社区监测点击事件
        $('#nav_top li').on('click', function () {
            var _this = $(this);
            //选中样式切换
            _this.addClass('active').siblings().removeClass('active');

            //根据点击的标志 判断  左侧导航切换 右侧内容切换
            var _forumNav = $('#forum_nav'), _comNav = $('#community_nav');
            if(_this.hasClass('forum')){
                //显示论坛监测相关内容
                _comNav.hide();
                _forumNav.show();
            }else {
                //显示社区监测相关内容
                _forumNav.hide();
                _comNav.show();


            }

        });

        //左侧 论坛监测导航点击事件
        $('#forum_nav li').on('click', function () {
            $('#forum_nav li').removeClass('active');
            $(this).addClass('active');
        });

        //左侧 社区监测点击事件
        $('#community_nav li').on('click', function () {
            $('#community_nav li').removeClass('active');
            $(this).addClass('active');
        });
    };

    forum.base.getForumDefaultPage = function () {
        $.get('../forumMonitor/incrementTotal.html','',function (result) {
            $('#content_wrap').empty().append($(result));
        }, 'html');
    }
})();

$(document).ready(function () {
   forum.base.loading();
   forum.base.getForumDefaultPage();
});