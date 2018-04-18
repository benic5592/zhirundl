$(function () {


    $('#insertTaskBtn')
        .on('click', insertTask);

    $('#refresh')
        .on('click', showTimeline);

    showTimeline();


})


function insertTask() {
    $.post('/task/insertWithoutId.action',{
        taskName:$('#taskName').val(),
        memberName:$('#memberName').val(),
        dateFrom:$('#dateFrom').val(),
        dateTo:$('#dateTo').val(),
        taskContent:$('#taskContent').val(),
        comments:$('#comments').val()
    },function (data) {
        var num = data.num;
        if(num > 0){
            alert("添加成功");
            showTimeline();
        } else {
            alert("添加失败");
        }
    },"json");
}


function showTimeline() {
    $.post('/task/selectTaskByDate.action',{
        dateFrom:$('#startTime').val(),
        dateTo:$('#endTime').val()
    },function (data) {
        var tg1 = $("#placement").timeline({
            "data_source":data.timelineList,
            // "data_source":"json_tests/js_history.json",
            "min_zoom":15,
            "max_zoom":60,
            "timezone":"08:00",
            "icon_folder":"timeglider/icons/",
            "show_footer":true,
            "display_zoom_level":true,
            "mousewheel":"zoom", // zoom | pan | none
            "constrain_to_data":true,
            "image_lane_height":100,
            "legend":{type:"default"},
            "loaded":function () {
                // loaded callback function
            }
        });
    },"json");


}