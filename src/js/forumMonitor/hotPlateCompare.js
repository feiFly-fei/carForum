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
        },
        
        getTableData: function () {
            var data = {
                "data": [
                    {
                        "rank": "1", "plate": "汽车之家", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "2", "plate": "太平洋汽车", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "3", "plate": "本田CR-V论坛", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "4", "plate": "爱卡汽车", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "5", "plate": "易车网132", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "6", "plate": "汽车之家2", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "7", "plate": "本田CR-V论坛12", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "8", "plate": "爱卡汽车2", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "9", "plate": "太平洋汽车1", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "10", "plate": "易车网", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "8901"
                    },
                    {
                        "rank": "11", "plate": "本田CR-V论坛44", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "890111"
                    },
                    {
                        "rank": "12", "plate": "爱卡汽车3", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "890112"
                    },
                    {
                        "rank": "13", "plate": "爱卡汽车443", "mainTopicNum": "1241", "replayTopicNum": "89",
                        "clickNum": "890112"
                    }
                ],
                "rows": 10,
                "total": 13
            };

            return data;
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