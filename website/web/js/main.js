jQuery(function($) {
	//右侧咨询
	$(".zx li").mouseenter(function(){
		$(this).children("div").show();
	})
	$(".zx li").mouseleave(function(){
		$(this).children("div").stop().hide();
	})	
	$(window).scroll(function(){
		var A = $(window).scrollTop();
	
		if(A > 400){
			$("#back").css("visibility","visible");
		}else{
			$("#back").css("visibility","hidden");
		}
	});
	$("#back").click(function(){
		$("html,body").animate(
			{
				"scrollTop":0
			},500
		);	
	});
	//美洽
	
});
(function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
        s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', 84164);
_MEIQIA('showPanel');