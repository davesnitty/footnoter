var footnoter = function(opts){

	//initialize configs
	var footerid = (opts['footer_id']) ? (opts['footer_id']) : 'footnotes';
	var fnclass = (opts['fnclassname']) ? (opts['fnclassname']) : 'fnote';
	var offsetX = (opts['offsetX']) ? (opts['offsetX'])*1 : 14;
	var offsetY = (opts['offsetY']) ? (opts['offsetY'])*1 : 14;
	var hovers = (opts['hovers']===true || opts['hovers']===false) ? (opts['hovers']) : true;
	
	var footnum = 1;

	//select and process each "fnote" tag
	$('span.'+fnclass).each(function(){

		var message = $(this).html();
		var newnote = "<span class='footnote'>"+footnum+": "+message+"</span>";

		$('#'+footerid).html($('#'+footerid).html()+newnote+"<br />");
		
		var newref = "<span class='fnoteref' id='fref"+footnum+"'>"+footnum+"</span>";
		
		$(this).after(newref);
		$(this).remove();
		
		if (hovers){
			$('#fref'+footnum).hover(function(e){
				var ftip = "<div class='ftip' id='ftip"+footnum+"'>"+message+"</div>";
				$('body').append(ftip);
				$('#ftip'+footnum).css({position: 'absolute', left: e.pageX+offsetX, top: e.pageY+offsetY});
			},function(){
				$('#ftip'+footnum).remove();
			} );
		}
		
		footnum++;
	});
}
