// 懒人图库 搜集整理 www.zhirundl.com
$(function(){
    var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +
			"<a href=\"tencent://Message/?Uin=123456789&websiteName=www.zhirundl.com=&Menu=yes\" class=\"izlbtn izlbtn-qq\"></a>" +
			"<div class=\"izlbtn izlbtn-wx\">" +
				"<div class=\"izlpic\"  onclick=\"window.location.href=\'http://www.zhirundl.com\'\"/>" +
			"</div>" +
			"<div class=\"izlbtn izlbtn-phone\">" +
				"<div class=\"phone\">zhirundl.com</div>" +
					"</div>" +
			"<div class=\"izlbtn izlbtn-top\"></div>" +
		"</div>";
    $("#izltop").html(tophtml);
    $("#izl_rmenu").each(function(){
        $(this).find(".izlbtn-wx").mouseenter(function(){
            $(this).find(".izlpic").fadeIn("fast");
        });
        $(this).find(".izlbtn-wx").mouseleave(function(){
            $(this).find(".izlpic").fadeOut("fast");
        });
        $(this).find(".izlbtn-phone").mouseenter(function(){
            $(this).find(".phone").fadeIn("fast");
        });
        $(this).find(".izlbtn-phone").mouseleave(function(){
            $(this).find(".phone").fadeOut("fast");
        });
        $(this).find(".izlbtn-top").click(function(){
            $("html, body").animate({
                "scroll-top":0
            },"fast");
        });
    });
    var lastRmenuStatus=false;
    $(window).scroll(function(){//bug
        var _top=$(window).scrollTop();
        if(_top>200){
            $("#izl_rmenu").data("expanded",true);
        }else{
            $("#izl_rmenu").data("expanded",false);
        }
        if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
            lastRmenuStatus=$("#izl_rmenu").data("expanded");
            if(lastRmenuStatus){
                $("#izl_rmenu .izlbtn-top").slideDown();
            }else{
                $("#izl_rmenu .izlbtn-top").slideUp();
            }
        }
    });
});