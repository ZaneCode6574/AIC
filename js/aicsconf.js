
$(function(){
	var textm=$("#poster_table_id");
	if(textm.length>0){
	show_div_html();
	init_table_show_id();
	}
}) 
	
	function show_div_html(){ 
	var html="	<style>td{cursor:pointer;border:1px solid #88888c;} .mask {position: fixed;left: 0;top: 0;right: 0;bottom: 0;background: rgba(0,0,0,.8);z-index: 9998;transition: all 0.5s;display: none;z-index: 999999;}.bigimg_text {width: 1100px !important;position: fixed;left: 0;top: 0;right: 0;bottom: 0;margin: auto;z-index: 9999;height: 80%;overflow: auto;background: #ffffff;}.mask .close {position: fixed;right: 10px; top: 10px; width: 60px;z-index: 9999;}.bigimg_text img {display: block;   margin: 0 auto;  width: auto !important;   height: auto; max-width: 100% !important;}</style>";		
	html=html+"<div class=\"mask\"><div class=\"bigimg_text\"><img src=\"\" class=\"bigimg\"></div><img src=\""+g_image_base_url+"/rstatic/aicsconf/images/poster/close.png\"  class=\"close\"></div>";	
		$("body").append(html);
		
}
function init_table_show_id(){
	
	$("#poster_table_id tbody tr").each(function(){ 
	
		var textm=$(this).find("td.image_td");
		if(textm.length>0){
			var mt=textm.text();
			mt=$.trim(mt);  
			$(this).click(function(){show_click_event(mt)});
		}
	}); 
}
	
function zoom(mask, bigimg, smallimg) {
	this.bigimg = bigimg;
	this.smallimg = smallimg;
	this.mask = mask
}
zoom.prototype = {
	init: function() {
		var that = this;  
		$("." + that.mask).fadeIn(); 
		$("." + that.bigimg).attr("src", g_image_base_url+"/rstatic/aicsconf/images/poster/"+that.smallimg+".jpg").fadeIn(1000)
		this.maskClick();
	//	this.mouseWheel()
	}, 
	maskClick: function() {
		var that = this;
		$("." + that.mask).click(function() {
			$("." + that.bigimg).fadeOut(1000);
			$("." + that.mask).fadeOut(1000)
		})
	},
};
	
	
function show_click_event(img_pre){
	

		$(".bigimg").attr("src", "");
		var obj = new zoom('mask', 'bigimg', img_pre);
		obj.init();
	
}