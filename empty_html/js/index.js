window.onload = function() {
	//控制切换



		//iscroll
	var wHeight = $(window).height(),
		hHeight = $("header").height(),
		nHeight = $(".nav").height(),
		fHeight = $(".search_footer").height();
	//第一页切换
	$("#scroller").height(wHeight - nHeight - hHeight - fHeight - 20);
	var scroll = new iScroll("scroller", {
		hScrollbar: false,
		vScrollbar: false
	})
	scroll.refresh();
	//第二页切换
	$("#scroller2").height(wHeight - nHeight - hHeight - fHeight - 20);
	var scroll2 = new iScroll("scroller2", {
		hScrollbar: false,
		vScrollbar: false
	})
	scroll2.refresh();

	//第三页切换
	$("#scroller3").height(wHeight - nHeight - hHeight - fHeight - 20);
	var scroll3 = new iScroll("scroller3", {
		hScrollbar: false,
		vScrollbar: false
	})
	scroll3.refresh();


}