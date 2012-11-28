var footnoter = function(){

	//initialize configs
	this.footerid = '';
	this.tagid = '';

	this.run = function(){

		var footnum = 1;

		//select and process each "fnote" tag
		$('fnote').each(function(){
			var message = $(this).html();
			var newnote = "<span class='footnote'><a name='footnote_"+footnum+"'></a>"+footnum+": "+message+"</span>";
			$('#footnotes').html($('#footnotes').html()+newnote+"<br />");
			
			var newref = "<a href='#footnote_"+footnum+"'><span class='fnoteref' id='fref"+footnum+"'>"+footnum+"</span></a>";
			
			$(this).after(newref);
			$(this).remove();
			
			$('#fref'+footnum).hover(function(e){
				var ftip = "<div class='ftip' id='ftip"+footnum+"'>"+message+"</div>";
				$('body').append(ftip);
				$('#ftip'+footnum).css({position: 'absolute', left: e.pageX+14, top: e.pageY+14});
			},function(){
				$('#ftip'+footnum).remove();
			} );
			
			footnum++;
		});
	};
};