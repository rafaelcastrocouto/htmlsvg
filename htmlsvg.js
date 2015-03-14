/* htmlsvg.js - SVG tags in HTML
 *
 * Allows use of <svg> tags in html.
 * Can use it in html line or call an external svg file with "scr" attribute
 * 
 * by r4ffel
 * v0.01
 * 
 * Requires: canvg.js - http://code.google.com/p/canvg/
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 *
 */
var htmlsvg = {
	svgtags:Array,
	canvastags:Array,
	textareatags:Array,
	ajax: function(url){
			var AJAX;
			if(window.XMLHttpRequest){AJAX=new XMLHttpRequest();}
			else{AJAX=new ActiveXObject('Microsoft.XMLHTTP');}
			if(AJAX){
			   AJAX.open('GET',url,false);
			   AJAX.send(null);
			   return AJAX.responseText;
			}
			return null;
		},
	createcanvas : function(){
		this.svgtags=document.getElementsByTagName("svg");
		stagnum=this.svgtags.length;
		
		for (i=0;i<stagnum;i++){
		if(childnum=this.svgtags[0]){
			childnum=this.svgtags[0].childElementCount;
			
							
			this.textareatags[i]=document.createElement("textarea");				
			this.textareatags[i].id="txtsvg_"+i;
			this.textareatags[i].style.display="none";

			if(childnum!=0){this.textareatags[i].value=this.svgtags[0].outerHTML;}					

			if (childnum==0){
				extsvg=this.ajax(this.svgtags[0].getAttribute("scr"));
				this.textareatags[i].value=extsvg.slice(extsvg.indexOf("<"));
				}

			this.svgtags[0].parentNode.insertBefore(this.textareatags[i],this.svgtags[0]);			
			
			this.canvastags[i]=document.createElement("canvas");
			this.canvastags[i].id="canvassvg_"+i;
			this.svgtags[0].parentNode.replaceChild(this.canvastags[i],this.svgtags[0]);

			canvg(document.getElementById("canvassvg_"+i),document.getElementById("txtsvg_"+i).value );
		}
		}
	},

	load : function(){
	
	htmlsvg.createcanvas();
	
	}
	
}
window.onload=htmlsvg.load;

