$(function () {


    $.ajax({
        url:'class/selectAllByAjax.action',
        dataType:"json",
        type:'post',
        success:function (data) {
            // alert(data.classDateList[0].classDate);
            $('#auditionClass').html(
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[0].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[0].classProgress+'</p>\n' +
                '</li>\n' +
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[1].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[1].classProgress+'</p>\n' +
                '</li>\n' +
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[2].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[2].classProgress+'</p>\n' +
                '</li>'
            )
            $('#formalClass').html(
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[3].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[3].classProgress+'</p>\n' +
                '</li>\n' +
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[4].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[4].classProgress+'</p>\n' +
                '</li>\n' +
                '<li class="plan-price">' +
                '<p class="fs14">'+data.classDateList[5].classDate+'&emsp;&emsp;&emsp;&emsp;'+data.classDateList[5].classProgress+'</p>\n' +
                '</li>'
            )

        },
        error:function () {
            alert('获取失败')
        }



    })



})