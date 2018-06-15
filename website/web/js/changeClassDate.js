$(function () {

    $.ajax({
        url:'class/selectAllByAjax.action',
        dataType:'json',
        type:'post',
        success : function (data) {
            $("input[name='classDate']").each(function (i) {

                var d = data.classDateList[i].classDate;
                d = d.replace("年","-");
                d = d.replace("月","-");
                d = d.replace("日","-");

                var drr = d.split("-");

                if(drr[1].length < 2){
                    drr[1] = '0'+drr[1];
                }
                if(drr[2].length < 2){
                    drr[2] = '0'+drr[2];
                }

                $(this).val(drr[0] + '-'+drr[1] + '-'+drr[2]);
            });
            $("input[name='classProgress']").each(function (i) {
                $(this).val(data.classDateList[i].classProgress);
            });
        },
        error:function () {
            alert('失败')
        }


    })


    var count = $.query.get("count");
    if(count != ""){
        if(count > 0){
            alert('更新完成!');
        } else {
            alert('更新失败,请稍后重新操作,或联系管理员');
        }
    }



})