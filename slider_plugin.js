$.fn.slider = function(options = {}){ 

	var slider = $('#slider_content div');
	slider.each(function(index,item){
		$(item).data('slide',index);
		$(item).find('img').css(options);
		if(index != 0){
			$(item).hide();
		}else{
			$(item).addClass('active_slide');
		}
	});	
	
	$('#_next,#_prev ').click(function(){
		var object = $('.active_slide');
		if($(this).attr('id') == '_next'){
			object.next().addClass('active_slide').show();
		}else if($(this).attr('id') == '_prev'){
			object.prev().addClass('active_slide').show();
		}
		
		object.removeClass('active_slide').hide();
		if(object.data('slide') == slider.length - 1 && $(this).attr('id') == '_next'){
			$('#slide_0').addClass('active_slide').show();
		}else if(object.data('slide') == 0 && $(this).attr('id') == '_prev'){
			$('#slide_0').addClass('active_slide').show();
		}
	});

}
