footnoter.js
=============

footnoter.js is a JS library to convert inline comments into footnotes without needing to keep track of numbering and intra-document references.

Dependencies
--------------------
* JQuery - footnoter.js relies on <a href='http://jquery.com/'>JQuery</a>, so you need to have it enabled on any page where you use footnoter.

Usage
--------------------
To use footnoter, you will need to download the "js/footnoter.js" and "css/footnoter.css" files from this repo and reference them in the HTML head.  For example:

		<script type='text/javascript' src='../js/footnoter.js'></script>
		<link rel='stylesheet' type='text/css' href='../css/footnoter.css' />
		
Now that you've referenced the footnoter.js source, you can pepper your HTML with footnotes and not need to worry about numbering at all.  For example, let's write a paragraph mentioning animals with footnotes listing their latin names:

		<p>
			Animals native to New York state include the Black Bear<span class='fn'>Ursus americanus</span> and Wild Turkey<span class='fn'>Meleagris gallopavo</span>
		</p>
		
As you can see, we've chosen the "fn" class to include our footnote text inline.  To activate the footnotes, we need just a few more steps:

1. Put a &lt;div&gt; somewhere on your page where the footnotes will appear.  For instance:

		<div id='footnotes'></div>

2. Insert a few lines of JS to transform the footnotes.  See the comments in the following code for detail:

		<script type='text/javascript'>
		$(document).ready(function(){;
			var fnote_options = {};
			fnote_options.footer_id = 'footnotes'; 	//tells it where to put your footnotes
			fnote_options.fnclassname = 'fn';			//tells it the class name you chose for your inline footnotes
			footnoter(fnote_options);
		});
		</script>

Customization
-----------------------
The "fnote_options" object offers several options for customizing the behavior of footnoter.js:

<table class='nicetable'>
<tr><th>Option</th><th>Description</th><th>Example Usage</th></tr>
<tr><td>footer_id</td><td>Tells the script where to put your footnotes.  Should be the id of a div.</td><td>fnote_options.footer_id = 'footnotes';</td></tr>
<tr><td>fnclassname</td><td>Tells the script the class name you used for your inline footnotes.</td><td>fnote_options.fnclassname = 'fn';</td></tr>
<tr><td>hovers</td><td>Enables or disables the hover behavior on footnotes for tooltips (default = true)</td><td>fnote_options.hovers = false;</td></tr>
<tr><td>offsetX</td><td>The horizontal offset from mouse pointer, in pixels, of the tooltip that appears when hovering over a footnote (default = 14)</td><td>fnote_options.offsetX = 14;</td></tr>
<tr><td>offsetY</td><td>The vertical offset from mouse pointer, in pixels, of the tooltip that appears when hovering over a footnote (default = 14)</td><td>fnote_options.offsetY = 14;</td></tr>

</table>

Styles
--------------
The footnoter.js script creates elements with 2 different classes, "fnoteref" and "ftip".  Both of these receive their default styles in "css/footnoter.css", and of course, this file can either be customized or merged with any other stylesheet.

* fnoteref - These are the numerical references within the main text that refer to their corresponding footnotes
* ftip - These are the tooltips that appear when you hover over the "fnoteref" elements

Browser Compatability
-----------------------
Tested on the latest versions of Firefox and Chrome, as well as IE9

P.S.  Although I've been coding for many years, this is my 1st project on GitHub.  Thanks for exploring!